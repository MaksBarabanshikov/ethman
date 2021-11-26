import React from "react";
import Item from "./Item";

function CatalogueContent({itemsData, selectedCategory,openImg,getPages}) {
    return (<div className="catalogue__content">
        {itemsData.map(itemsData => {
            if (itemsData.type === selectedCategory) {
                return (
                    <Item key={itemsData.id} itemsData={itemsData} onClick={openImg} selectComics={getPages}/>
                )
            }
        })}
    </div>)

}

export default CatalogueContent