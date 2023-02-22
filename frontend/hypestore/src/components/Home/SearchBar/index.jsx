import React from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ value, changeInput,}) => {

return(
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='Search'
      value={value}
      onChange={changeInput}
    />
  </div>
);
}

export default SearchBar;