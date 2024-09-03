import { configureStore } from "@reduxjs/toolkit";
import updatestate from "./controllers/updatestate";

export const store = configureStore({
  reducer: updatestate,
});
