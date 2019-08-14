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
    width: 100%;
    height: 100%;
    padding-left: 0;
    font-family: Cormorant Garamond;
    font-style: normal;
    font-weight: 600;
    position: relative;
  }
  a {
    color: #e07628;
    text-decoration: none;
  }
  div {
    max-width: "960px";
    margin: "0 auto";
  }
  .footer-gradient {
  background: linear-gradient(180deg, #F8F7FF 7.81%, #9381FF 79.17%);
  /* vertical-align: bottom;
  display: table-cell; */
  /* width: 100%; */
  position: absolute;
  bottom: 0;
  width: 100vw;
  }
  .main-container {
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 450px; /* height of your footer */
  }
`

export default GlobalStyle
