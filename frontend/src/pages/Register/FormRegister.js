import React from 'react';
import { useState, useEffect } from 'react';
import './Register.css'
import axios from 'axios';
import validateInfo from '../../data/validateInfo';
import { Link, useHistory} from 'react-router-dom';

const FormSignup = () => {

  const history = useHistory();
  const[userName, setUserName] = useState('')
  const[email, setEmail] = useState('')
  const[pnumber, setPnumber] = useState('')
  const[password, setPassword] = useState('')
  const[password2, setPassword2] = useState('')
  const[user, setUser] = useState([])
  const url = process.env.REACT_APP_API_URL;
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    pNumber: '',
    password: '',
    password2: '',
  });

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
    const user={userName, email, pnumber, password, password2}
    const {valid, error} = validateInfo(userName, email, pnumber, password, password2)
    setErrors(error)
    if(valid){
      axios.post(url + "/register", user);
      history.push("/HypeStoreFrontend/login")
    }

  };
  return (
    <div className='form-contentR'>
      <form onSubmit={handleSubmit} className='formR' noValidate>
        <h2>
        REGISTRÁCIA
        </h2>
        <div className='form-inputs'>
          <label className='form-label'>Používateľské Meno</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Zadaj svoje meno'
            value={userName}
            onChange={nameChangeHandler}
          />
          {errors.userName && <p className='errors'>{errors.userName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Zadaj svoj email'
            value={email}
            onChange={emailChangeHandler}

          />
          
          {errors.email && <p className='errors'>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Telefónné číslo</label>
          <input
            className='form-input'
            type='pNumber'
            name='pNumber'
            placeholder='Zadaj svoje telefónné číslo'
            value={pnumber}
            onChange={pNumberChangeHandler}

          />
          
          {errors.pNumber && <p className='errors'>{errors.pNumber}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Heslo</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Zadaj svoje heslo'
            value={password}
            onChange={passwordChangeHandler}
          />
          {errors.password && <p className='errors'>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Potvrď heslo</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Potvrď svoje heslo'
            value={password2}
            onChange={passwordChangeHandler2}
          />
          {errors.password2 && <p className='errors'>{errors.password2}</p>}
        </div>

        <div className='form-input-btnregister' type='submit' onClick={handleSubmit}>
          Registrácia
        </div>

        <span className='form-input-login'>
          Už máš účet? Prihlás sa <Link to='/HypeStoreFrontend/login'>tu.</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;