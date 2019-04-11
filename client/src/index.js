import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

let store
if(process.env.NODE_ENV === 'production'){
  store = createStore(
      reducers
  );

}else if(process.env.NODE_ENV === 'development') {
  store = createStore(
      reducers,
      composeWithDevTools(),
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
