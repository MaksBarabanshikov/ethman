import React from "react";
import ItemLink from "./ItemLink";

function Item({itemsData, onClick, selectComics}) {
    return (
        <div className="item grow" data-index="1">
            <div className="image" style={{backgroundImage: `url(${itemsData.img})`}}
                 onClick={() => onClick(itemsData.img)}/>
            <div className="name">{itemsData.name}</div>

            <div className="links">
                <ItemLink type={itemsData.type} address={itemsData.address} pages={itemsData.pages}
                          onClick={selectComics}/>
            </div>
        </div>
    )
}

export default Item