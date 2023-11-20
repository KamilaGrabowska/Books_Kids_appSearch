import React, {useState, useEffect} from "react";
import HBooks from "./assets/HelloBooks/HBooks.jsx"
import "./assets/HelloBooks/HBooks.scss"
import Clock from "./assets/ClockDateApp/Clock.jsx";
import "./assets/ClockDateApp/Clock.scss"
import Carousel from "./assets/Carousel/Carousel.jsx";
import "./untils/variables.scss"
import Footer from "./assets/Footer/Footer.jsx";




function App() {


    return (

        <div className="app">

            <div className="time-container">
                <Clock/>
                <HBooks/>
            </div>

            <div className="carousel-container">
                <Carousel/>
            </div>

            <div className="footer-conatiner">
                <Footer />
            </div>
        </div>


    )

}

export default App