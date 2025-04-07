import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi ({
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
      query: ({ name, surname, email, password }) => ({
        url: "users",
        method: "POST",
        body: { name, surname, email, password },
      }),
    }),

    registerCompany: builder.mutation({
      query: ({
        name,
        country,
        address,
        workSector,
        email,
        password,
        description,
      }) => ({
        url: "companies",
        method: "POST",
        body: {
          name,
          country,
          address,
          workSector,
          email,
          password,
          description,
        },
      }),
    }),

    contacts: builder.mutation({
      query: ({ name, surname, email, message }) => ({
        url: "contacts",
        method: "POST",
        body: { name, surname, email, message },
      }),
    }),
  }),
});

export const {
  useGetStatsQuery,
  useGetCompaniesQuery,
  useGetCompanyBySlugQuery,
  useGetReviewsQuery,
  useAddReviewMutation,
  useLazyLoginQuery,
  useRegisterMutation,
  useRegisterCompanyMutation,
  useContactsMutation,
} = apiService;
