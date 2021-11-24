import React from "react";
import Header from "../../Components/Header/Header";
import Connection from "./Component/Connection";
import WalletMenu from "./Component/WalletMenu";
import ConnectMetaMask from "./Component/ConnectMetaMask";
import {Link} from "react-router-dom";
import "./WalletPage.css"

function WalletPage() {
    return(
        <div id="wallet">
            <div id="banner">
                <h1>ETH-MEN Collection</h1>
                <p>ETH-MEN are a first of their kind NFT focussed on bringing the age-old experience of collectible action figures to the Ethereum blockchain.</p>
            </div>
            <div id="wallet__header">
                <div className="back__web">
                    <Link to="/">BACK TO WEBSITE</Link>
                </div>
                <ConnectMetaMask/>
            </div>
            <Connection/>
            <WalletMenu/>
            <div id="footer">
                <div>
                    <a href="#" target="_blank" className="no_decoration">
                        © 2021 ETH-MEN Collection
                    </a>
                </div>
            </div>
        </div>
        )
}

export default WalletPage