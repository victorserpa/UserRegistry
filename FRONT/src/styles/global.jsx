import { createGlobalStyle } from "styled-components"

import sz from "../assets/sz.jpg"

export const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
}
:focus {
outline: 0;
box-shadow: 0 0 0 2px;
}

body {
color: ${(props) => props.theme["gray-300"]};
-webkit-font-smoothing: antialiased;
background-image: url(${sz});
background-size: cover;
background-repeat: no-repeat;
}

body, input, textarea, button {
font: 400 1rem Roboto, sans-serif;
}
`
