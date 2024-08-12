import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
import "./index.css";
import "./Global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/ErrorBoundary";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container); // Create root using the new API

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
