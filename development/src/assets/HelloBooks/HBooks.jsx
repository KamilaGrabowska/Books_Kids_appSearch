import React, { useState, useEffect, useRef } from "react";

const HBooks = () => {
    const [text, setText] = useState("Witaj MAŁY czytelniku");
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setText("Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła” Wisława Szymborska");
        }, 10000);

        return () => {
            console.log('DIE');
            clearTimeout(timerRef.current);
        };
    }, []);
    return (

        <h2>{text}</h2>
)
};

export default HBooks;





