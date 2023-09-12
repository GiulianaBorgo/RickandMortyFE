import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiData, GET_CHARACTERS } from '../character/thunk';


export type PaginationState = {
    currentPage: number;
    totalPages: number;
    isLoading: boolean,
    isError: string | null,
}

const initialState: PaginationState = {
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    isError: null,
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(GET_CHARACTERS.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(GET_CHARACTERS.fulfilled, (state, action) => {
            if (typeof action.payload === 'object') {
                state.totalPages = action.payload.info.pages
                state.isLoading = false;
            }
        })

        builder.addCase(GET_CHARACTERS.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message ?? 'Ha ocurrido un error en el servidor';
        })

    }
});

export const { setCurrentPage } = paginationSlice.actions;

const paginationReducer = paginationSlice.reducer;

export default paginationReducer;