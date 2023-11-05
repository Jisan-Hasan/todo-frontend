import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
    searchTerm: string;
    status: string;
}

const initialState: FilterState = {
    searchTerm: "",
    status: "",
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
    },
});

export const { setStatus, setSearchTerm } = filterSlice.actions;

export default filterSlice.reducer;
