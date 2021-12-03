import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

function HeaderNav({visible,clickLink}) {
    const classes = classNames({
        nav: true,
        open: visible
    })
    return(
        <div id="headerNav" className={classes}>
                <NavLink to="/" onClick={() => clickLink(visible)}>Home</NavLink>
                <NavLink to="/wiki" onClick={() => clickLink(visible)}>Wiki</NavLink>
                <NavLink to="/catalogue" onClick={() => clickLink(visible)}>Catalogue</NavLink>
                <NavLink to="/wallet" onClick={() => clickLink(visible)}>Wallet</NavLink>
        </div>
    )
}

export default HeaderNav