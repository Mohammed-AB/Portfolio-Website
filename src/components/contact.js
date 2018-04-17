// Original contact form 

// import React, { Component } from 'react'; 
// import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


// class Contact extends Component {
//   render() {
//     return(
//       <div className="contact-body">
//         <Grid className="contact-grid">
//           <Cell col={6}>
//             <h2>Mohammed Abumtary</h2>
//             <img
//               src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/42185e38c1bc74f9bc5c016a6de57e81/595fcc23-5c51-4190-8072-60b1e2fe314e_rw_3840.JPG?h=ed26915cfa741e5caccd66a40fec50c9"
//               alt="avatar"
//               style={{height: '250px'}}
//                />
//              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Mohammed Abumtary is a visual Artist, was born in Libya November 11-1997
// currently lives in the United States.
// specializes in: Photograph & Graphic Design/edit.
// Currently a </p>              

//           </Cell>
//           <Cell col={6}>
//             <h2 style={{ width: '75%', margin: 'auto', paddingTop: '1em', color: 'white'}}>Contact Me</h2>
//             <hr/>

//             <div className="contact-list">
//               <List>
//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
//                     <i className="fa fa-envelope" aria-hidden="true"/>
//                     manfo_6@yahoo.com
//                   </ListItemContent>
//                 </ListItem>

//                 <ListItem>
//                   <ListItemContent  style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
//                   <a href="https://github.com/Mohammed-AB/portfolio-website" rel="noopener noreferrer" target="_blank">

//                     <i className="fa fa-map-marker" aria-hidden="true"/></a>
//                     Augusta Ga.
//                   </ListItemContent>
//                 </ListItem>


//                 <ListItem>
//                   {/* <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
//                     <i className="fa fa-skype" aria-hidden="true"/>
//                     .....
//                   </ListItemContent> */}
//                 </ListItem>


//               </List>
//             </div>
//           </Cell>
//         </Grid>
//       </div>
//     )
//   }
// }

// export default Contact;


// contact form 


import React, { Component } from 'react';
import axios from 'axios';

// Form Views
import DefaultView from './form/DefaultView';
import ErrorView from './form/ErrorView';
import SentView from './form/SentView';

import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: '',
      msg: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  async handleSubmit(event) {
    event.preventDefault();

    const { name, email, message } = this.state;
    const captcha = document.querySelector('#g-recaptcha-response').value;

    const form = await axios.post('/api/form', {
      name,
      email,
      message,
      captcha
    });

    // Check captcha status
    if (form.data.success === false) {
      this.setState({ sent: false, msg: form.data.msg });
    } else {
      this.setState({ sent: true });
      await this.clearForm();
    }
  }

  // Clear Form after submit
  clearForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      error: ''
    });
  }

  renderStatus() {
    switch (this.state.sent) {
      case false:
        return <ErrorView text={this.state.msg} />;
      case true:
        return <SentView />;
      default:
        return <DefaultView />;
    }
  }

  render() {
    return (
      <section className="wrapper">
        <div className="contact-wrapper">
          {/* Render Form paragraph with sent status */}
          {this.renderStatus()}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message/Comment</label>
              <textarea
                name="message"
                rows="10"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                required
              />
            </div>
            <div>
              <div
                className="g-recaptcha"
                data-sitekey="6LfWPTMUAAAAAO-5cU6hv9bHBX08DVUrvIrvnrRl"
              />
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact; 






