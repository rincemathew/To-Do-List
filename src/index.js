import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components.js/App";
import { BrowserRouter, Routes, Route } from "react-router";
import AddToDo from "./components.js/AddToDo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add-to-do" element={<AddToDo/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
