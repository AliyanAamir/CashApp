import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  name: "",
  cashtag: "",
}

export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.cashtag = action.payload.cashtag
      state.name = action.payload.name
      state.balance = action.payload.balance
    },
    unsetUserInfo: (state, action) => {
      state.cashtag = action.payload.cashtag
      state.name = action.payload.name.balance
      state.balance = action.payload.balance
    },
  }
})

export const { setUserInfo, unsetUserInfo } = userSlice.actions

export default userSlice.reducer

