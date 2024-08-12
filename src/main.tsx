import React from "react";
import ReactDOM from "react-dom/client";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <CssVarsProvider>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
