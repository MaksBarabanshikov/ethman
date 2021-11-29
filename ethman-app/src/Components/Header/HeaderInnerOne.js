import React from "react";
import logo from "../../img/header/eth-men_logo.png";
import "./HeaderInnerOne.css";
import {NavLink} from "react-router-dom";

function HeaderInnerOne() {
    return (
        <div className="header__inner-one">
            <div className="logo">
                <a href="/" title="ETH-MEN">
                    <img src={logo} alt="ETH-MEN Logo" className="logo"/>
                </a>
            </div>
            <div className="header__nav nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/wiki">Wiki</NavLink>
                        <NavLink to="/catalogue">Catalogue</NavLink>
                        <NavLink to="/wallet">Wallet</NavLink>
            </div>
        </div>
    )
}

export default HeaderInnerOne