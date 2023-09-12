import React from 'react';
import ReactDOM from 'react-dom/client';
//React用于创建组件，而ReactDOM用于将组件渲染到浏览器中的DOM元素上
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//创建了一个根渲染器 root
const root = ReactDOM.createRoot(document.getElementById('root'));
//将root 包装在<React.StrictMode>组件中,并且渲染到id=root的DOM（react程序的入口）中
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
