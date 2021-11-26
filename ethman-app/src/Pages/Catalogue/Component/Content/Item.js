import React from "react";
import ItemLink from "./ItemLink";

function Item({itemsData,onClick}) {
    return(
        <div className="item grow" data-index="1">
                <div className="image" style={{backgroundImage: `url(${itemsData.img})`}} onClick={() => onClick(itemsData.img)}/>
                <div className="name">{itemsData.name}</div>

                <div className="links">
                    <ItemLink  type={itemsData.type}/>
                </div>
        </div>
    )
}

export default Item