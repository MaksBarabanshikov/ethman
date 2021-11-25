import React from "react";
import logoLink from "../../../img/Product/opensea.svg"

function Item({itemsData}) {
    return(
        <div className="item grow" data-index="1">
                <div className="image" style={{backgroundImage: `url(${itemsData.img})`}}/>
                <div className="name">{itemsData.name}</div>
                <div className="links">
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
                </div>
        </div>
    )
}

export default Item