import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page'; // import reducer every time you add a slice or reduc

export const store = configureStore({
  reducer: {
    pager: pageReducer, // becomes available to every single component
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
