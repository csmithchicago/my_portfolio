import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #F8F7FF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    margin: '0 auto';
    max-width: 960;
    /* width: 100%; */
    height: 100%;
    padding: 0;
    font-family: Cormorant Garamond;
    font-style: normal;
    font-weight: 600;
  }
  a {
    color: #e07628;
    text-decoration: none;
  }
`

export default GlobalStyle
