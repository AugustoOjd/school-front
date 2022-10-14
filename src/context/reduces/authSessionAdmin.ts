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
    id:         string
    name:       string,
    email:      string,
    lastName:   string,
    state:      boolean,
    point:      number
  }

export const authSessionAdmin = createSlice({
    name: 'sessionAdmin',
    initialState,
    reducers: {
        authSessionA: (state, action: PayloadAction<Data>) =>{
            state.value.push(action.payload)
         },
        logoutSessionA: (state) =>{
          state.value.splice( 0, state.value.length)
       }
       }
})


export const { authSessionA, logoutSessionA } = authSessionAdmin.actions

export const session = ((state: RootState)=> state.SessionAdmin.value)

export default authSessionAdmin.reducer