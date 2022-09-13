import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepositoryResponse } from '../../models/repository';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  endpoints(builder) {
    return {
      fetchRepositories: builder.mutation<IRepositoryResponse, string | void>({
        query(query, page = 1, per_page = 50) {
          return `/search/repositories?q=${query}&page=${page}&per_page=${per_page}`;
        },
      }),
    };
  },
});

export const { useFetchRepositoriesMutation } = apiSlice;
