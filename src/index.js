import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers} from "redux";
import hobbitReducer from "./reducers/index";
import jobsReducer from './reducers/jobsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({hobbits: hobbitReducer, jobs: jobsReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
