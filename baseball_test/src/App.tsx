import { createGlobalStyle } from "styled-components";
import "./App.css";

function App() {}

export default App;

// 공통적으로 전역에서 사용할 Global CSS
const GlobalStyle = createGlobalStyle`
  ${onreset}
  body{
    background-color: red;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

`;
