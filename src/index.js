import React from 'react'; 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension'; 
import rootReducer from './reducers/index'; 
import thunk from 'redux-thunk'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);






reportWebVitals();


