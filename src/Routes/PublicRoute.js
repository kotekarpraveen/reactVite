
/**  ########################### FILE INFORMATION ##############################/
*#    Name: 
*#    Description: 
*#    Created By: 
*#    Created On: 
*#    Updated By: 
*#    Updated On: 
*#    Last Changes:
############################# FILE INFORMATION ###############################*/



import React from 'react'

export const PublicRoute = ({children}) => {
    const userAuthenticated = false;
  return userAuthenticated === false ? children : <Navigate to="/" />;
}





