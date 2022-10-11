import { configureStore } from '@reduxjs/toolkit'
import authLoginUserReducer from '../reduces/authLoginUser'
import authSessionAdmin from '../reduces/authSessionAdmin'
import authSessionUser from '../reduces/authSessionUser'

export const store = configureStore({
  reducer: {
    validLogin: authLoginUserReducer,
    SessionUser: authSessionUser,
    SessionAdmin: authSessionAdmin
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch