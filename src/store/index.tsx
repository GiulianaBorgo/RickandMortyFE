import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import favReducer from "./fav/slice";
import charactersReducer from "./character/slice";
import paginationReducer from "./pagination/slice";


const store = configureStore({
    reducer : {
        characters: charactersReducer,
        fav: favReducer,
        pagination : paginationReducer
    }
});

type RootState =  ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;


export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;