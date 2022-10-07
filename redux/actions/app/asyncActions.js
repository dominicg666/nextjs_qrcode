import { createAsyncThunk } from "@reduxjs/toolkit";
export const getPosts = createAsyncThunk("app/getPosts", async (payload) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (data) => data.json()
  )
  return res
});
