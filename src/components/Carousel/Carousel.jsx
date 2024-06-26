import React, {useState, useEffect} from "react";
import "./Carousel.scss"
import { FaPlus } from "react-icons/fa";
import ScreenSize from "./ScreenSize.jsx";

const Carousel = () => {
    const [carouselSize, setCarouselSize] = useState(2)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slidesLength, setSlidesLength] = useState(0)

    const screenSize = ScreenSize();
    useEffect(() => {
        if (screenSize.width > 400 && screenSize.width < 600 && carouselSize !== 2) {
            setCarouselSize(2)
            setCurrentIndex(0)
        }
        if (screenSize.width > 600 && screenSize.width < 800 && carouselSize !== 3) {
            setCarouselSize(3)
            setCurrentIndex(0)
        }
        if (screenSize.width > 800 && carouselSize !== 4) {
            setCarouselSize(4)
            setCurrentIndex(0)
        }
    }, [screenSize]);


    const showSlide = (index) => {
        document.querySelectorAll(".slide").forEach((slide, i) => {
            if (slidesLength <= carouselSize) {
                slide.style.display = "block"
            } else {
                if (i >= index && i < currentIndex + carouselSize) {
                    slide.style.display = "block"
                } else {
                    slide.style.display = "none"
                }
            }
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slidesLength;
        if (nextIndex + carouselSize <= slidesLength) {
            goToSlide(nextIndex);
        }
    };

    const goToPrevSlide = () => {
        const prevIndex = (currentIndex - 1 + slidesLength) % slidesLength;
        if (prevIndex + carouselSize <= slidesLength) {
            goToSlide(prevIndex);
        }
    };

    const [carouselLoading, setCarouselLoading] = useState(true);
    const [carouselBooks, setCarouselBooks] = useState([]);
    const [filteredCarouselBooks, setCarouselFilteredBooks] = useState([]);
    const [searchItem, setSearchItem] = useState('')

    useEffect(() => {
        fetch("https://run.mocky.io/v3/67255930-4437-4eeb-9c40-f4dacd035261")
            .then((response) => response.json())
            .then((json) => {
                setCarouselBooks(json)
                setCarouselFilteredBooks(json)
                setSlidesLength(json.length)
            })
            .finally(() => {
                setCarouselLoading(false);
            });
    }, []); //Without [] it doesn't reload the state


        const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = carouselBooks.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSlidesLength(filteredItems.length)
        setCurrentIndex(0)
        setCarouselFilteredBooks(filteredItems)
    }

    useEffect(() => {
        showSlide(currentIndex);
    }, [currentIndex]);

    return (
        <div className="carousel">

            <div className="search_input">
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleInputChange}
                    placeholder='Szukaj ksiązki'
                    maxLength="40"
                    size="40"
                    style={{
                        border: 'none',
                        background: 'transparent',
                        fontFamily:'Arial',
                        fontSize:'16px',
                        color:'white',
                        padding:'5px'
                    } }
                />

                <i className="add_book">
                    <FaPlus />
                </i>

            </div>

            <div className="bookshelf">
                <h3>Bookshelf</h3>
            </div>
            {carouselLoading ? (<div>Carousel Loading...</div>) : (
                <div className="carousel_items">
                    {filteredCarouselBooks.map((book, index) => (
                        <div className={`slide slide__${index}`}
                             style={index < carouselSize ? {display: 'block'} : {display: 'none'}}
                        >
                            <img src={book.cover} width={180} height={200} alt="books" style={
                                {borderRadius: "10px"}}

                            />
                        </div>)
                    )}
                </div>
            )}
            <div className="carousel_btn">
                <button className="btn__prev" onClick={goToPrevSlide}></button>
                <button className="btn__next" onClick={goToNextSlide}></button>
            </div>
        </div>
    );

};

export default Carousel