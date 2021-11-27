import React from "react";
import logoLink from "../../../../img/Product/opensea.svg";
import {Link} from "react-router-dom";

function ItemLink({type,address,pages,onClick}) {
    if (type === "comics") {
        return (
            <>
                <a href="https://opensea.io/" target="_blank" rel="noreferrer">
                    <img src={logoLink} alt="logo"/>
                    Comic
                </a>
                <Link to={`/comic/${address}`} onClick={() => onClick(pages)}>
                    <br/>
                    Preview
                </Link>
            </>
        )
    } else if (type === "figures") {
        return (
            <a href="https://opensea.io/" target="_blank" rel="noreferrer">
                <img src={logoLink} alt="logo"/>
                Card
            </a>
        )
    } else {
        return (
            <a href="https://opensea.io/" target="_blank" rel="noreferrer">
                <img src={logoLink} alt="logo"/>
            </a>
        )
    }
}

export default ItemLink