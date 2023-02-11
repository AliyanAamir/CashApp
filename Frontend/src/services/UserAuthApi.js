// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux';
import { getToken } from "../services/LocalStorageServices";
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

    getTransactionDetails: builder.query({
      query: (access_token) => {
        return {
          url: 'transaction_view/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    getUserInfoShow: builder.query({
      query: (access_token) => {
        return {
          url: 'get_user_info/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    Transaction: builder.mutation({
      query: (data) => {
        return {
          url: 'payment/',
          method: 'POST',
          body: data,
          headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${getToken().access_token}`,
          }
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation , useLoginUserMutation,useTransactionMutation,useGetTransactionDetailsQuery,useGetUserInfoShowQuery} = UserAuthApi