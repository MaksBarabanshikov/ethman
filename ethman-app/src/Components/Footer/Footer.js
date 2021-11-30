import React from "react";
import logo from '../../img/header/logoCSC.png'
import discord from '../../img/footer/social_discord.svg'
import twitter from '../../img/footer/social_twitter.svg'
import instagram from '../../img/footer/social_instagram.svg'
import medium from '../../img/footer/social_medium.svg'
import mail from '../../img/footer/social_mail.svg'
import "./Footer.css"
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="ETHMEN logo" className="logo"/>
            <ul className="nav menu">
                <li>
                    <Link to="/">Advertising material</Link>
                </li>
            </ul>
            <div className="social">
                <a href="https://discord.com/" target="_blank" rel="noreferrer"><img src={discord} alt="discord logo"/></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter logo"/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram logo"/></a>
                <a href="https://medium.com/" target="_blank" rel="noreferrer"><img src={medium} alt="medium logo"/></a>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src={mail} alt="mail logo"/></a>
            </div>
        </div>
    )
}

export default Footer