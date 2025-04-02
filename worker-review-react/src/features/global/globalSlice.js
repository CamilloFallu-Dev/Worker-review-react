import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: [{
    setUser: (state, action) => {
      state.user = action.payload;
    },
    
  },
  {
    setCompany: (state, action)=> {
    state.company = action.payload;
  },}]

});

export const { setUser } = globalSlice.actions;

export default globalSlice.reducer;
