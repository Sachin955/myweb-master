import React from 'react'
import '../Contact/index.css'

const Contact = () => {
  return (
    
      <div className="container">
        <h2>Write Us</h2>
        <form action="">
          <input type="email" name="email" id="email" placeholder="Enter your email" />
          <input type="text" name="name" id="name" placeholder=" Enter your name" />
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message here"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
      )
}

      export default Contact;