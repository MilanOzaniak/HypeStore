import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './CurrentUserPage.css';
import image from './../../images/pic.png';
import { Link } from "react-router-dom";
import {FiMoreVertical} from "react-icons/fi";
import ProfileImage from "../../components/ProfilImage";

const CurrentUserPage = () =>{
    const [currentUser, setCurrentUser] = useState('');
    const userName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");
    

    useEffect( () =>{
        axios.get("http://localhost:8080/user/getUser/" + userName).then((response)=>{
            setCurrentUser(response.data);
        })
    }, [])

    function handleDelete (e) {
        axios.get("http://localhost:8080/item/del/" + e, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(()=>{
            window.location.reload(false);
        })
        
    }

    console.log(currentUser);

    return(
        <div>
            <div className='container1'>
                <div className='profile-details1'>
                <ProfileImage/>
                    <div className='pd-row1'>
                        <div className='Info'>
                            <div className='Profile-Info1'>
                                {currentUser.userName}
                            </div>
                            <div className='Profile-Email1'>
                                {currentUser.email}
                            </div>
                            <div className='Profile-Number1'>
                                {currentUser.pnumber}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submenu">
            <div className="Submenu-Links">
                <a className='active' href="/Product">Product</a>
                <a className='active' href="/Favorite">Favorite</a>
                <a className='active' href="/Reserved">Reserved</a>
                <a className='active' href="/Review">Review</a>
            </div>
            </div>
            <div className='list-wrap'>
                {currentUser.items? (currentUser.items.map((data) =>
                    {return (
                        
                    <div className='listItem-wrap' key={data.id}>
                        <Link to={`/clothing/${data.id}`}>
                            <img className='img-box' src={data.imagePath} alt=''/>
                        </Link>
                        <div className="description">
                            <div className="info">
                                <h4 className="data_title">{data.title}</h4>
                                <b>${data.price}</b>
                            </div>
                            <button className= "close" onClick={() => handleDelete(data.id)}>X</button>
                        </div>

                     </div>
                )})) : (<h3>No data yet</h3>)}
            </div>

        </div>
    );
}
export default CurrentUserPage;