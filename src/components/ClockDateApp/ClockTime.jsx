import React from "react";

const ClockTime = ({date}) => {
    const timeString = date.toLocaleTimeString();

    return (

            <p>{timeString} </p>

    )
}

export default ClockTime
