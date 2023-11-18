import React, {useEffect, useState} from "react";
import BooksSearch from "./assets/BooksSearch.jsx";
import "./assets/BSearch.scss"
import HBooks from "./assets/HelloBooks/HBooks.jsx"
import "./assets/HelloBooks/HBooks.scss"
import Clock from "./assets/ClockDateApp/Clock.jsx";


function App() {

    // useEffect(() => {
    //
    // }, []);

    return (
        <div className="app">

            <Clock />
            <HBooks />
            <BooksSearch />

        </div>
    )

}

export default App