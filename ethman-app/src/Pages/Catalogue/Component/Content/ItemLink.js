import React from "react";
import logoLink from "../../../../img/Product/opensea.svg";

function ItemLink({type}) {
    if (type === "comics") {
        return (
            <>
            <a href="#" target="_blank">
                <img src={logoLink} alt="logo"/>
                Front
            </a>
        <a href="#" target="_blank">
            <img src={logoLink} alt="logo"/>
            Back
        </a>
        <a href="#" target="_blank">
            <br/>
            Preview
        </a>
            </>
    )
    }
    else if (type === "figures") {
        return (
            <a href="#" target="_blank">
                <img src={logoLink} alt="logo"/>
                Card
            </a>
        )
    } else {
        return(
        <a href="#" target="_blank">
            <img src={logoLink} alt="logo"/>
        </a>
        )
    }
}

export default ItemLink