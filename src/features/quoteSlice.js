import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quoteService from "./quoteService";

export const fetchQuote = createAsyncThunk("quotes/fetchQuote", async () => {
  const data = await quoteService.fetchRandomQuote();
  return data;
});

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    current: null,
    favorites: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.current = action.payload;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default quoteSlice.reducer;
