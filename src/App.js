import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Country App</h1>
        <SearchBar />
        <CountryList />
        <CountryDetail cid={2} cname="Albania" />
      </div>
    </Provider>
  );
};

export default App;