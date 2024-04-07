'use client'


import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


import type { AppDispatch,RootState } from "./Store";



export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch:()=>AppDispatch=useDispatch

