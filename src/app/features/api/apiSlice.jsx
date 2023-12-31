import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://weero-furniture-server.onrender.com/api"
    }),
    endpoints: (builder) => ({})
});

export default apiSlice;