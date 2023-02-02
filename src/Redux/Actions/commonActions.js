
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


export const handleDeviceResize = (data) => {
    return {
        type: SET_DEVICE_INFORMATION_RESIZE,
        payload: data,
    };
};
