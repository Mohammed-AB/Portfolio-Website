import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
// import Contact from './components/contact';
// import MediaQuery from 'react-responsive';


class App extends Component {
  render() {
    return (


        
// first

      
      <div className="demo-big-content">
    <Layout>
      {/* header color */}
        <Header className='header-color' title="Main" scroll>
            <Navigation>
                <Link to="/resume">Reusme</Link>
                <Link className='header' to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        {/* <Drawer title="Title">
        <Navigation>
                <Link to="/resume">Reusme</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer> */}
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    

      <Particles 
             params={{
                particles: {
                    number: {

                        "value": 20,
                        "density": {
                            // "enable": true,
                            "value_area": 800
                        }

                    },

                    color: {
                        'color': "#1aadaf",
                        "size": 10
                    },

                    shape: {
                        "type": "triangle",
                        "stroke": {
                            "width": 20,
                            'color': "#1aadaf",
                        }
                    },

                    polygon: {
                        "nb_sides": 5
                    },

                    opacity: {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      size: {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 8,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                    
                    line_linked: {
                        
                            'enable': true,
                            'color': "#1aadaf",
                            'blur': 1,
                            "distance": 150,
                            "width": 7
                        },

                        

                        move: {
                            "enable": true,
                            "speed": 20,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": true,
                            "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                            }
                          }
                        },
                        interactivity: {
                          "detect_on": "window",
                          "events": {
                            "onhover": {
                              "enable": true,
                              "mode": "push"
                            },
                            onclick: {
                              "enable": true,
                              "mode": "push"
                            },
                            "resize": true
                          },
                        
                            modes: {
                                "grab": {
                                  "distance": 800,
                                  "line_linked": {
                                    "opacity": 1
                                  }
                                },
                                bubble: {
                                  "distance": 800,
                                  "size": 80,
                                  "duration": 2,
                                  "opacity": 0.8,
                                  "speed": 3
                                },
                                repulse: {
                                  "distance": 400,
                                  "duration": 0.4
                                },
                                push: {
                                  particles_nb: 4
                                },
                                
                                remove: {
                                  "particles_nb": 2
                                }
                              }
                            },
                            "retina_detect": true
                        
                    
                }
            
            }
          
         
            />
            
            

</div>



    
    );
  }
}



export default App;