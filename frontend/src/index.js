import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './contact';
import Premium from './premium';
import Smart from './smart';
import Cart from './cart';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'; 
import cartReducers from './cartslice'; 

const store = configureStore({
  reducer: {
    cart: cartReducers, 
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/smart" element={<Smart />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
