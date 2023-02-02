/**  ########################### FILE INFORMATION ##############################/
*#    Name: 
*#    Description: 
*#    Created By: 
*#    Created On: 
*#    Updated By: 
*#    Updated On: 
*#    Last Changes:
############################# FILE INFORMATION ###############################*/


import {http, axios} from 'axios';
import localforage from 'localforage';
import {ROUTES} from '~/Routes/Routepath.js';



export const getBaseHeaders =()=> {

    return{
        "access-token": localforage.getItem("Token"),
        "Content-Type": "application/json",
        
    };
}

export const getBaseUrl= () => {
  console.log(ROUTES);
  return ROUTES;
}

export const requestApi = (method, ) => {

}

export const api = (method, headers, params, data, timeout, responseType = null) => {

    const requestConfig = {
        withCredentials: true,
        headers: headers ? Object.assign({}, getBaseHeaders, headers) : getBaseHeaders,
    };

    if (params) {
        requestConfig.params = params;
    }
  
    if (responseType) {
        requestConfig.responseType = responseType;
    }

    http.create();
    http.defaults.timeout = timeout;
    
    
    axios.interceptors.request.use(
       (config)=> {return config},
       (err)=>{return Promise.reject(err);}
    );


    axios.interceptors.response.use(
      (next) => {
        return Promise.resolve(next);
      },
      (error) => {
        if (error.response) {
          if (
            error.response.status === 403 &&
            error?.response?.config?.url.includes(GAME_BASE_WEB_URL)
          ) {
            window.location.pathname = ROUTES.HOMEPAGE;
          }
        }
        return Promise.reject(error);
      }
    );

    if (requestType === "get" || requestType === "delete") {
      return http[requestType](url, requestConfig)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    }

    return http[requestType](url, data, requestConfig)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });

}












