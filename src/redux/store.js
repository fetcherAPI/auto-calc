import { configureStore } from "@reduxjs/toolkit";

import inputDataSlice from "./slices/inputDataSlice";

export const store = configureStore({
  reducer: {
    inputDataSlice,
  },
});
