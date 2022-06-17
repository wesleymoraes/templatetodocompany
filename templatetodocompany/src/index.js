import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Primeirobanner from './SectionGiftCard/PrimeiroBanner';
import MainServices from './MainServices/MainServices';
import MainBannerOrder from './MainBannerOrder/MainBannerOrder';
import GiftCardInstruction from './GiftCardInstruction/GiftCardInstruction';
import Faq from './Faq/Faq';
import SlideContent from './SlideContent/SlideContent';
import Example from './Example';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header/>
    <Primeirobanner/>
    <MainServices/>
    <MainBannerOrder/>
    <GiftCardInstruction/>
    <Example/>
    <Faq/>
    <SlideContent/>

  </React.StrictMode>
);


reportWebVitals();
