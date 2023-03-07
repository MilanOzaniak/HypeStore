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
    const [items, setItems] = useState('');
    const url = localStorage.getItem("url");
    const userName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");
    

    console.log(currentUser);
    useEffect( () =>{
        axios.get(url + "/user/getUser/" + userName).then((response)=>{
            setCurrentUser(response.data);
            setItems(response.data.items)
        })
    }, [])

    function handleDelete (e) {
        axios.get(url + "/item/del/" + e, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(()=>{
            window.location.reload(false);
        })
        
    }

    function handleProducts (e){
        setItems(currentUser.items)
    }

    function handleFavorite (e){
        setItems(currentUser.favItems)
    }

    function handleReserved (e){
        setItems(currentUser.reservedItems)
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
                <a className='product' onClick={handleProducts}>Product</a>
                <a className='favorite' onClick={handleFavorite}>Favorite</a>
                <a className='reserved' onClick={handleReserved}>Reserved</a>
                <a className='comments' href="/Review">Comments</a>
            </div>
            </div>
            <div className='list-wrap'>
                {items? (items.map((data) =>
                    {return (
                        
                    <div className='listItem-wrap' key={data.id}>
                        <Link to={`/clothing/${data.id}`}>
                            <img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
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