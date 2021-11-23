import React from "react";
import logo from '../../img/header/eth-men_logo.png'
import discord from '../../img/footer/social_discord.svg'
import twitter from '../../img/footer/social_twitter.svg'
import instagram from '../../img/footer/social_instagram.svg'
import medium from '../../img/footer/social_medium.svg'
import mail from '../../img/footer/social_mail.svg'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="ETHMEN logo" className="logo"/>
            <ul className="nav menu">
                <li>
                    <a href="#">Advertising material</a>
                </li>
            </ul>
            <div className="social">
                <a href="#"><img src={discord} alt="discord logo"/></a>
                <a href="#"><img src={twitter} alt="twitter logo"/></a>
                <a href="#"><img src={instagram} alt="instagram logo"/></a>
                <a href="#"><img src={medium} alt="medium logo"/></a>
                <a href="#"><img src={mail} alt="mail logo"/></a>
            </div>
        </div>
    )
}

export default Footer