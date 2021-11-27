import React from "react";

function Connection({walletAddress}) {
    return(
        <div id="connection">
            <span>{walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                ) : (
                    <span>Your are not logged in. Please connect to Metamask.</span>
                )}</span>
        </div>
    )
}

export default Connection