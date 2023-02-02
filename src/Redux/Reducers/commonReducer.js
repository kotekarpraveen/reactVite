/**  ########################### FILE INFORMATION ##############################/
*#    Name: 
*#    Description: 
*#    Created By: 
*#    Created On: 
*#    Updated By: 
*#    Updated On: 
*#    Last Changes:
############################# FILE INFORMATION ###############################*/



import {SET_DEVICE_INFORMATION_RESIZE} from "../ActionTypes";

const initialState = {
    width: window.innerWidth,
    height: window.innerHeight,
    deviceType: "",
    
  };
  
  const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEVICE_INFORMATION_RESIZE:
            return {
            ...state,
            width: action.payload.width,
            height: action.payload.height,
            };
      
        default:
            return state;
    }
  };
  export default commonReducer;






