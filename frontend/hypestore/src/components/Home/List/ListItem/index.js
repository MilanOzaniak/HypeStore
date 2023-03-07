import React from 'react';
import './styles.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const ListItem = () => {
  const [item, setItem] = useState([]);
  const [id, setId] = useState('');
  const url = localStorage.getItem("url");

  useEffect(() => {
    axios.get(url + "/item/getAll").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);


  return(

    <div className='list-wrap'>
    {item? (item.map((data) =>
      {
        return (
        <div className='listItem-wrap' key={data.id}>
            <Link to={`/${data.id}`}>
              <img className='img-box' src={url + "/item/getImage/" + data.imageNames[0]} alt=''/>
            </Link>
            <h4>{data.title}</h4>
            <b>${data.price}</b>
        </div>
      )})) : (<h3>No data yet</h3>)}
    </div>
  )
} 

export default ListItem;