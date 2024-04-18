import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./operation";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectToken: (state) => state.token,
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = slice.reducer;
export const { selectIsLoggedIn, selectToken, selectUser } = slice.selectors;
