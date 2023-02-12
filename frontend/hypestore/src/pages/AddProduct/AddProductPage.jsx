import React from 'react';
import './style.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddProductPage() {
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const[size, setSize] = useState('')
  const[price, setPrice] = useState('')
  const[category, setCategory] = useState('')

  var fileInput = document.getElementById("fileInput");

  const titleChangeHandler = event => {
    setTitle(event.target.value)
  } 
  const descriptionChangeHandler = event => {
    setDescription(event.target.value)
  }
  const sizeChangeHandler = event => {
    setSize(event.target.value)
  } 
  const priceChangeHandler = event => {
    setPrice(event.target.value)
  }
  const categoryChangeHandler = event =>{
    setCategory(event.target.value)
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    const item={title, price, category, size, description}
    const token = localStorage.getItem("token");
    let data = new FormData();
    var fileInput = document.getElementById("fileInput");
    data.append("image", fileInput.files[0]);

    axios.post("http://localhost:8080/item/uploadImage", data, {
      headers:{"Authorization" : `Bearer ${token}`}})
      .then(console.log("image uploaded"))

    axios.post("http://localhost:8080/item/create", item, {
      headers:{"Authorization" : `Bearer ${token}`}})
    .then(
      console.log("Item created"),
      console.log(data)
      );
  }
    return (
      <div className="wrapper">
        <div className="title">
            Add Product
        </div>
        <div className="form">
            <div className="inputfield">
                <label>Title</label>
                <input 
                  type="text"
                  className="input"
                  value={title}
                  onChange={titleChangeHandler}>
                </input>
          </div>  
          <div className="inputfield">
            <label>Price</label>
              <input
                type="text" 
                className="input" 
                value={price} 
                onChange={priceChangeHandler}>
              </input>
        </div>   
          <div className="inputfield">
            <label>Category</label>
              <div className="custom_select">
                <select 
                  value={category}
                  onChange={categoryChangeHandler}>
                  <option value="">Select</option>
                  <option 
                    value={"Shoes"}>Shoes</option>
                  <option
                    value={"Clothing"}>Clothing</option>
                  <option 
                    value={"Accessories"}>Accessories</option>
                </select>
              </div>
          </div> 

          <div className="inputfield">
            <label>Size</label>
              <div className="custom_select" >
                <select label="Select"
                  value={size}
                  onChange={sizeChangeHandler}>
                    <option style={{display: 'none'}}>Select</option>
                    <optgroup label='Shoes'>
                      <option 
                        value="36">36</option>
                      <option 
                        value="37">37</option>
                      <option 
                        value="38">38</option>
                      <option 
                        value="39">39</option>
                    </optgroup>
                    <optgroup label='Clothing'>
                      <option 
                        value="S">S</option>
                      <option 
                        value="M">M</option>
                     <option 
                        value="L">L</option>
                      <option 
                        value="XL">XL</option>
                  </optgroup>
                </select>
             </div>
          </div> 
          <div className="inputfield">
            <label>Decsription</label>
            <textarea 
              className="textarea"
              value={description}
              onChange={descriptionChangeHandler}>
            </textarea>
          </div>
          <div className="multipart">
            <input id="fileInput" type="file" />
          </div>
          <div className="inputfield">
              <input to={'/'} type="submit" value="Create Item" className="btn" onClick={handleSubmit}></input>
          </div>
        </div>
      </div>
    );
};

export default AddProductPage;