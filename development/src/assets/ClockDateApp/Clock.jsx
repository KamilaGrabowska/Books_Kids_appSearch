import React, {useEffect, useState} from "react";
import ClockDate from "./ClockDate.jsx"
import ClockTime from "./ClockTime.jsx"


const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [currentDate])

    return (
        <div className="clock__container">
            <div className="clock">

                <ClockDate date={currentDate}/>

                <ClockTime date={currentDate}/>

            </div>
        </div>
    )
}


export default Clock

