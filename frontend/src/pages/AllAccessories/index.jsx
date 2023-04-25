import React, { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';
import { FaStar, FaTrash, FaEdit, FaBookmark } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccessoriesPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [item, setItem] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [checkedLowest, setCheckedLowest ] = useState(false);
  const [checkedHighest, setCheckedHighest ] = useState(false);
  const size = useRef("")
  const locality = useRef("")
  const gender = useRef("")
  const search = useRef("")



  //sadasd
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

  const handleMouseOver = (i) => {
    var element = document.getElementById(i);
    element.classList.add("visible")
  };

  const handleMouseLeave = (i) => {
    var element = document.getElementById(i);
    element.classList.remove("visible");
  };

  useEffect(() => {
    axios.get(url + "/item/getAllAccessories").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);

  function handleInputChange() {
    const value = search.current.value;
    console.log(value) 
    if(value === ""){
      axios.get(url + "/item/getAllAccessories").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    } 
    else{
      const filteredItems = item.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
      setItem(filteredItems)
    }
  }

  function favItemHandler (id){
    let data = new FormData();
    data.append("id", id);

  }

  const handleChnangeTick = (event) =>{
    const value = event.target.value;

    if(value === "0"){
      axios.get(url + "/item/getAllAccessories").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
    else if(value === "LP"){
      axios.get(url + "/item/getAccessoriesByPriceAsc").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
    else if(value === "HP"){
      axios.get(url + "/item/getAccessoriesByPriceDesc").then((response) => {
      	setItem(response.data);
      	console.log(response.data);
      });
    }
    else if(value === "NPR"){
      axios.get(url + "/item/getAllAccessories").then((response)=>{
        setItem(response.data);
      })
    }
    else if(value === "LPR"){
      axios.get(url + "/item/getOldestAccessories").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
  }

  function handleChangeSize(){
    const value = size.current.value;
    if (value === "0"){
      axios.get(url + "/item/getAllAccessories").then((response) => {
      setItem(response.data);
      console.log(response.data);
      });
    }
    else{
      axios.get(url + "/item/getAccessoriesBySize/" + value).then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
  }

  function handleChangeLocality(){
    const value = locality.current.value;
    if (value === "0"){
      axios.get(url + "/item/getAllAccessories").then((response) => {
      setItem(response.data);
      console.log(response.data);
      });
    }
    else{
      axios.get(url + "/item/getAccessoriesByLocation/" + value).then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
  }

  function handleChangeGender(){
    const value = gender.current.value;
    if (value === "0"){
      axios.get(url + "/item/getAllAccessories").then((response) => {
      setItem(response.data);
      console.log(response.data);
      });
    }
    else{
      axios.get(url + "/item/getAccessoriesByGender/" + value).then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
  }



  return (
    <div>
      <button className='btn1' on onClick={() =>setShow(!show)}>
        {show === true ? 'Skryť filtre' : 'Ukázať filtre'}
      </button>
      {show && 
    <div className='Filterwrap'>
      <div class="search-filter">
					<input type="search" placeholder="Search..."
                  ref={search}
                  onChange={handleInputChange}/>
				</div>
        <div className='category'>
          <div className="inputfield_select">
            <label for="text">Veľkosti</label>
              <div className="custom_select" >
                <select label="Select"
                  onChange={handleChangeSize} ref={size}>
                    <option value="0" >Vyber veľkosť</option>
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
          <div className="inputfield_select">
          <label for="text">Lokácia</label>
            <div className="custom_select">
            <select  onChange={handleChangeLocality} ref={locality}>
            <option value="0">Vyber mesto</option>
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
          </div>
          </div>
          <div className='category'>
          <div className="inputfield_select">
            <label for="text">Zoradiť</label>
            <p className='select_info'></p>
              <div className="custom_select">
              <select onChange={handleChnangeTick}>
              <option value="0">Zoraď podľa</option>
                <option value="HP" >Najvyššia cena</option>
                <option value="LP">Najnižšia cena</option>
                <option value="NPR">Najnovšie produkty</option>
                <option value="LPR">Najstaršie produkty</option>
                </select>
              </div>
          </div>
            <div className="inputfield_select">
            <label for="text">Pohlavie</label>
            <p className='select_info'></p>
              <div className="custom_select">
              <select onChange={handleChangeGender} ref={gender}>
              <option value="0">Vyber pohlavie</option>
                <option value="MEN">Mužské</option>
                <option value="WOMEN">Ženské</option>
                <option value="NON">Unisex</option>
                </select>
              </div>
            </div>
            </div>
    </div>
    }
    <div className='home_panelList-wrap'>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
        <div className='list-wrap'>
          {item? (item.map((data) =>
            {return (
              <div className='listItem-wrap' key={data.id}
              onMouseOver={()=>handleMouseOver(data.id)}
                onMouseLeave={()=>handleMouseLeave(data.id)}>

                {(<div className= 'top-row' id={`${data.id}`}>
                  <FaStar onClick={()=>favItemHandler(data.id)} className='star'></FaStar>
                  <FaBookmark onClick={()=>resItemHandler(data.id)} className='edit'></FaBookmark>
                </div>)}

                <Link to={`/HypeStoreFrontend/product/${data.id}`}>
                  <img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
                </Link>
                <h4>{data.title}</h4>
                <b>${data.price}</b>
              </div>
            )})) : (<h3>No data yet</h3>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;