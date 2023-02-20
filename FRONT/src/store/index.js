import { configureStore } from "@reduxjs/toolkit"
import { changeLoadedState } from "./actions"
import { changeNavbarState } from "./actions"

const store = configureStore({
  reducer: {
    loading: changeLoadedState,
    navbar: changeNavbarState,
  },
})

export default store
