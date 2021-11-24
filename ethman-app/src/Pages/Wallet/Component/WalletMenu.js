import React from "react";
import MenuItem from "./MenuItem";

function WalletMenu() {
    return(
        <div id="wallet__menu">
            <div className="inner">
                <MenuItem name="LEGACY"/>
                <MenuItem name="RELOADED"/>
                <MenuItem name="COMICS"/>
                <MenuItem name="COMICS UNSEALED"/>
                <MenuItem name="AVATARS"/>
                <MenuItem name="3D"/>
                <MenuItem name="SPACE REAVERS"/>
                <MenuItem name="EXCLUSIVE"/>
                <MenuItem name="VOXELS"/>
            </div>
        </div>
    )
}

export default WalletMenu