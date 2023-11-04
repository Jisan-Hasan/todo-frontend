import { baseApi } from "./baseApi";

const TASK_URL = "/task";

export const todoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTask: builder.mutation({
            query: (todoData) => ({
                url: `${TASK_URL}`,
                method: "POST",
                body: todoData,
            }),
        }),
    }),
});

export const { useAddTaskMutation } = todoApi;
