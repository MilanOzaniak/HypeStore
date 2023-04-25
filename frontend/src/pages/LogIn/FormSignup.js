import React from 'react';
import { useState, useRef  } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import './styles.css';
import ReCAPTCHA from 'react-google-recaptcha';


const FormSignup = () => {
  const history = useHistory();
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')
  const url = process.env.REACT_APP_API_URL;
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const token = useRef("");

  const nameChangeHandler = event => {
      setUserName(event.target.value)
  }

  const passwordChangeHandler = event => {
      setPassword(event.target.value)
  };



  async function handleLogIn (event){
    event.preventDefault();
    const error = await validateLogin(username, password);
    setErrorMessage(error);
    
    if(!error){
      history.push('/HypeStoreFrontend/');
      window.location.reload(false);
    }
  };

  function handleCaptchaChange(){
    setCaptchaVerified(true);
    console.log(setCaptchaVerified)
    //const data = token.current.getValue();
    //console.log(captchaVerified)
    //axios.post( url + '/captcha-verify', data)
    //.then((response) =>{
    //  if (response.status === 200) {
    //    return setCaptchaVerified(true);
    //  }
    //})
  };

  async function validateLogin(username, password) {

    if (!username || !password) {
      return 'Zadajte používateľské meno aj heslo!';
    }

    if (!captchaVerified) {
      return 'Prosím overte, že nie ste robot!';
    }

    try {
      const response = await axios.post(url + "/auth", { username, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("userName", username);

      if (response.status === 200) {
        return '';
      } else {
        return 'Nesprávne užívateľské meno alebo heslo!';
      }
    } 
    catch (error) {
      return 'Chybné uživateľské meno alebo heslo!';
    }
  }

  function push(){
    history.push('/HypeStoreFrontend/register');
  }



  return (
    <div className='form-content'>
    <div className='formL'>
      <h2>LOGIN</h2>
      <div className='form-inputs'>
        <label className='form-label'>Používateľské Meno</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Zadajte svoje meno'
          value={username}
          onChange={nameChangeHandler}
        />
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Heslo</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Zadajte svoje heslo'
          value={password}
          onChange={passwordChangeHandler}
        />
        {errorMessage && <p className='errors'>{errorMessage}</p>}
      </div>

      <ReCAPTCHA className='captcha'
        sitekey='6LfLOXElAAAAALmed6NMaHwS3bNzsFX9R73F9M6r'
        onChange={handleCaptchaChange}
        ref={token}/>

      <div className='form-input-btnlogin' onClick={handleLogIn} >  
        Prihlásiť sa
      </div>
      <span className='form-input-login'>
        Nemáte účet? Registrujte sa  
            <Link to={'/HypeStoreFrontend/register'}> tu.</Link>
      </span>
    </div>
  </div>
  );
};

export default FormSignup;