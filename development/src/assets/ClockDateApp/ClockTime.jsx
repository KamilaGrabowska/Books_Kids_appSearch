import React from "react";

const ClockTime = ({date}) => {
    const timeString = date.toLocaleTimeString();

    return (
        <h4>{timeString}</h4>
    )
}

export default ClockTime
