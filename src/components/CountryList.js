import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './../redux/countriesSlice';

const CountryList = () => {
    const dispatch = useDispatch();
    const { countryList, loading, error } = useSelector((state) => state.countries);
  
    useEffect(() => {
      dispatch(fetchCountries({ page: 1, name: '' }));
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading..</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!Array.isArray(countryList)) {
      return <div>Unvailable Country list!</div>;
    }
  
    return (
      <div>
        <h2>Country List</h2>
        <ul>
          {countryList.map((country) => (
            <li key={country.cid}>{country.name}</li>
          ))}
        </ul>
      </div>
    );
  };

export default CountryList;