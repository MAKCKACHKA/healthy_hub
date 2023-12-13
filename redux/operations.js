import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExample = createAsyncThunk(
  'example/fetchAll',
  async (_, thunkAPI) => {
    try {
      const url = new URL(`https://example.com/test`);
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
