import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
