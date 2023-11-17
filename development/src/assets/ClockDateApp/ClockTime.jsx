import React from "react";

const Date = ({date}) => {
    const dateString = date.toLocaleDateString();

    return (
        <h2>{dateString}</h2>
    )
}



export default Date

