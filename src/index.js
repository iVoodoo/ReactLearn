import React from 'react';
import store from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rerenderEntrieTree = (state) => {
  ReactDOM.render(  
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntrieTree(store.getState());
store.subscribe(rerenderEntrieTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();