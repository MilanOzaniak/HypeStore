import React from 'react';
import './CurrentItem.css';
import pic from "./../../images/pic.png"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import {FiMoreVertical} from "react-icons/fi";


const CurrentItemPage = () =>{
    const { id } = useParams();
    const [currentItem, setCurrentItem] = useState('');
    const [user, setUser] = useState('');
    const token = localStorage.getItem("token");
    const currentUser = localStorage.getItem("userName");
    const [isAdmin] = useState(currentUser === "admin");
    const path = "http://localhost:8080/item/getImages/"

    useEffect (async () =>{
        await axios.get("http://localhost:8080/item/getItem/" + id).then((response) =>{
            setCurrentItem(response.data);
            return response.data.userName;

        }).then(info => {
            axios.get("http://localhost:8080/user/getUser/" + info).then((response)=>{
                setUser(response.data);
            })
        })
    }, [])

    console.log(currentItem.imageNames[1]);

    function handleDelete (e) {
        axios.get("http://localhost:8080/item/del/" + e, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(()=>{
            window.location.reload(false);
        })
    }
    return (
        <body>
            <section>
                <div className="container flex">
                    <div className='' style={{display: isAdmin? 'block' : 'none'}}>
                        <Link to={'/'} className='delete' onClick={()=>{handleDelete(id)}}>X</Link>
                    </div>
                    <div className='more' style={{display: user? 'block' : 'none'}}>
                        <span><FiMoreVertical/></span>
                    </div>
                    <div className="left">
                    <div className="main_image1">
                            <img src={"http://localhost:8080/item/getImage/" + currentItem.imageNames[0]} alt="" className="main_img"></img>
                        </div>
                    <div className="option flex">
                            <img src={"http://localhost:8080/item/getImage/" + currentItem.imageNames[1]} alt=""className="main_imgg"></img>
                            <img src={"http://localhost:8080/item/getImage/" + currentItem.imageNames[2]} alt=""className="main_imgg"></img>
                            <img src={"http://localhost:8080/item/getImage/" + currentItem.imageNames[3]} alt=""className="main_imgg"></img>
                            <img src={"http://localhost:8080/item/getImage/" + currentItem.imageNames[4]} alt=""className="main_imgg"></img>
                        </div>
                    </div>
                    <div className="right"> 
                        <div class="Product-Date">
                            {"Pridané " + currentItem.date}
                        </div>
                        <div className="Product-Title">
                            {currentItem.title}
                        </div>
                        <div className="Product-Info">
                            {currentItem.description} 
                        </div>
                        <div className="Product-Size">
                            Size: {currentItem.size}
                        </div>
                        <div className="Product-Price">
                            {currentItem.price}<small>€</small>
                        </div>
                        <div className='profile'>
                            <div className="profilePic">
                                <div className='pic'>
                                    <img src={pic} className="profile_picture"/> 
                                </div>
                            </div>
                            <div className='profileInfo'>
                                <div className="Name">
                                    <Link to={`/user/${user.userName}`}><a>{user.userName}</a></Link>
                                </div>
                                <div className="Phonenumber">
                                    <a>{user.pnumber}</a>
                                </div>
                                <div className="Email">
                                    <a>{user.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
};
export default CurrentItemPage;