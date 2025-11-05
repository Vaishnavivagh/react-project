import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
reactDom -- react kudka DOM banata hai jo ki virtual DOM se milta julta hai jo original DOM se compare kar sakta hai aur sirf wahi part
 update karta hai jo change hua hai. isse performance better hoti hai.
*/ 