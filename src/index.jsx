import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./custom-hooks/theme";
import App from "./App";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga4";

ReactGA.initialize("G-HZS6DQWBQN");
const tagManagerArgs = {
  gtmID: "GTM-XXXXXXX",
};

TagManager.initialize(tagManagerArgs);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
