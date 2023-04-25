import React from 'react';
import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import Faquestion from '../../components/Faquestion/Faquestion';
import { FaStar, FaTrash, FaEdit, FaBookmark } from 'react-icons/fa';

const Home = () => {
  const url = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const [item, setItem] = useState([]);
  const [id, setId] = useState('');
  const [fewItems, setFewItems] = useState([]);

  const handleMouseOver = (i) => {
    var element = document.getElementById(i);
    element.classList.add("visible")
  };

  const handleMouseLeave = (i) => {
    var element = document.getElementById(i);
    element.classList.remove("visible");
  };


  useEffect(() => {
    console.log(url)  
    axios.get(url + "/item/getAll").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);

  function favItemHandler (id){
    let data = new FormData();
    data.append("id", id);

    axios.post(url + "/user/addFavItem", data, {
      headers:{"Authorization" : `Bearer ${token}`}}).then(()=>{
        console.log("sadas")
      })
  }

  function resItemHandler (id){
    let data = new FormData();
    data.append("id", id);

    axios.post(url + "/user/reserveItem", data, {
      headers:{"Authorization" : `Bearer ${token}`}}).then(()=>{
        console.log("sadas")
      })
  }

  const slicedItem = item.slice(0,5);



  return (
    <><Hero slides={SliderData} />
    <h2 className='titlecategory'>NAJNOVŠIE PRODUKTY</h2>
    <div className='home_panelList-wrap'>
      <div className='home_list-wrap'>
        
        <div className='list-wrap'>
          {slicedItem? (slicedItem.map((data) =>{
            return (
              <div className='listItem-wrap' key={data.id}
                onMouseOver={()=>handleMouseOver(data.id)}
                onMouseLeave={()=>handleMouseLeave(data.id)}>

                <div className= 'top-row' id={`${data.id}`}>
                  <FaStar  onClick={()=>favItemHandler(data.id)} className='star'></FaStar>
                </div>

                <Link to={`/HypeStoreFrontend/product/${data.id}`}>
                  <img className='img-box' src={url + "/item/getImage/" + data.imageNames[0]} alt=''/>
                </Link>
                <h4>{data.title}</h4>
                <b>${data.price}</b>
              </div>
        )})) : (<h3>No data yet</h3>)}
        </div>
      </div>
    </div>
    <Faquestion/>
    </>
  );
};

export default Home;