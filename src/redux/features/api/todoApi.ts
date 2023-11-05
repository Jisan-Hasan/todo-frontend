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
            invalidatesTags: ["task"],
        }),
        getTasks: builder.query({
            query: (arg: Record<string, any>) => ({
                url: `${TASK_URL}`,
                method: "GET",
                params: arg,
            }),
            providesTags: ["task"],
        }),
        getTask: builder.query({
            query: (id) => ({
                url: `${TASK_URL}/${id}`,
                method: "GET",
            }),
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `${TASK_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["task"],
        }),
        updateTask: builder.mutation({
            query: (todo) => ({
                url: `${TASK_URL}/${todo.id}`,
                method: "PATCH",
                body: todo.data,
            }),
            invalidatesTags: ["task"],
        }),
    }),
});

export const {
    useAddTaskMutation,
    useGetTasksQuery,
    useGetTaskQuery,
    useDeleteTaskMutation,
    useUpdateTaskMutation,
} = todoApi;
