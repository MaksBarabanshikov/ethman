import React, {useEffect, useState} from "react";
import Connection from "./Component/Connection";
import WalletMenu from "./Component/WalletMenu";
import ConnectMetaMask from "./Component/ConnectMetaMask";
import {Link} from "react-router-dom";
import "./WalletPage.css"
import {
    connectWallet,
    getCurrentWalletConnected
} from "./utils/interact";

function WalletPage() {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    useEffect(async () => {
        const {address, status} = await getCurrentWalletConnected();
        setWallet(address)

        addWalletListener()
    }, []);

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("👆🏽 Write a message in the text-field above.");
                } else {
                    setWallet("");
                    setStatus("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </p>
            );
        }
    }

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet()
        setStatus(walletResponse.status)
        setWallet(walletResponse.address)
    };

    // const onMintPressed = async () => {
    //     const { success, status } = await mintNFT(url, name, description);
    //     setStatus(status);
    //     if (success) {
    //         setName("");
    //         setDescription("");
    //         setURL("");
    //     }
    // };

    return (
        <div id="wallet">
            <div id="banner">
                <h1>ETH-MEN Collection</h1>
                <p>ETH-MEN are a first of their kind NFT focussed on bringing the age-old experience of collectible
                    action figures to the Ethereum blockchain.</p>
            </div>
            <div id="wallet__header">
                <div className="back__web">
                    <Link to="/">BACK TO WEBSITE</Link>
                </div>
                <ConnectMetaMask connect={connectWalletPressed}/>
            </div>
            <Connection walletAddress={walletAddress}/>
            <WalletMenu/>
            <div id="footer">
                <div>
                    <Link to="/" target="_blank" rel="noreferrer" className="no_decoration">
                        © 2021 ETH-MEN Collection
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WalletPage