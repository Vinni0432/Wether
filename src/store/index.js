import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./wetherSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
