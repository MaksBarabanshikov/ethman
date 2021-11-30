import React from "react";
import {Link} from "react-router-dom";

function ItemLink({address,pages,price,onClick}) {
    // if (type === "comics") {
    //     return (
    //         <>
    //             <a href="https://opensea.io/" target="_blank" rel="noreferrer">
    //                 <img src={logoLink} alt="logo"/>
    //                 Comic
    //             </a>
    //             <Link to={`/comic/${address}`} onClick={() => onClick(pages)}>
    //                 <br/>
    //                 Preview
    //             </Link>
    //         </>
    //     )
    // } else {
        return (
            <Link to={`/comic/${address}`} onClick={() => onClick(pages)} style={{
                padding: "10px 0", fontSize: "14px"}}>
                BUY ({price})
            </Link>
        )
}

export default ItemLink