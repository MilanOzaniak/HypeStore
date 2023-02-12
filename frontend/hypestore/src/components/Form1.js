import React, { useState } from 'react';
import '../App.css';
import FormSignup from '../pages/Register/FormRegister';
import FormSuccess from './FormSuccess';

const Formm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Formm;