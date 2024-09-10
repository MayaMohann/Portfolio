// import React from "react";
import { useState } from 'react';
import './Styles/style.css'


    const Contact = () => {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
          });
    
    
          const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData({
              ...formData,
              [name]: value
            });
          };
    
          const handleSubmit = (event) => {
            event.preventDefault();
            const confirmationMessage = `
              Name: ${formData.name}
              Email: ${formData.email}
              Message: ${formData.message}
    
            `;
            const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
            if (isConfirmed) {
              console.log('Submitting feedback:', formData);
              setFormData({
                name: '',
                email: '',
                message: ''
                          });
              alert('Thank you');
            }
          };
    
      return (
        <>
        <nav>
        Write me what you think!
        </nav>
        <form onSubmit={handleSubmit} className="feedback-form">

        <h2>I Love to Hear From You!</h2>
            <p> </p>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
            <textarea name="message" placeholder="Write Your Message" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">Submit Feedback</button>
          </form>

          
        </>
    )
}

export default Contact