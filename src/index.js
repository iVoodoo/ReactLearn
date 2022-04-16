import React from 'react';
import store from './redux/reduxeStore';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreContext, { Provider } from './StoreContext';

let rerenderEntrieTree = (state) => {
  // debugger
  ReactDOM.render(  
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntrieTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntrieTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();