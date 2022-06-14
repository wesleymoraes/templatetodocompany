import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Primeirobanner from './SectionGiftCard/PrimeiroBanner';
import MainServices from './MainServices/MainServices';
import MainBannerOrder from './MainBannerOrder/MainBannerOrder';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header/>
    <Primeirobanner/>
    <MainServices/>
    <MainBannerOrder/>
  </React.StrictMode>
);


reportWebVitals();
