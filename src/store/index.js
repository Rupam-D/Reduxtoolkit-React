// create store

import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlice";

const store = configureStore({
     reducer: {
          items: itemSlice.reducer
     }
})

export default store