import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiData, GET_CHARACTERS } from './thunk';

export type Character = {
    id: number,
    name: string,
    image: string
}

export type CharacterState = {
    characters: ApiData["results"]
    filterValue: string,
    isLoading: boolean,
    isError: string | null,
}

const initialState: CharacterState = {
    characters: [],
    filterValue: '',
    isLoading: false,
    isError: null,
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setFilterValue: (state, action) => {
            state.filterValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GET_CHARACTERS.pending, (state) => {
            state.isLoading = true
            state.isError = null;
        })
        builder.addCase(GET_CHARACTERS.fulfilled, (state, action) => {
            if (typeof action.payload === 'object') {
                state.characters = action.payload.results
                state.isLoading = false
                state.isError = null;

            }
        })
        builder.addCase(GET_CHARACTERS.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message ?? 'Ha ocurrido un error en el servidor';
        })

    }
});

export const { setFilterValue } = charactersSlice.actions;

const charactersReducer = charactersSlice.reducer;

export default charactersReducer;