import React, { useState, useEffect, useRef } from "react";

const HBooks = () => {
    const [text, setText] = useState("Witaj MAŁY czytelniku");
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setText("Zapraszam do lektury");
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





