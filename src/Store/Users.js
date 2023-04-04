import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(`${url}/users`, {
      headers: {
        'dmx-header': 'dmx',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching users:', error);
    throw error;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectUsers = (state) => state.users.data;
export const selectUsersStatus = (state) => state.users.status;
export const selectUsersError = (state) => state.users.error;

export default usersSlice.reducer;