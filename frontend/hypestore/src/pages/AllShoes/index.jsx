import React, { useState } from 'react';
import EmptyView from '../../EmptyView';
import SearchBar from '../../components/Home/SearchBar';
import axios from 'axios';
import { useEffect } from 'react';
import './styles.css';
import ListShoes from '../../components/Home/List/ListShoes';

const ShoesPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/item/getAllShoes").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);

  if (searchInput.length > 0) {
    item.filter((item) => {
    return item.title.match(searchInput);
    })}
   
  return (
    <div className='home'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <ListShoes /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default ShoesPage;