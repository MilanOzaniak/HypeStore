import React from 'react';
import './AddProductPage.css';
import { useState } from 'react';
import axios from 'axios';
import { Link , useHistory} from 'react-router-dom';
import validateCreate from '../../data/validatecreate';

function AddProductPage() {
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const[size, setSize] = useState('')
  const[price, setPrice] = useState('')
  const[category, setCategory] = useState('')
  const[location, setLocation] = useState('')
  const[gender, setGender] = useState('')
  const[files, setFiles] = useState('')
  const url = process.env.REACT_APP_API_URL;
  let imageNames = [];
  const history = useHistory();
  const [errors, setErrors] = useState({
    title: '',
    price: '',
    category: '',
    size: '',
    description: '',
    location: '',
    gender: '',
  });

  const [redirect, setRedirect] = useState('');

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
  const locationChangeHandler = event =>{
    setLocation(event.target.value)
  }
  const genderChangeHandler = event =>{
    setGender(event.target.value)
  }

  const fileChangeHandler = event => {
    if (Array.from(event.target.files).length > 5) {
      alert(`Cannot upload files more than 5`);
      return;
    }
    setFiles(event.target.files)
  }

  function handleSubmit(){
    const token = localStorage.getItem("token");
    let data = new FormData();
    for(let i = 0; i < files.length; i++){
      data.append("images", files[i]);
      imageNames[i] = files[i].name;
    }


    const item={title, price, category, size, description, location, gender, imageNames};

    const {valid, error} = validateCreate(title, price, category, size, description, location, gender)
    setErrors(error);

    if(valid){
      setRedirect('Redirecting....')
      axios.post(url + "/item/upload", data, {
        headers:{"Authorization" : `Bearer ${token}`}})
        .then((response)=>{
          if(response.status === 200){
            history.push('/HypeStoreFrontend/')
          }
        })


  
      axios.post(url + "/item/create", item, {
        headers:{"Authorization" : `Bearer ${token}`}})
    }
  }
    return (
      <div className="wrapperp">
      <div className="formp">
      <div className="title">Pridať produkt</div>
          <div className="inputfield">
              <label for="text">Názov </label>
              <p className='select_info'>Pomenuj svoj produkt. Ideálne ak bude obsahovať názov produktu a všetko, čo uznáš za dôležité.</p>
              <input 
                type="text"
                className="input"
                value={title}
                onChange={titleChangeHandler}>
              </input>
              {errors.title && <p className='errors'>{errors.title}</p>}
        </div>  
        <div className="inputfield">
          <label for="text"> Cena</label>
          <p className='select_info'>Napíš sumu, ktorú chceš dostať za predávanú vec..</p>
            <input
              type="text" 
              className="input" 
              value={price} 
              onChange={priceChangeHandler}>
            </input>
            {errors.price && <p className='errors'>{errors.price}</p>}
      </div>
      <div className='category'>
        <div className="inputfield_select">
          <label for="text">Kategória</label>
          <p className='select_info'>Vyber kategóriu, do ktorej sa tvoja vec najviac hodí.</p>
            <div className="custom_select">
              <select 
                value={category}
                onChange={categoryChangeHandler}>
                <option value="">Select</option>
                <option 
                  value={"Shoes"}>Topánky</option>
                <option
                  value={"Clothing"}>Oblečenie</option>
                <option 
                  value={"Accessories"}>Doplnky</option>
              </select>
            </div>
            {errors.category && <p className='errors'>{errors.category}</p>}
        </div> 

        <div className="inputfield_select">
          <label for="text">Veľkosť</label>
          <p className='select_info'>Vyber veľkosť, do ktorej sa tvoja vec najviac hodí.</p>
            <div className="custom_select" >
              <select label="Select"
                value={size}
                onChange={sizeChangeHandler}>
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
           {errors.size && <p className='errors'>{errors.size}</p>}
        </div>
      </div>
      <div className='category'>
         <div className="inputfield_select">
          <label for="text">Lokácia</label>
          <p className='select_info'></p>
            <div className="custom_select">
            <select value={location}
            onChange={locationChangeHandler}>
            <option value="">Vyber mesto</option>
              <option value="Žilinský kraj">Žilinský kraj</option>
              <option value="Bratislavský kraj">Bratislavský kraj</option>
              <option value="Banskobystrický kraj">Banskobystrický kraj</option>
              <option value="Košičský kraj">Košičský kraj</option>
              <option value="Trenčiansky kraj">Trenčiansky kraj</option>
              <option value="Nitriansky kraj">Nitriansky kraj</option>
              <option value="Prešovkský kraj">Prešovkský kraj</option>
              <option value="Trnavský kraj">Trnavský kraj</option>
              </select>
            </div>
            {errors.location && <p className='errors'>{errors.location}</p>}
        </div>
        <div className="inputfield_select">
          <label for="text">Pohlavie</label>
          <p className='select_info'></p>
            <div className="custom_select">
            <select value={gender}
            onChange={genderChangeHandler}>
              <option value="">Vyber pohlavie</option>
              <option value="MEN">Mužské</option>
              <option value="WOMEN">Ženské</option>
              <option value="NON">Unisex</option>
            </select>
            </div>
            {errors.gender && <p className='errors'>{errors.gender}</p>}
        </div>
      </div> 
        <div className="inputfield">
          <label>Popis produktu</label>
          <p className='select_info'>Všetko, čo by mal kupujúci vedieť o predávanej veci. Čím viac napíšeš, tým viac času ušetríš záujemcom, aj sebe.</p>
          <textarea 
            className="textarea"
            value={description}
            onChange={descriptionChangeHandler}>
          </textarea>
          {errors.description && <p className='errors'>{errors.description}</p>}
        </div>
        <div className="multipart">
          <input id="fileInput" type="file" multiple onChange={fileChangeHandler}/>
        </div>
        <div className="inputfield">
            <input type="submit" value="Create Item" className="btn1" onClick={handleSubmit}></input>
            {redirect &&<p className='errors'>{redirect}</p>}
        </div>
      </div>
    </div>
    );
};

export default AddProductPage;