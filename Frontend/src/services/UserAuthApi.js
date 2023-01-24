// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
export const UserAuthApi = createApi({
  reducerPath: 'UserAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) =>{
        return {
            url: 'register/',
            method:'POST',
            body:user,
            headers:{
                'Content-Type':'application/json'
            }
        }
      }
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'login/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    Transaction: builder.mutation({
      query: (user) => {
        return {
          url: 'payment/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
            "Authorization": `Bearer ${window.localStorage.getItem('token')}`,
          }
        }
      }
    }),
    TransactionView: builder.query({
      query: (access_token) => {
        return {
          url: 'viewbalance/',
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${access_token}`,

          }
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation , useLoginUserMutation,useTransactionMutation,useTransactionViewQuery} = UserAuthApi