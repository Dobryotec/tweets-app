import { fetchUsers } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchUsers();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


