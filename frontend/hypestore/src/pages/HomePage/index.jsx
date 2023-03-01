import React from 'react';
import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero';
import ListItem from '../../components/Home/List/ListItem';

import Slider from '../../components/ProductSlider/Slider';

const Home = () => {
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