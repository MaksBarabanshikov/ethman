import React from "react"
import logo from "../../img/header/eth-men_logo.png"
import "./Header.css";
import HeaderInnerOne from "./HeaderInnerOne";

function Header() {
    return (
        <header className="header">
            <HeaderInnerOne />
            <div className="header__inner-two">
                <div className="description">
                    <h1>ETH-MEN Collection</h1>
                    <h2>ETH-MEN are a first of their kind NFT focussed on bringing the age-old experience of collectible
                        action figures to the Ethereum blockchain.</h2>
                    <a href="#" target="_blank">
                        <div className="connect">Go to wallet</div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header