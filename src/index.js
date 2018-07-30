import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import appReducer from './client/reducer';
import './client/css/bootstrap.min.css';
import './client/css/cover.css';

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();

export default store;
