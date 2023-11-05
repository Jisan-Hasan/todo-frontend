import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskState {
    selectedTask: string | null;
};

const initialState: TaskState = {
    selectedTask: null
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        selectTask: (state, action: PayloadAction<string>) => {
            state.selectedTask = action.payload;
        },
        unselectTask: (state) => {
            state.selectedTask = null;
        },
    },
});

export const { selectTask, unselectTask } = taskSlice.actions;

export default taskSlice.reducer;
