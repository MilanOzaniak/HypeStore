import React from 'react';
import { useState, useEffect } from 'react';
import './Register.css'
import axios from 'axios';
import validateInfo from '../../data/validateInfo';
import { Link } from 'react-router-dom';

const FormSignup = () => {

  const[userName, setUserName] = useState('')
  const[email, setEmail] = useState('')
  const[pnumber, setPnumber] = useState('')
  const[password, setPassword] = useState('')
  const[password2, setPassword2] = useState('')
  const[user, setUser] = useState([])
  const [errors, setErrors] = useState({})
  const url = localStorage.getItem("url");
  const [isSubmitting, setIsSubmitting] = useState(false)

  const nameChangeHandler = event => {
    setUserName(event.target.value)
  };
  const emailChangeHandler = event => {
    setEmail(event.target.value)
  };

  const pNumberChangeHandler = event => {
    setPnumber(event.target.value)

  };

  const passwordChangeHandler = event => {
    setPassword(event.target.value)
  };

  const passwordChangeHandler2 = event => {
    setPassword2(event.target.value)
  };

  function handleSubmit() {
    const user={userName, email, pnumber, password}
    setErrors(validateInfo(userName, email, pnumber, password, password2));
    axios.post(url + "/register", user);
    setIsSubmitting(true)

  };



  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        REGISTER
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>User Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={userName}
            onChange={nameChangeHandler}
          />
          {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={emailChangeHandler}

          />
          
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='pNumber'
            name='pNumber'
            placeholder='Enter your phone number'
            value={pnumber}
            onChange={pNumberChangeHandler}

          />
          
          {errors.pNumber && <p>{errors.pNumber}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={passwordChangeHandler}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={password2}
            onChange={passwordChangeHandler2}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <Link to={'/Signup'} className='form-input-btn' type='submit' onClick={handleSubmit}>
          Register
        </Link>

        <span className='form-input-login'>
          Already have an account? Login <a href='/Signup'>here.</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;