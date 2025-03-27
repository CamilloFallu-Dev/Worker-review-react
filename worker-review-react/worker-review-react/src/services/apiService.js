import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getCompanyBySlug: builder.query({
      query: (slug) => `companies?slug=${slug}`,
    }),    

    addReview: builder.mutation({
      query: (review) => ({
        url: "reviews",
        method: "POST",
        body: review,
      }),
    }),

    getReviews: builder.query({
      query: (companyId) => `reviews?companyId=${companyId}`,
    }),

    getStats: builder.query({
      query: () => `stats`,
    }),
    getCompanies: builder.query({
      query: () => `companies`,
    }),
    login: builder.query({
      query: (email, password) => `users?email=${email}&password=${password}`,
    }),
    register: builder.mutation({
      mutation: ({ name, surname, email, password }) =>
        `users?name=${name}&surname=${surname}&email=${email}&password=${password}`,
    }),
    registerCompany: builder.mutation({
      mutation: ({
        name,
        country,
        address,
        workSector,
        email,
        password,
        description,
      }) =>
        `comapnies?name=${name}&country=${country}&address=${address}&workSector=${workSector}&email=${email}&password=${password}&description=${description}`,
    }),
    contacts: builder.mutation({
      mutation: ({ name, surname, email, message }) =>
        `users?name=${name}&surname=${surname}&email=${email}&message=${message}`,
    }),
  }),
});

export const {
  useGetStatsQuery,
  useGetCompaniesQuery,
  useLazyLoginQuery,
  useLazyRegisterQuery,
  useLazyRegisterCompanyQuery,
  useLazyContactsQuery,
  useGetCompanyBySlugQuery,
  useGetReviewsQuery,
  useAddReviewMutation,
} = apiService;
