'use client'


import ProductReducer from './slice-Products'
import { configureStore } from "@reduxjs/toolkit";


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
