import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: [],
};

export const pageSlice = createSlice({
  name: 'page',
  page: [],
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
    incrementByAmount: (state, action) => {
      state.page += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// pass in actions to our components
export const { increment, decrement, incrementByAmount } = pageSlice.actions;

// pass in the reducer to our store so it's available to any component it uses
export default pageSlice.reducer;
