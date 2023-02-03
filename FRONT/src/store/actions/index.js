import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loaded: false,
}

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      return {
        ...state,
        loaded: !state.loaded,
      }
    },
  },
})

export const { setIsLoading } = loadingSlice.actions

export const changeLoadedState = loadingSlice.reducer
