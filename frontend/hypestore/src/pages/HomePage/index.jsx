import React from 'react';
import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero';
import ListItem from '../../components/Home/List/ListItem';

import Slider from '../../components/ProductSlider/Slider';

const Home = () => {
  const url = "https://hypestorebackend-production-4dcc.up.railway.app";
  localStorage.setItem("url", url);

  return (
    <><Hero slides={SliderData} />
    <div className='home_panelList-wrap'>
      <div className='home_list-wrap'>
        <ListItem />
      </div>
    </div></>
  );
};

export default Home;