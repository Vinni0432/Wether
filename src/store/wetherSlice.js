import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWether = createAsyncThunk(
  "wether/fetchWether",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=49.23&longitude=28.47&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&timeformat=unixtime&timezone=auto"
      );
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: "wetherData",
  initialState: {
    data: {}, // state.data
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchWether.pending]: (state, action) => {
      state.status = "Loading";
      state.error = null;
    },
    [fetchWether.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [fetchWether.rejected]: setError,
  },
});

export default todoSlice.reducer;
