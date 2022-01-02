import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogData = [
  {id: 1, name: "user 1"}, 
  {id: 2, name: "user 2"},
  {id: 3, name: "user 3"},
  {id: 4, name: "user 4"},
  {id: 5, name: "user 5"}
];

let link="https://img1.badfon.ru/original/1024x768/9/ee/leyk-luiz-kanada-les-nebo.jpg";

ReactDOM.render(
  
  <React.StrictMode>
    <App dialogData={dialogData} link={link}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default dialogData;
