import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TelegramProvider } from "./context/TelegramContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TelegramProvider>
      <App />
    </TelegramProvider>
  </StrictMode>
);
