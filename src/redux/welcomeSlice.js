import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callAPI, mockAPI } from "../helpers";

const inititalState = {
  isError: false,
  isLoading: false,
  list: [],
};

const dataState = {
  welcome: inititalState,
};

export const fetchWelcome = createAsyncThunk(
  "Welcome/fetchWelcome",
  async (param) => {
    if (window.COMMON_CONFIG.isLocal) {
      if (process.env.NODE_ENV === "development") {
        const response = await mockAPI(`/welcomepage/${param}`);
        return response.data;
      } else {
        const response = await mockAPI(`/welcomepage/${param}/GET.JSON`);
        return response.data;
      }
    } else {
      const response = await callAPI(`/welcome/${param}`);
      return response.data;
    }
  }
);

export const slice = createSlice({
  name: "Welcome",
  initialState: dataState,
  extraReducers: {
    [fetchWelcome.pending]: (state, action) => {
      const { arg } = action.meta;
      state[arg].isLoading = true;
    },

    [fetchWelcome.fulfilled]: (state, action) => {
      const { arg } = action.meta;
      state[arg].isLoading = false;
      state[arg].list = action.payload;
    },

    [fetchWelcome.rejected]: (state, action) => {
      const { arg } = action.meta;
      state[arg].isLoading = false;
      state[arg].isError = true;
    },
  },
});

export default slice.reducer;
