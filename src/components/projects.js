import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }

      toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',}}>
            <CardTitle style={{color: '#fff', height: '260px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
                content
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff',}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '260px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
            content
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '260px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            content
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#004e92'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card> */}

        </div>
        
            )
          } else if(this.state.activeTab === 1) {
            return (
              <div><h1>This is Angular</h1></div>
            )
          } else if(this.state.activeTab === 2) {
            return (
              <div><h1>This is VueJS</h1></div>
            )
          } else if(this.state.activeTab === 3) {
            return (
              <div><h1>This is MongoDB</h1></div>
            )
        }
      }

      

        
    render() {
      return(
          <div>
              

          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
        </Tabs>


        <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


          </div>
          
      )
    }
}


export default Projects;