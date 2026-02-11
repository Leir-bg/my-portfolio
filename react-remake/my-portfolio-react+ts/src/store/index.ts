import { configureStore } from '@reduxjs/toolkit'
import pageReducer from '@/store/pageReducer'
import projectReducer from '@/store/projectReducer'

export const store = configureStore({
  reducer: {
    // We will add reducers here as we develop the app
    page: pageReducer,
    project: projectReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
