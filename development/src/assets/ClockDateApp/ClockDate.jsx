import React from "react";

const ClockDate = ({date}) => {
    const dateString = date.toLocaleDateString();

    return (
        <h4>{dateString}</h4>
    )
}



export default ClockDate










