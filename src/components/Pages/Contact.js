import React, { useState } from 'react';
import '../style.css'

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target; // since name is a const, it cannot change; however we are grabbing the e.target value by the name of the event
    // and then after targeting the event happening break and reset the switch name and then run that value which allows the const name to be used if different ways
    switch (name) { 
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
        default:
          break;
    }
  };

  const handleFormSubmit = (e) => {
    // when the button is clicked the useState will be updated
    setFullName(fullName); // setFullName from the handleInputChange 
    setEmail(email);
    setMessage(message)
    // confirming the new values
    console.log(`Hello ${fullName} | ${email} | ${message}`);
    // clearing the input fields
    setFullName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div style={{background:'#22222B', height:'100vh'}}>
      <div class="container">
        <p style={{color:'whitesmoke', fontSize:'1.5em', paddingTop: '1em'}}>Contact</p>
        <div class="row">
          <div class="col-9">
            <p style={{color:'lightseagreen'}}>Let's Chat</p>
            <p style={{color:'lightseagreen'}}>Fill in your info in the form below and I look forward to hearing from you!</p>
          </div>
          <form style={{background:'pink'}}class="col-12">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input value={fullName} onChange={handleInputChange}type="text" class="form-control" name="fullName" placeholder="Name"></input>
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input value={email} onChange={handleInputChange} type="email" class="form-control" name="email" placeholder="email"></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea value={message}onChange={handleInputChange}class="form-control" name="message" rows="3"></textarea>
            </div>
            <div style={{paddingBottom:'1em'}}class="d-grid  col-4 mx-auto">
              <button onClick={handleFormSubmit} type="button" class="btn btn-outline-light">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
