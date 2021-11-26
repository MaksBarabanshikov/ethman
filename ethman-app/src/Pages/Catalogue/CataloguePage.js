import React, {useState} from "react";
import CatalogueCategory from "./Component/Categoty/CatalogueCategory";
import CatalogueContent from "./Component/Content/CatalogueContent";
import "./Categorue.css"
import itemsData from "../../assets/ItemsData";
import ViewImage from "./Component/Content/ViewImage";
import {logDOM} from "@testing-library/react";

function CataloguePage() {
    const [selectedCategory, setSelectedCategory] = useState('comics')
    const [visible, setVisible] = useState(false)
    const [imgSrc, setImgSrc] = useState('')

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
        setSelectedCategory(id)
    }

    function  handlerOpen(img) {
        setVisible(true)
        setImgSrc(img)
        console.log(setImgSrc)
        console.log(setVisible)
    }

    function handlerClose() {
        setVisible(false)
    }

    console.log(imgSrc)
    console.log(visible)
    let viewImage = visible ? ((<ViewImage img={imgSrc} onClick={handlerClose}/>)) : undefined;
    console.log(viewImage)
    return (
        <div className="catalogue">
            <div className="catalogue__container">
                <div className="item-page" itemScope itemType="https://schema.org/Article">
                    <meta itemProp="inLanguage" content="en-GB"/>
                    <div id="ethmen-catalogue">
                        <CatalogueCategory category={category} checkId={handlerClick}/>
                        <CatalogueContent itemsData={itemsData} selectedCategory={selectedCategory} openImg={handlerOpen}/>
                    </div>
                </div>

            </div>
            {viewImage}
        </div>
    )
}

export default CataloguePage