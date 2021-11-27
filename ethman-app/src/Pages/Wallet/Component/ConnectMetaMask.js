import React from "react";

function ConnectMetaMask({connect}) {
    return(
        <div id="connect__metamask">
            <div>
                <img src="https://wallet.eth-men.com/images/wallet/metamask_fox.svg" alt="connect metamask"/>
            </div>
            <div className="text" onClick={connect}>Connect to MetaMask</div>
        </div>
    )
}

export default ConnectMetaMask