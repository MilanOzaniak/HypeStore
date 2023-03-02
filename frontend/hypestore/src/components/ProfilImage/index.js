import React, { Component } from 'react';
import './profileimage.css';
import {BiEdit} from "react-icons/bi"
import axios from 'axios';
import { useState , useEffect } from 'react';

function ProfileImage(){
  const [profilePic, setProfilePic] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  useEffect( () =>{
    axios.get("http://localhost:8080/user/getUser/" + userName).then((response)=>{
        setCurrentUser(response.data);
        setProfilePic(response.data.profileImage);
    })
}, [])


  const imageHandler = (e) => {
    let data = new FormData();
    data.append("image", e.target.files[0])

    axios.post("http://localhost:8080/user/setProfileImage/", data, {
      headers:{"Authorization" : `Bearer ${token}`}}).then((response)=>{
        setProfilePic(data.get("image").name)
    })
  };
		return (
			<div className="page">
				<div className="container_avatar">
					<div className="img-holder">
						<img src={"http://localhost:8080/user/getImage/" + profilePic} alt="" id="img" className="imgpic" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
					<div className="label1">
                        <label className="image-upload" htmlFor="input">
						    <span className="editicon"><BiEdit/></span>
					    </label>
                    </div>
				</div>
			</div>
		);

}

export default ProfileImage;