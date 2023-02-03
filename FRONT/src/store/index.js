import { configureStore } from "@reduxjs/toolkit"
import { changeLoadedState } from "./actions"

const store = configureStore({
  reducer: {
    loading: changeLoadedState,
  },
})

export default store
