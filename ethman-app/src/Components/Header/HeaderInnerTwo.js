import React from "react";
import "./HeaderInnerOne.css";
import {Link} from "react-router-dom";

function HeaderInnerTwo(props) {
    return (
        <div className="header__inner-two">
            <div className="description">
                <h1>ETH-MEN Collection</h1>
                <h2>ETH-MEN are a first of their kind NFT focussed on bringing the age-old experience of collectible
                    action figures to the Ethereum blockchain.</h2>
                <Link to="/wallet" target="_blank">
                    <div className="connect">Go to wallet</div>
                </Link>
            </div>
        </div>
    )
}

export default HeaderInnerTwo