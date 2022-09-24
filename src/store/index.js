import { configureStore, isImmutableDefault } from "@reduxjs/toolkit";
import themeReducer from "../features/ThemeSlice/themeSlice";
import userReducer from "../features/UserSlice/userSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});
