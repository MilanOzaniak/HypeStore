import React from 'react'
import './style.css'
import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const EditProduct = () => {
  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_API_URL;

  useEffect (async () =>{
    await axios.get(url + "/item/getItem/" + id).then((response) =>{
      setTitle(response.data.title);
      setPrice(response.data.price);
      setSize(response.data.size);
      setDescription(response.data.description);
      setCategory(response.data.category)
      setCurrentItem(response.data);
    })
  }, [])

  const handleTitleChange = event =>{
    setTitle(event.target.value)
  }
  const handlePriceChange = event =>{
    setPrice(event.target.value)
  }
  const handleSizeChange = event =>{
    setSize(event.target.value)
  }
  const handleCategoryChange = event =>{
    setCategory(event.target.value)
  }
  const handleDescriptionChange = event =>{
    setDescription(event.target.value)
  }

  function changeItem(){
    const item = {id, title, price, category, size, description}
    axios.post(url + "/item/changeItem/" + id, item,{
      headers:{"Authorization" : `Bearer ${token}`}})
  }

  return (
    <div className="wrapperp">
    <div className="formp">
    <div className="title">Uprav svoj produkt</div>
        <div className="inputfield">
            <label for="text">Názov </label>
            <input 
              type="text"
              className="input"
              value={title}
              onChange={handleTitleChange}>
            </input>
      </div>  
      <div className="inputfield">
        <label for="text"> Cena</label>
          <input
            type="text" 
            className="input" 
            value={price}
            onChange={handlePriceChange}>
          </input>
    </div>
    <div className='category'>
      <div className="inputfield_select">
        <label for="text">Kategória</label>
          <div className="custom_select">
            <select
              label="Select" 
              value={category}
              onChange={handleCategoryChange}>
              <option style={{display: 'none'}}>Select</option>
              <option 
                value={"Shoes"}>Topánky</option>
              <option
                value={"Clothing"}>Oblečenie</option>
              <option 
                value={"Accessories"}>Doplnky</option>
            </select>
          </div>
      </div> 

      <div className="inputfield_select">
        <label for="text">Veľkosť</label>
          <div className="custom_select" >
            <select label="Select"
              value={size}
              onChange={handleSizeChange}>
                <option style={{display: 'none'}}>Select</option>
                <optgroup label='Shoes'>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
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
    </div>
    <div className="inputfield_select">
        <label for="text">Lokácia</label>
          <div className="custom_select">
          <select>
          <optgroup label="Slovenské kraje">
                              <option value="">Vyber mesto</option>
                              <option value=".option1">Žilinský kraj</option>
                              <option value=".option2">Bratislavský kraj</option>
                              <option value=".option3">Banskobystrický kraj</option>
                              <option value=".option5">Košičský kraj</option>
                              <option value=".option6">Trenčiansky kraj</option>
                              <option value=".option7">Nitriansky kraj</option>
                              <option value=".option8">Prešovkský kraj</option>
                              <option value=".option9">Trnavský kraj</option>
                          </optgroup>
                          <optgroup label="České kraje">
                              <option value=".option10">Hlavné mesto Praha</option>
                              <option value=".option11">Stredočeský kraj</option>
                              <option value=".option12">Plzenský kraj</option>
                              <option value=".option13">Karlovarský kraj</option>
                              <option value=".option14">Královohradecký kraj</option>
                              <option value=".option15">Liberecký kraj</option>
                              <option value=".option16">Juhočeský kraj</option>
                              <option value=".option17">Pardubický kraj</option>
                              <option value=".option18">Kraj Vysočina</option>
                              <option value=".option19">Juhomoravský kraj</option>
                              <option value=".option20">Zlínsky kraj</option>
                              <option value=".option21">Olomoucký kraj</option>
                              <option value=".option22">Moravsko-sliezsky kraj</option>
                          </optgroup>
            </select>
          </div>
      </div> 
      <div className="inputfield">
        <label>Popis produktu</label>
        <p className='select_info'>Všetko, čo by mal kupujúci vedieť o predávanej veci. Čím viac napíšeš, tým viac času ušetríš záujemcom, aj sebe.</p>
        <textarea
          className="textarea"
          value={description}
          onChange={handleDescriptionChange}>
        </textarea>
      </div>
      <div className="inputfield">
          <input type="submit" value="Edit Item" className="btn1" onClick={changeItem}></input>
      </div>
    </div>
  </div>
  );
};

export default EditProduct