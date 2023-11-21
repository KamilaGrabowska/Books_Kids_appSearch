import React, {useState, useEffect, useRef} from "react";
import iconReading from "../Images/readingBoy.jpeg"

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
                    <img src={iconReading} width={100} height={100} alt="Czytające dziecko"
                    style={{

                        borderRadius:"60px"
                    }}/>
                </div>
            </>



    )
};

export default HBooks;





