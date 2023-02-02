import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from 'src/Config/constants';
export const myProjectApi = createApi({
  reducerPath: 'myproject',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
  }),

  tagTypes: ['HomePage'],
  endpoints: (builder) => ({
    setHomePageApi: builder.query({
      query: () => ({
        url: CONFIG.HOMEPAGE,
        method: 'GET',
        headers: {
          'Content-type': 'appliation/json',
        },
      }),
    
    }),

    homePageApi: builder.mutation({
      query: (token) => ({
        url: CONFIG.HOMEPAGE,
        method: 'POST',
        headers: {
          'Content-type': 'appliation/json',
          'access-token': token,
        },
      }),
      invalidatesTags: ['SetGuest'],
    }),


  }),
});

export const {
  useSetHomePageApiQuery,
  useHomePageApiMutation,
  
} = myProjectApi;

