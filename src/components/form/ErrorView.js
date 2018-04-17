// contact form 

import React from 'react';

const ErrorView = (props) => {
  return(
    <div>
      <h2 className="title">Get In Touch</h2>
      <p className="contact-message">
        I love working on unique websites, if you have any questions or
        have an interesting project you think I'm the perfect one to do,
        send me an email below:
      </p>
      <p className="message danger">
           {/* {props.text} */}
           Error
         </p>
    </div>
  )
}
export default ErrorView