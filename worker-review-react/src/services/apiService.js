import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => `stats`,
    }),
    login: builder.query({
      query: (email, password) => `users?email=${email}&password=${password}`,
    }),
  }),
});

export const { useGetStatsQuery } = apiService;
