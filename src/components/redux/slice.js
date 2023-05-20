import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./thunk";

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handleFulfilled = (state, action) => {
  state.users.items = action.payload;
  state.users.isLoading = false;
  state.users.error = null;
};

const handlePending = (state) => {
  state.users.isLoading = true;
};

const handleRejected = (state, action) => {
  state.users.isLoading = false;
  state.users.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateStatusFollow: (state, action) => {
      state.follow = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, handlePending)
      .addCase(fetchAllUsers.fulfilled, handleFulfilled)
      .addCase((fetchAllUsers.rejected, handleRejected));
  },
});

export const usersReducer = usersSlice.reducer;
export const { updateStatusFollow } = usersSlice.actions;
