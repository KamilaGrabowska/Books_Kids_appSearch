import React, {useState, useEffect} from "react";
import HBooks from "./components/HelloBooks/HBooks.jsx"
import "./components/HelloBooks/HBooks.scss"
import Clock from "./components/ClockDateApp/Clock.jsx";
import "./components/ClockDateApp/Clock.scss"
import Carousel from "./components/Carousel/Carousel.jsx";
import "./untils/variables.scss"
import Footer from "./components/Footer/Footer.jsx";




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