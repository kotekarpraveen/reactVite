import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {myProjectApi} from 'src/Redux/Reducers/api';
import homePageReducerSlice from 'src/Redux/Reducers/homePageReducerSlice';



export const store = configureStore({
    reducer:{
        [myProjectApi.reducerPath]:myProjectApi.reducer,
        homePageReducer:homePageReducerSlice
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(myProjectApi.middleware)   
}) 


