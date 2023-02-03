import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import store from "./store"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import Loaded from "./components/Loaded"
import Load from "./components/Loaded"


export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Load />
        <GlobalStyle />
        <BrowserRouter>
          <Router />
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}
