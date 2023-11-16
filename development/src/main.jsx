import React from "react";
import ReactDOM from "react-dom/client";
import BooksSearch from "./assets/BooksSearch.jsx";
import "./assets/BSearch.scss"
import HBooks from "./assets/HelloBooks/HBooks.jsx"
import "./assets/HelloBooks/HBooks.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {<HBooks />}
        {<BooksSearch />}

    </React.StrictMode>
);




// import React from "react";
// import {createRoot} from "react-dom/client";
// import BooksSearch from "./assets/BooksSearch.jsx";
// import "./assets/BSearch.scss"
//
// const container = document.getElementById("app");
// const root = createRoot(container);
//
//  const App = ()=>{
//      return (
//          <>
//              <BooksSearch />
//          </>
//      )
//  }
//
//  App();