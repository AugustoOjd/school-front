import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'


export interface SessionState {
    value: any[]
    
  }
  
  const initialState: SessionState = {
    value: [],
  }


  type Data = {
    name: string,
    email: string,
    lastName: string,
    role: string,
    state: boolean,
    point: number
  }

export const authSessionUser = createSlice({
    name: 'sessionUser',
    initialState,
    reducers: {
        authSession: (state, action: PayloadAction<any>) =>{
            state.value.push(action.payload)
         },
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
  export const { authSession } = authSessionUser.actions

  export const session = ((state: RootState)=> state.SessionUser.value)
  
  export default authSessionUser.reducer