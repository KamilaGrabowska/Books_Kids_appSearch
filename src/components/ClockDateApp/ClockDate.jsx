import React from "react";

const ClockDate = ({date}) => {
    const dateString = date.toLocaleDateString();

    return (

            <p>{dateString}</p>

    )
}

export default ClockDate










