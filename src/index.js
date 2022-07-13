import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose  } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './redux/reducer';
import {BrowserRouter} from 'react-router-dom'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (userReducer,  composeEnhancers (applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
    </Provider>
    
    </React.StrictMode>
);


