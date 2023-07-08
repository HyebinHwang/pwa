import { ChakraBaseProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./animation.css";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraBaseProvider theme={theme}>
    <BrowserRouter basename={"/pwa"}>
      <App />
    </BrowserRouter>
  </ChakraBaseProvider>
);
