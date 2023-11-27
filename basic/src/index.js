import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// basic
// import AppProfile from './AppProfile';
// import AppCounter from './AppCounter';
// import AppProduct from './AppProduct';

// import AppXY from './AppXY';
import AppMentor from './AppMentor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProfile/>
    <AppCounter/>
    <AppProduct/> */}
    {/* <AppXY /> */}
    <AppMentor />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
