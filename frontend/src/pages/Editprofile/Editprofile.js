import React from 'react'
import './editprofile.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {validatePassword, validateEmail,validatePnumber, validateFacebook,validateInstagram }  from '../../data/validateProfile'

const Editprofile = () => {
  const url = process.env.REACT_APP_API_URL;
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");
  const [currentUser, setCurrentUser] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [pNumber, setPNumber] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [errors, setErrors] = useState({
    password: '',
    password2: '',
    email: '',
    pNumber: '',
    facebook: '',
    instagram: '',
  });

  useEffect( () =>{
    axios.get(url + "/user/getUser/" + userName).then((response)=>{
        setCurrentUser(response.data);
        
    })
  }, [])

  const passwordChangeHandler = event => {
    setPassword(event.target.value)
  }

  const password2ChangeHandler = event => {
    setPassword2(event.target.value)
  }
  
  const emailChangeHandler = event => {
    setEmail(event.target.value)
  }

  const pNumberChangeHandler = event => {
    setPNumber(event.target.value)
  }

  const facebookChangeHandler = event => {
    setFacebook(event.target.value)
  }

  const instagramChangeHandler = event => {
    setInstagram(event.target.value)
  }


  function changePass(){
    var data = new FormData();
    data.append("oldPass", password);
    data.append("newPass", password2);
    const {valid, error} = validatePassword(password, password2)
    setErrors(error)
    if(valid){
      axios.post(url + "/user/changePassword", data, {headers:{"Authorization" : `Bearer ${token}`}})
    }
  
  }

  function changePNumber(){
    var data = new FormData();
    data.append("pNumber", pNumber);

    const {valid, error} = validatePnumber(facebook)
    setErrors(error)
    if(valid){
      axios.post(url + "/user/changePnumber", data, {headers:{"Authorization" : `Bearer ${token}`}})
    }
  }

  function addFacebook(){
    var data = new FormData();
    data.append("fb", facebook)

    const {valid, error} = validateFacebook(facebook)
    setErrors(error)

    if(valid){
      axios.post(url + "/user/setFacebook", data,  {headers:{"Authorization" : `Bearer ${token}`}})
    }
  }

  function addInstagram(){
    var data = new FormData();
    data.append("ig", instagram)

    const {valid, error} = validateInstagram(instagram)
    setErrors(error)

    if(valid){
      axios.post(url + "/user/setInstagram", data, {headers:{"Authorization" : `Bearer ${token}`}})
    }
  }



  return (
    <div className='wrapperedit'>
    <div className='formedit'>
        <div className='title'>Upraviť profil</div>
        <div className="inputfield">
          <label for="text">Password</label>
          <div className='password'>
            <input
              className="input" 
              type="password"
              name="Username"
              placeholder="Old Password"
              value={password}
              onChange={passwordChangeHandler}
            />
            <input
              className="input" 
              type="password"
              name="Username"
              placeholder="New Password"
              value={password2}
              onChange={password2ChangeHandler}
            />
          </div>
          {errors.password && <p className='errors'>{errors.password}</p>}
          {errors.password2 && <p className='errors'>{errors.password2}</p>}
            <div className="inputfield">
                <input onClick={changePass} type="submit" value="Uložiť" className="btnulozit"></input>
            </div>
          </div> 
          <div className='inputfield'>
          <label for='text'>Email</label>
          <input
            className='input'
            type='email'
            name='email'
            placeholder={currentUser.email}
            value={email}
            onChange={emailChangeHandler}
            />
            {errors.email && <p className='errors'>{errors.email}</p>}
            <div className="inputfield">
                <input  type="submit" value="Uložiť" className="btnulozit"></input>
            </div>
          </div>
          <div className='inputfield'>
            <label for='text'>Tel. číslo</label>
            <input
             className='input'
             type='pNumber'
             name='pNumber'
             placeholder={currentUser.pnumber}
             value={pNumber}
             onChange={pNumberChangeHandler}
            />
            {errors.pNumber && <p className='errors'>{errors.pNumber}</p>}
            <div className="inputfield">
                <input onClick={changePNumber} type="submit" value="Uložiť" className="btnulozit"></input>
            </div>
            </div>
            <div className='inputfield'>
                <FaFacebook className='fa'></FaFacebook>
                <label for='text'>Facebook</label>
                <div className='row'></div>
                <input
                    className='input'
                    type='text'  
                    id='facebook_name' 
                    placeholder='Facebook Link'
                    value={facebook}
                    onChange={facebookChangeHandler}
                />
                {errors.facebook && <p className='errors'>{errors.facebook}</p>}
                <div className="inputfield">
                    <input onClick={addFacebook} type="submit" value="Uložiť" className="btnulozit"></input>
                </div>
                </div>
                <div className='inputfield'>
                <FaInstagram className='ig'></FaInstagram>
                <label for='text'>Instagram</label>
                    <input
                        className='input'
                        type='text'
                        id='instagram_name'  
                        placeholder='Instagram Link'
                        value={instagram}
                        onChange={instagramChangeHandler}
                    />
                    {errors.instagram && <p className='errors'>{errors.instagram}</p>}
                    <div className="inputfield">
                        <input onClick={addInstagram} type="submit" value="Uložiť" className="btnulozit"></input>
                    </div>
                </div>
    </div> 
</div> 
  )
}

export default Editprofile