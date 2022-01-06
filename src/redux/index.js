import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import welcomeSlice from "./welcomeSlice";

export default configureStore({
  reducer: {
    store: welcomeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
