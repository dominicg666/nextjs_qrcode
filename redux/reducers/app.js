import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../actions/app/asyncActions';
const appSlice = createSlice({
  name: 'app',
  initialState: {
    token: null,
    entities: []
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    unsetToken: state => {
      state.token = null
    }
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = payload
    },
    [getPosts.rejected]: (state) => {
      state.loading = false
    },
  }
})


export default appSlice;