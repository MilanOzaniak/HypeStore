import React from 'react';
import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero';
import ListItem from '../../components/Home/List/ListItem';

const Home = () => {
  return (
    <><Hero slides={SliderData} />
        <ListItem />
    </>
  );
};

export default Home;