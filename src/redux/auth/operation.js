import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../config/Api";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await Api.post("/users/signup", credentials);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
