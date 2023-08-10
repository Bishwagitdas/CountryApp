import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './../redux/countriesSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    dispatch(fetchCountries(1, searchQuery));
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;