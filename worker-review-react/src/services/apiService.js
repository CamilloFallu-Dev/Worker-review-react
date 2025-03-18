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
    register: builder.query({
      query: (name, surname, email, password) =>
        `users?name=${name}&surname=${surname}&email=${email}&password=${password}`,
    }),
    registerCompany: builder.query({
      query: (
        name,
        country,
        address,
        workSector,
        email,
        password,
        description
      ) =>
        `comapnies?name=${name}&country=${country}&address=${address}&workSector=${workSector}&email=${email}&password=${password}&description=${description}`,
    }),
    contacts: builder.query({
      query: (name, surname, email, message) =>
        `users?name=${name}&surname=${surname}&email=${email}&message=${message}`,
    }),
  }),
});

export const {
  useGetStatsQuery,
  useLoginQuery,
  useRegisterQuery,
  useRegisterCompanyQuery,
  useContactsQuery,
} = apiService;
