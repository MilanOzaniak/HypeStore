import React, { useState } from 'react';
import './PopupPassword.css';
import Popup from 'reactjs-popup';
import axios from 'axios';

const PopupPassword = () => {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;

    const oldPassChangeHandler = event => {
        setOldPass(event.target.value)
    }

    const newPassChangeHandler = event => {
        setNewPass(event.target.value)
    }

    function changePass(){
        const formData = new FormData();
        formData.append("oldPass", oldPass)
        formData.append("newPass", newPass);
        axios.post(url + "/user/changePassword", formData, {
            headers:{"Authorization" : `Bearer ${token}`}}).then((response)=>{
            console.log("success")
        })  
    }

  return (
    <Popup trigger={<button>Chnage password</button>}>
        <div className='popup'>
        <div className='close-btn'>X</div>
            <div className='formP'>
                <h2 className='title2'>CHANGE PASSWORD</h2>
                <div className='form-element'>
                    <label for='password'>Current Password</label>
                    <input
                     type='password' 
                     id='current-password' 
                     placeholder='Current Password'
                     value={oldPass}
                     onChange={oldPassChangeHandler}
                    />
                </div>
                <div className='form-element'>
                <label for='password'>New Password</label>
                    <input
                        type='password'
                        id='newpassword'  
                        placeholder='New Password'
                        value={newPass}
                        onChange={newPassChangeHandler}
                    />
                </div>
                <div className='form-element'>
                    <label for='password'>Confirm New Password</label>
                    <input 
                        type='password' 
                        id='confirmnewpassword' 
                        placeholder='Confirm New Password'
                    />
                    
                </div>
                <div className='form-elementbutton'>
                    <button onClick={changePass}>SAVE CHANGES</button>
                </div>
            </div>
        </div>
    </Popup>
  );
}; 

export default PopupPassword; 