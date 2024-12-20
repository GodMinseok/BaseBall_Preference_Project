import React from "react";
// Global Style 정의
import { createGlobalStyle } from "styled-components";
import Home from "./screens/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: red;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

// Router 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

// App 컴포넌트
function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
