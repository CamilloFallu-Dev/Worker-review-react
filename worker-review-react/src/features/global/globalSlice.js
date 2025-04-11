import { createSlice } from "@reduxjs/toolkit";

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {
  email: "",
  password: "",
};

const initialState = {
  user: userFromLocalStorage,
  company: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.setItem("user", "null");
      }
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.setItem("user", "null");
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setContacts: (state,action) =>{
      state.contacts= action.payload;
    },
  },
});



export const { setUser, logoutUser, setCompany,setContacts } = globalSlice.actions;


export default globalSlice.reducer;


