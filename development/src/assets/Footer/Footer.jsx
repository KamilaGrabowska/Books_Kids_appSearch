import React, {useState, useEffect} from "react";
import "./Footer.scss"
import "../../untils/functions.scss"
import "../../untils/variables.scss"

function Footer() {


    return (

        <div className="footer">
            <div className="footer-item">
                <i className="footer-item__icon">Ikona1</i>
                {/*<span>Element 1</span>*/}
            </div>
            <div className="footer-item">
                <i className="footer-item__icon">Ikona2</i>
                {/*<span>Element 2</span>*/}
            </div>
            <div className="footer-item">
                <i className="footer-item__icon">Ikona3</i>
                {/*<span>Element 3</span>*/}
            </div>
        </div>

    )


}


export default Footer