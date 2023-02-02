
import {createSlice} from '@reduxjs/toolkit';


const initialState ={
    homePageData:[],
    success:"",
    error:"",
}

const homePageSlice = createSlice({
    name:"homePage",
    initialState,
    reducers:{
        setHomePage:(state, {payload})=>{
            state.homePageData = payload;
        },
        resetHomePage:(state, {payload})=>{
            state.homePageData = [];
        },
    }
})

export const {setHomePage,resetHomePage} = homePageSlice.actions;
export const getAllHomePageData = (state)=> state.homePage.homePageData;

export default homePageSlice.reducer;
