import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './CurrentUserPage.css';
import { Link, useHistory } from "react-router-dom";
import ProfileImage from "../../components/ProfilImage";
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import { FaStar, FaTrash, FaEdit, FaBookmark } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFlag } from '@fortawesome/free-solid-svg-icons';

const CurrentUserPage = () =>{
    const [currentUser, setCurrentUser] = useState('');
    const [items, setItems] = useState('');
    const [comments, setComments] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isReserved, setIsReserved] = useState(false);
    const url = process.env.REACT_APP_API_URL;
    const userName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");
    const history = useHistory();

    const handleMouseOver = (i) => {
        var element = document.getElementById(i);
        element.classList.add("visible")
      };
    
      const handleMouseLeave = (i) => {
        var element = document.getElementById(i);
        element.classList.remove("visible");
      };

    useEffect( () =>{
        axios.get(url + "/user/getUser/" + userName).then((response)=>{
            setCurrentUser(response.data);
            setItems(response.data.items);
            setComments(response.data.comments);
            
        })
    }, [])

    function handleDelete (e) {
        let data = new FormData();
        data.append("id", e)
        axios.post(url + "/item/del", data, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(()=>{
            window.location.reload(false);
        })
        
    }

    function handleDelFavorite(e){
        let data = new FormData();
        data.append("id", e)
        axios.post(url + "/user/removeFavItem", data, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(window.location.reload(false));
    }

    function handleDelReserved(e){
        let data = new FormData();
        data.append("id", e)
        axios.post(url + "/user/removeReservedItem", data, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(//window.location.reload(false)
        );
    }

    console.log(comments)

    function handleProducts (e){
        setItems(currentUser.items)
        setIsVisible(false);
        setIsFavorite(false);
    }

    function handleFavorite (e){
        setItems(currentUser.favItems)
        setIsVisible(false)
        setIsFavorite(true);
    }

    function handleComments (){
        setIsVisible(true)
    }

    function handleFacebook(){
        window.open(currentUser.facebook, "_blank");
    }

    function handleInstagram(){
        window.open(currentUser.instagram, "_blank");
    }

    function handleEdit(id){
        history.push("/HypeStoreFrontend/edit/" + id)
    }

    console.log(currentUser);

    return(
        <div>
            <div className='container1'>
                <div className="userbutton">
                    <Link to={`/HypeStoreFrontend/editProfile/${currentUser.id}`}><a className="editbutton" ><FontAwesomeIcon icon={faEdit}/></a> </Link>
                </div>
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
                            <div className="socials">
                                <a className="instagram" href="" title="Instagram">
                                <span className="instagramicon"><FaInstagram onClick={handleInstagram}></FaInstagram></span>
                                </a>
                                <a className="facebook" href="" title="Facebook">
                                <span className="facebookicon"><FaFacebookSquare onClick={handleFacebook}></FaFacebookSquare></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submenu">
            <div className="Submenu-Links">
                <a className='product' onClick={handleProducts}>Product</a>
                <a className='favorite' onClick={handleFavorite}>Favorite</a>
                <a className='comments' onClick={handleComments}>Comments</a>
            </div>
            </div>
            <div className='list-wrap'  style = {{display: isVisible ? 'none' : 'grid' }} >
                {items? (items.map((data) =>
                    {return (
                        
                    <div className='listItem-wrap' key={data.id}
                        onMouseOver={()=>handleMouseOver(data.id)}
                        onMouseLeave={()=>handleMouseLeave(data.id)}>

                        {(<div className='top-row' id={`${data.id}`}>
                            <FaTrash onClick={()=>handleDelete(data.id)} style = {{display: isFavorite ? 'none' : 'block'}} className="trash"></FaTrash>
                            <FaEdit onClick={() =>handleEdit(data.id)} style = {{display: isFavorite ? 'none' : 'block'}} className='edit'></FaEdit>
                            <FaStar onClick={() => handleDelFavorite(data.id)} style = {{display: isFavorite ? 'block' : 'none' , color: isFavorite ? 'yellow' : 'white'}} className='star'></FaStar>
                        </div> )}

                        <Link to={`/HypeStoreFrontend/product/${data.id}`}>
                            <img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
                        </Link>
                        <div className="description">
                            <div className="info">
                                <h4 className="data_title">{data.title}</h4>
                                <b>${data.price}</b>
                            </div>
                        </div>

                     </div>
                )})) : (<h3>No data yet</h3>)}
            </div>

            <div className='comment-session' style = {{display: isVisible ? 'block' : 'none' }}>
            {comments? (comments.map((data) =>
                {return(
                <div className='post-comment' key={data.id}>
                    <div className='list'>
                        <div className='user'>
                            <div className='user-image'><img src={data.profilePic ? url + "/user/getImage/" + data.profilePic : null} className="faq" alt=''/></div>
                            <div className='user-meta'>
                                <Link to={`/HypeStoreFrontend/user/${data.ownerName}`} className='name'>{data.ownerName}</Link>
                                <div className='day'>{data.date}</div>
                            </div>
                        </div>
                        <div className='comment-post'>{data.comment}</div>
                    </div>
                </div>
            )})): (<h1>No data yet</h1>)}
                
            </div>

        </div>
    );
}
export default CurrentUserPage;