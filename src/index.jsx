import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./custom-hooks/theme";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize("G-6ZTDQW0M5M");

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline is used to make a consistence UI on HTML and It
    sets the box-sizing property to border-box for all elements, */}
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
