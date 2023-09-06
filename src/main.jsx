import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/datepicker.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
