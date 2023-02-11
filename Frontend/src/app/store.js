import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { UserAuthApi } from '../services/UserAuthApi'
import authReducer from "../features/authSlice"
import userReducer from "../features/userSlice"


export const store = configureStore({
  reducer: {

    [UserAuthApi.reducerPath]: UserAuthApi.reducer,
    auth: authReducer , 
    user: userReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserAuthApi.middleware),
})


setupListeners(store.dispatch)