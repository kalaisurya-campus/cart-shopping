import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { CartProvider } from "react-use-cart";
ReactDOM.render(
    <CartProvider>
        <App />
    </CartProvider>,
    document.getElementById("root")
);
