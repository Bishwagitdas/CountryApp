import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails } from './../redux/countriesSlice';

const CountryDetail = ({ cid, cname }) => {
    const dispatch = useDispatch();
    const { countryDetails, loading, error } = useSelector((state) => state.countries);
  
    useEffect(() => {
      dispatch(fetchCountryDetails({ cid, cname }));
    }, [dispatch, cid, cname]);
  
    if (loading) {
      return <div>Loading..</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!countryDetails) {
      return <div>No country details available.</div>;
    }
  
    return (
      <div>
        <h2>Country Details</h2>
        <p>Name: {countryDetails.name}</p>
        <p>Population: {countryDetails.population}</p>
        <p>Capital: {countryDetails.capital}</p>
        <p>Currency: {countryDetails.currency}</p>
        <p>isocode: {countryDetails.isocode}</p>
        <p>description: {countryDetails.description}</p>
       
      </div>
    );
  };
export default CountryDetail;