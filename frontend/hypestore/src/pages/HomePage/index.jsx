import React from 'react';
import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero';
import ListItem from '../../components/Home/List/ListItem';

const Home = () => {
  return (
    <><Hero slides={SliderData} />
    <><a>Newest arrivals</a></>
    <div className='home_panelList-wrap'>
      <div className='home_list-wrap'>
        <ListItem />
      </div>
    </div></>
  );
};

export default Home;