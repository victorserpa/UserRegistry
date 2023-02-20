import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loaded: false,
  navbarOpen: true,
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

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      return{
      ...state,
      navbarOpen: !state.navbarOpen
      }
    },
  },
})

export const { setIsLoading } = loadingSlice.actions

export const changeLoadedState = loadingSlice.reducer

export const { toggleNavbar } = navbarSlice.actions

export const changeNavbarState = navbarSlice.reducer