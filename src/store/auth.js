import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    isLoggedIn: false,
    user: null,
  },

  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    userLoggedOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export function userAcronymSelector({ auth }) {
  const user = auth.user;
  return user ? user.firstName.charAt(0) + user.lastName.charAt(0) : '';
};

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
