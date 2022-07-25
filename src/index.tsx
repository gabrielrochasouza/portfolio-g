import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

let lastScrollTop = 0;

const eventOnScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollType = false;
  if (scrollTop < lastScrollTop) {
    scrollType = true;
  } else {
    scrollType = false;
  }
  lastScrollTop = scrollTop;
  console.log(scrollType)
  return scrollType;
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App eventOnScroll={eventOnScroll} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
