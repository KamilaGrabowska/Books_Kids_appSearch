import React, { useState, useEffect } from "react";
import "./Carousel.scss"
const Carousel= () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = document.querySelectorAll(".slide");

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    };

    const goToPrevSlide = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    };

    useEffect(() => {
        showSlide(currentIndex);
    }, [currentIndex]);

    return (
        <>
        <div className="carousel_slide">

            <div className="slide">Slide 1</div>
            <div className="slide">Slide 2</div>
            <div className="slide">Slide 3</div>
        </div>

            <div className="carousel_btn">
            <button className="btn__prev" onClick={goToPrevSlide}>Previous</button>
            <button className="btn__next" onClick={goToNextSlide}>Next</button>
        </div>
        </>
    );
};

export default Carousel