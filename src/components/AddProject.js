import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {
  state = {}
  render() {
    return (
      <form className="AddNew" onSubmit={() => this.handleSubmit()}>
        <input name='title' placeholder='title' onChange={this.handleChange.bind(this)}/>
        <input name='description' placeholder='description' onChange={this.handleChange.bind(this)}/>
        <input name='img_url' placeholder='image url' onChange={this.handleChange.bind(this)}/>
        <input name='github' placeholder='github' onChange={this.handleChange.bind(this)}/>
        <input name='codepen' placeholder='codepen' onChange={this.handleChange.bind(this)}/>
        <input name='demo' placeholder='live demo' onChange={this.handleChange.bind(this)}/>
        <input type="submit"/>
      </form>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }

  handleSubmit() {
    axios
      .post('https://lambda-notes-b2b43.firebaseio.com/projects.json', this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
}

export default AddProject;