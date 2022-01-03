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

let messageData = [
  {id: 1, message: "Hi"}, 
  {id: 2, message: "wassup maaan"}
];

let postData = [
       {id: 1, message: "Hey, how are u?", likeCount: 12}, 
       {id: 2, message: "It's my first post", likeCount: 10}
];

ReactDOM.render(  
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default dialogData;
