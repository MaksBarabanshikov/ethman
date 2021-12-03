import React from "react";
import MenuItem from "./MenuItem";

function WalletMenu() {
    return(
        <div id="wallet__menu">
            <div className="inner">
                <MenuItem name="COMICS"/>
                <MenuItem name="3D"/>
                <MenuItem name="AVATARS"/>
                <MenuItem name="EXCLUSIVE"/>
                <MenuItem name="CRYPTOVOXELS"/>
                <MenuItem name="MEMES"/>
            </div>
        </div>
    )
}

export default WalletMenu