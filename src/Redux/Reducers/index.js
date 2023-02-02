/**  ########################### FILE INFORMATION ##############################/
*#    Name: 
*#    Description: 
*#    Created By: 
*#    Created On: 
*#    Updated By: 
*#    Updated On: 
*#    Last Changes:
############################# FILE INFORMATION ###############################*/

import { combineReducers } from "redux";
import commonReducer from "./commonReducer";


const rootReducer = combineReducers({
    common:commonReducer
});
  
export default rootReducer;
