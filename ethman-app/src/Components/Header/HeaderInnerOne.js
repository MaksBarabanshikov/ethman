import React from "react";
import logo from "../../img/header/eth-men_logo.png";
import "./HeaderInnerOne.css";

function HeaderInnerOne() {
    return (
        <div className="header__inner-one">
            <div className="logo">
                <a href="/" title="ETH-MEN">
                    <img src={logo} alt="ETH-MEN Logo" className="logo"/>
                </a>
            </div>
            <div className="header__nav nav">
                <nav>
                    <ul className="header__list nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Wiki</a></li>
                        <li><a href="#">Catalogue</a></li>
                        <li><a href="#">Wallet</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HeaderInnerOne