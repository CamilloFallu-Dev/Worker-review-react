import { createSlice } from "@reduxjs/toolkit";

// Recupera l'utente salvato in precedenza, se presente
const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || null;

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
        // Imposta il valore su "null" (che JSON.parse restituirà come null)
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
  },
});

export const { setUser, logoutUser, setCompany } = globalSlice.actions;

export default globalSlice.reducer;
