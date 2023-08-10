import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { countryList: [], countryDetails: null, loading: false, error: null,};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async ({ page, name }) => {
  try {
    const response = await axios.get(`http://dev.abroadinquiry.com:5001/countries?page=${page}&name=${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchCountryDetails = createAsyncThunk('countries/fetchCountryDetails', async ({ cid, cname }) => {
  try {
    const response = await axios.get(`http://dev.abroadinquiry.com:5001/get-a-country-details?cid=${cid}&cname=${cname}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countryList = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCountryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.countryDetails = {
          ...action.payload,
          imageUrl: action.payload.image_url, // Store the image URL
        };
      })
      .addCase(fetchCountryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;