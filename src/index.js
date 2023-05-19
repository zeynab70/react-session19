import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {mostPopul} from './data';
import {mostPopul2} from './data';
import {mostPopul3} from './data';
import {filimoBox} from './data';
import {filimoBox2} from './data';
import {filimoBox3} from './data';
import {MostPopulFunction} from './component/vigheh';
import {FilimoBoxFunction} from './component/FilimoBox';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MostPopulFunction mostPopulData={mostPopul} title="محبوب‌ترین‌های فیلیمو"/>
    <FilimoBoxFunction filimoData={filimoBox}/>
    <MostPopulFunction mostPopulData={mostPopul2} title="اختصاصی فیلیمو"/>
    <FilimoBoxFunction filimoData={filimoBox2}/>
    <MostPopulFunction mostPopulData={mostPopul3} title="تازه های فیلیمو"/>
    <FilimoBoxFunction filimoData={filimoBox3}/>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
