
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
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({
    children,
    headerFooterVisible = true,

}) => {

    const isAuthenticated = true;
    return 
        isAuthenticated !== null ? (
            <div style={{maxWidth:'100vw',margin:'auto'}}>
              
              {children}
            </div>
          ) : (
            <Navigate to="/login" />
          );
    
}

export default ProtectedRoutes













