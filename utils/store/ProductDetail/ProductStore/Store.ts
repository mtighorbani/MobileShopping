'use client'


import { configureStore } from "@reduxjs/toolkit";


import ProductReducer from './slice-Products'


const store = configureStore ({
    reducer:{
        products:ProductReducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
    }
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState> 
export default store
