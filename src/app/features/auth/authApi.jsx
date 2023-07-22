import apiSlice from "../api/apiSlice";


const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/register",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/login",
                body: data
            }),
        })
    })
});

export const { useRegisterMutation, useLoginMutation } = authApi;
