import React, {useState, useEffect, useRef} from "react";
import readingBoy from "../Images/readingBoy.jpeg"
// import iconReading from "../Images/iconReading.jpeg"

const HBooks = () => {
    const [text, setText] = useState("Witaj MAŁY czytelniku");
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setText( '"Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła"')
            ;
        }, 10000);

        return () => {
            console.log('DIE');
            clearTimeout(timerRef.current);
        };
    }, []);
    return (

            <>
                <h2>{text}</h2>
                <div className="child_picture">
                    <img src={readingBoy} width={130} height={130} alt="Czytające dziecko"
                    style={{

                        borderRadius:"60px"
                    }}/>
                </div>
            </>



    )
};

export default HBooks;





