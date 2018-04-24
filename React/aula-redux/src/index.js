import React from 'react';
import redux, { createStore, combineReducers } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducerApp from './reducerApp';

const store = createStore(
    combineReducers({
        usuario: reducerApp,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(<Provider store={store} >
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
