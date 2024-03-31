import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TC from "./componants/TC/TC.jsx";

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/TnC" element={<TC />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{routing} </React.StrictMode>
);
