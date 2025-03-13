import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/global/globalSlice";
import { apiService } from "../services/apiService";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

setupListeners(store.dispatch);
