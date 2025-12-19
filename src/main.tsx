import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";

// Cmd+R / Ctrl+R to reload
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "r") {
    e.preventDefault();
    location.reload();
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
