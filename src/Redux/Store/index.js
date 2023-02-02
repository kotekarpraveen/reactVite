/**  ########################### FILE INFORMATION ##############################/
*#    Name: 
*#    Description: 
*#    Created By: 
*#    Created On: 
*#    Updated By: 
*#    Updated On: 
*#    Last Changes:
############################# FILE INFORMATION ###############################*/





import allReducers from '../Reducers/index.js';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(
  allReducers,
  composeEnhancer(applyMiddleware(thunk))
);

    store.subscribe(() => {
    saveState("state", { state: store.getState() });
  }, 1000);

  export default store;
