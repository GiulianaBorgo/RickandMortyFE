import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Character } from '../character/slice';


export type FavState = {
    favs : Character[],
    isLoading : boolean,
    isError : string | null
}

const initialState : FavState  = {
    favs : [],
    isLoading : false,
    isError : null
}

export const favSlice = createSlice({
    name : 'fav',
    initialState,
    reducers : {
        ADD_FAV : (state, action : PayloadAction<Character>) => {
            state.favs.unshift(action.payload);
        },
        DELETE_FAV : (state, action : PayloadAction<Character>) => {     
            state.favs = state.favs.filter((fav) => fav.id !== action.payload.id);
        },
        DELETE_ALL_FAVS : (state) => {     
            state.favs = []
        }
    }
}
);


const favReducer = favSlice.reducer;

export const { ADD_FAV, DELETE_FAV, DELETE_ALL_FAVS } = favSlice.actions;

export default favReducer;