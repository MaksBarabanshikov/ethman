import React, {useEffect, useState} from "react";
import logo from "../../img/header/logo.png";
import "./HeaderInnerOne.css";
import {Link} from "react-router-dom";
import HeaderNav from "./HeaderNav";
import classNames from "classnames";


function HeaderInnerOne() {
    const [windowWidth, setWindowWidth] = useState(null)
    const [visible, setVisible] = useState(false)

    const classes = classNames({
        header__inner_one: true,
        mobileStyle: windowWidth
    })

    const classesBtnMenu = classNames({
        btnOpen: visible
    })

    function viewWidth() {
        if (window.innerWidth <= 470) {
            setWindowWidth(true)
        } else {
            setWindowWidth(false)
        }
        window.addEventListener('resize', function () {
            if (window.innerWidth <= 470) {
                setWindowWidth(true)
            } else {
                setWindowWidth(false)
            }
        })
    }

    function handleSetVisible() {
        setVisible(!visible)
    }

    useEffect(() => {
        viewWidth()
    })


    return (
        <div className={classes}>
            <div className="logo">
                <Link to="/" title="ETH-MEN">
                    <img src={logo} alt="ETH-MEN Logo" className="logo"/>
                </Link>
            </div>
            <div id="bnt_menu" className={classesBtnMenu} onClick={handleSetVisible}>
                <span/>
            </div>
            <HeaderNav visible={visible} clickLink={handleSetVisible}/>
        </div>
    )
}

export default HeaderInnerOne