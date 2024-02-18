import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/scss/App.scss";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./DataContext/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
