'use client'
import type { AppDispatch,RootState } from "./Store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch:()=>AppDispatch=useDispatch

