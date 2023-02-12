import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './CurrentUserPage.css';
import image from './../../images/pic1.png';
import { Link } from "react-router-dom";

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
        <div className="div">
            <div className='container1'>
                <div className='profile-details1'>
                    <div className='pd-row1'>
                        <div className='left1'>
                            <img src={image} className='pd-image1'></img>
                        </div>
                        <div className='right1'>
                            <div className='Profile-Info1'>
                                <h3>{currentUser.userName}</h3>
                            </div>
                            <div className='Profile-Email1'>
                                <h3>{currentUser.email}</h3>
                            </div>
                            <div className='Profile-Number1'>
                                <h3>{currentUser.pnumber}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submenu">
                <div className="nadpis">MY PRODUCTS</div>

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
                                <h4>{data.title}</h4>
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