import React, {useState, useEffect} from "react";
import "./Footer.scss"
import "../../untils/functions.scss"
import "../../untils/variables.scss"
import { ImBooks } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";

function Footer() {


    return (

        <div className="footer">
            <div className="footer-item">
                <i className="footer-item__icon">
                    <ImBooks />
                </i>

            </div>
            <div className="footer-item">
                <i className="footer-item__icon">
                    <FaSearch />
                </i>

            </div>
            <div className="footer-item">
                <i className="footer-item__icon">
                    <FaPenNib />
                </i>

            </div>
        </div>

    )


}


export default Footer