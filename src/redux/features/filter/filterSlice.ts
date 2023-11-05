import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
    searchTerm: string;
    status: string;
    page: number;
    limit: number;
}

const initialState: FilterState = {
    searchTerm: "",
    status: "",
    page: 1,
    limit: 10,
};

export const filterSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<string>) => {
            state.status = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
    },
});

export const { setStatus, setSearchTerm, setPage, setLimit } = filterSlice.actions;

export default filterSlice.reducer;
