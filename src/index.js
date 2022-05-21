import React from 'react'; 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider component makes the Redux store available to any nested components that need access to the Redux Store
import { createStore, applyMiddleware } from 'redux'; //applymiddleware will be the second argument in the variable that creates the store 
import { composeWithDevTools } from 'redux-devtools-extension'; //chrome extension tools
import rootReducer from './reducers/index'; //importing the rootreducer connecting this this to the store which is the global store 
import thunk from 'redux-thunk'; //Thunk logs all our state changes and actions
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))//creating the store, which has the state,

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider makes the Redux store available to any nested components that need to access the redux store */}
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* Summary 

- Importing all the redux/react files here 
- Provider component makes the Redux store available to any nested components that need accces to the redux store 


-Redux Store
  - Redux Store is created by the createStore function, state is stored in the store
    - it takes in the reducer function and optional argument for middleware then returns an object which is the redux store
    - we created the store with the rootReducer, applyMiddleware and thunk
    - we get dispatch from the Redux Store 



-Thunk
  - thunk logs all our state CHANGES and actions 
    - Thunk allows us to move our fetches outside our component 
    - Thunk allows us to reuse actions across multiple components, without having to rewrite fetch requests 
    - allows us to handle async code 
    - gives us control of when we want dispatch to be called 

-Dispatch
  - allows us to send actions to to the reducer to tell it how state should be modified 
  - reducer updates state and we can't do it manually. We do it by calling dispatch 


basically...
-Redux Store = Store state and we get dispatch (so we can call reducers)
- We need thunk so we have interrput action creators and have control of when we want to call dispatch to handle the async data 






*/