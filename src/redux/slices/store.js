import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { testSlice } from "./testSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    test: testSlice.reducer,
  },
});
