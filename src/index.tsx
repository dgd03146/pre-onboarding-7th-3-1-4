import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/lib/styles";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyles />
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>
);
