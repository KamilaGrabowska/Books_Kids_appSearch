import React,{useState,useEffect}  from "react";
import HBooks from "./assets/HelloBooks/HBooks.jsx"
import "./assets/HelloBooks/HBooks.scss"
import Clock from "./assets/ClockDateApp/Clock.jsx";
import "./assets/ClockDateApp/Clock.scss"
import Carousel from "./assets/Carousel/Carousel.jsx";



function App() {


    return (

        <div className="app">

            <div className="time-container">
                <HBooks/>
                <Clock/>
            </div>


            {/*<div className="search-container">*/}
            {/*    <BooksSearch/>*/}
            {/*</div>*/}


            <div className="carousel-container">
                <Carousel />
            </div>


            <footer className="footer-conatiner">
                <div className="footer-item__1">Stopka - Element 1</div>
                <div className="footer-item__2">Stopka - Element 2</div>
                <div className="footer-item__3">Stopka - Element 3</div>
            </footer>
        </div>


    )

}

export default App