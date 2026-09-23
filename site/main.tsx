import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AudioProvider } from "../src";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AudioProvider src="./assets/didactic-diminishment.m4a" title="Didactic Diminishment">
      <App />
    </AudioProvider>
  </StrictMode>,
);
