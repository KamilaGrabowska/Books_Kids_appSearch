import React from "react";
import ReactDOM from "react-dom/client";
import BooksSearch from "./assets/BooksSearch.jsx";
import "./assets/BSearch.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {<BooksSearch />}
    </React.StrictMode>
);
