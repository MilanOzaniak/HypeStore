import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../App.css';


const FormSignup = () => {
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')

  const nameChangeHandler = event => {
      setUserName(event.target.value)
      console.log(username)
  }

  const passwordChangeHandler = event => {
      setPassword(event.target.value)
  };

  function handleLogIn (){
      const user={username, password};

      
      axios.post("http://localhost:8080/auth", user).then((response)=>{
        const token = response.data.token;
        console.log(response.data);
        localStorage.setItem("token", token);
        localStorage.setItem("userName", username);
      }).then(() =>{
        window.location.reload(false);
      })
  
  };



  return (
    <div className='form-content'>
      <div  className='form' >
        <h1>
          LOGIN
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={username}
            onChange={nameChangeHandler}
          />

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

        </div>
        <Link to='/' className='form-input-btn' onClick={handleLogIn} >  
          Log in
        </Link>
        <span className='form-input-login'>
          You dont have an account? Register <a href='/Register'>here.</a>
        </span>
      </div>
    </div>
  );
};

export default FormSignup;