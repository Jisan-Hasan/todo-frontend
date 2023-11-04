import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (userData) => ({
                url: `${AUTH_URL}/signup`,
                method: "POST",
                body: userData,
            }),
        }),
        signin: builder.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/signin`,
                method: "POST",
                body: loginData,
            }),
        }),
    }),
});

export const { useSignupMutation, useSigninMutation } = authApi;