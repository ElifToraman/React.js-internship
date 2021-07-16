import React, { useState } from 'react';
import './Form.css';
import LoginPart from './LoginPart';
import LoginSuccess from './LoginSuccess';
import user from './user-informations.json';
import LoginFail from './LoginFail';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(0);

  function submitForm(username, password) {

    user.username == username && user.password == password ?
    setIsSubmitted(1) : setIsSubmitted(-1)
  }

  const renderLoginForm = () => {
      switch (isSubmitted) {
          case 0: return <LoginPart submitForm={submitForm} />;
          case 1: return <LoginSuccess />;
          case -1: return <LoginFail />
          default: return <LoginPart submitForm={submitForm} />;
      }
  }

  return (
    <>
      <div className='form-container'>
        <span onClick={() => {setIsSubmitted(0)}} className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img1.jpg' alt='beautiful' />
        </div>
            {renderLoginForm()}
      </div>
    </>
  );
};

export default Form;
