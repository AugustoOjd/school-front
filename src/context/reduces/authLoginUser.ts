import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface BooleanState {
  value: boolean
}

const initialState: BooleanState = {
  value: false,
}

export const authLoginUser = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
     isLogin: (state) =>{
        state.value = true
     },
     isLogout: (state) =>{
        state.value = false
     }
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { isLogin, isLogout } = authLoginUser.actions

export default authLoginUser.reducer