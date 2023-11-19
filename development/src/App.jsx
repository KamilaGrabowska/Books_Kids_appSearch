import React, {useState, useEffect} from "react";
import HBooks from "./assets/HelloBooks/HBooks.jsx"
import "./assets/HelloBooks/HBooks.scss"
import Clock from "./assets/ClockDateApp/Clock.jsx";
import "./assets/ClockDateApp/Clock.scss"
import Carousel from "./assets/Carousel/Carousel.jsx";
import "./untils/variables.scss"
import "./assets/Footer/Footer.scss"


function App() {


    return (

        <div className="app">

            <div className="time-container">
                <Clock/>
                <HBooks/>

            </div>

            {/*<div className="search-container">*/}
            {/*    <BooksSearch/>*/}
            {/*</div>*/}

            <div className="carousel-container">
                <Carousel/>
            </div>

            <footer className="footer-conatiner">
                <div className="footer">
                    <div className="footer-item">
                        <i className="footer-item__icon">Ikona1</i>
                        {/*<span>Element 1</span>*/}
                    </div>
                    <div className="footer-item">
                        <i className="footer-item__icon">Ikona2</i>
                        {/*<span>Element 2</span>*/}
                    </div>
                    <div className="footer-item">
                        <i className="footer-item__icon">Ikona3</i>
                        {/*<span>Element 3</span>*/}
                    </div>
                </div>
            </footer>
        </div>


    )

}

export default App