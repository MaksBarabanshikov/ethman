import React from "react"
import logo from "../../img/header/eth-men_logo.png"
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
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