import React from 'react';
import './styles.css';
import pic from "./../../images/pic.png"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


const CurrentItemPage = () =>{
    const { id } = useParams();
    const [currentItem, setCurrentItem] = useState('');
    const [user, setUser] = useState('');
    const token = localStorage.getItem("token");
    const currentUser = localStorage.getItem("userName");
    const [isAdmin] = useState(currentUser === "admin");

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
                    <div className="left">
                        <div className="main_image">
                            <img src={currentItem.imagePath} alt=""></img>
                        </div>
                    </div>
                    <div className="right"> 
                        <div class="Product-Date">
                            <h6>{"Pridané " + currentItem.date}</h6>
                        </div>
                        <div className="Product-Title">
                            <h1>{currentItem.title}</h1>
                        </div>
                        <div className="Product-Info">
                            <p>{currentItem.description} </p>
                        </div>
                        <div className="Product-Price">
                            <h2>{currentItem.price}<small>€</small></h2>
                            <div className='' style={{display: isAdmin? 'block' : 'none'}}>
                                <Link to={'/'} className='delete' onClick={()=>{handleDelete(id)}}>X</Link>
                            </div>
                        </div>
                        <div className='profile'>
                            <div className="profilePic">
                                <div className='pic'>
                                    <img src={pic}/> 
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