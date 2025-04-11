import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  company: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setContacts: (state,action) =>{
      state.contacts= action.payload;
    },
  },
});

export const { setUser, setCompany,setContacts } = globalSlice.actions;

export default globalSlice.reducer;


