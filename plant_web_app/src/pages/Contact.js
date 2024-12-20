import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css'
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default Contact;