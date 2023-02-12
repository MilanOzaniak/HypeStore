import React from 'react';
import { useState } from 'react';
import EmptyView from '../../EmptyView';
import SearchBar from '../../components/Home/SearchBar';
import ListAccessories from '../../components/Home/List/ListAccessories';
import './styles.css';

const AccessoriesPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  
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
          {resultsFound ? <ListAccessories/> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;