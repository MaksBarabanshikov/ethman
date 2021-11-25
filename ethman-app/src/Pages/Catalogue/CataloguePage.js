import React, {useState} from "react";
import CatalogueCategory from "./Component/CatalogueCategory";
import CatalogueContent from "./Component/CatalogueContent";
import "./Categorue.css"
import itemsData from "../../assets/ItemsData";

function CataloguePage() {
    const [selectedCategory, setSelectedCategory] = useState('comics')
    const category = [
        {id: "figures", name: "ETH-MEN Figures"},
        {id: "3D", name: "ETH-MEN 3D"},
        {id: "comics", name: "ETH-MEN Comics"},
        {id: "avatars", name: "ETH-MEN Avatars"},
        {id: "exclusive", name: "ETH-MEN Exclusive"},
        {id: "cryptovoxels", name: "ETH-MEN Cryptovoxels"},
        {id: "reavers", name: "ETH-MEN Reavers"},
        {id: "related", name: "ETH-MEN Related"}
    ]

    function handlerClick(id) {
        console.log(id)
        setSelectedCategory(id)

    }

    return (
        <div className="catalogue">
            <div className="catalogue__container">
                <div className="item-page" itemScope itemType="https://schema.org/Article">
                    <meta itemProp="inLanguage" content="en-GB"/>
                    <div id="ethmen-catalogue">
                        <CatalogueCategory category={category} checkId={handlerClick}/>
                        <CatalogueContent itemsData={itemsData} selectedCategory={selectedCategory}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CataloguePage