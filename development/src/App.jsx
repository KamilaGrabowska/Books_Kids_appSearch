import React, {useEffect, useState} from "react";
import BooksSearch from "./assets/BooksSearch.jsx";
import "./assets/BSearch.scss"
import HBooks from "./assets/HelloBooks/HBooks.jsx"
import "./assets/HelloBooks/HBooks.scss"
import Clock from "./assets/ClockDateApp/Clock.jsx";
import "./assets/ClockDateApp/Clock.scss"
import Carousel from "./assets/Carousel/Carousel.jsx";



function App() {


    return (

        <div className="app">

            {/* Godzina w prawym górnym rogu */}
            <div className="time-container">
                <HBooks/>
                <Clock/>
            </div>

            {/* Wyszukiwanie książek */}
            <div className="search-container">
                <BooksSearch/>
            </div>

            {/* Karuzela slajdów */}
            <div className="carousel-container">
                <Carousel/>
            </div>

            {/* Stopka z trzema div */}
            <footer className="footer-conatiner">
                <div className="footer-item">Stopka - Element 1</div>
                <div className="footer-item">Stopka - Element 2</div>
                <div className="footer-item">Stopka - Element 3</div>
            </footer>
        </div>


    )

}

export default App