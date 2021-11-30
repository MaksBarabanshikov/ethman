import React, {useState} from "react";
import CatalogueCategory from "./Component/Categoty/CatalogueCategory";
import CatalogueContent from "./Component/Content/CatalogueContent";
import "./Categorue.css"
import itemsData from "../../assets/ItemsData";
import ViewImage from "./Component/Content/ViewImage";

function CataloguePage({getPages}) {
    const [selectedCategory, setSelectedCategory] = useState('comics')
    const [visible, setVisible] = useState(false)
    const [imgSrc, setImgSrc] = useState('')

    const category = [
        {id: "comics", name: "ETH-MEN Comics"},
        {id: "3D", name: "ETH-MEN 3D"},
        {id: "avatars", name: "ETH-MEN Avatars"},
        {id: "exclusive", name: "ETH-MEN Exclusive"},
        {id: "cryptovoxels", name: "ETH-MEN Cryptovoxels"},
        {id: "memes", name: "ETH-MEN Memes"},
    ]

    function handlerClick(id) {
        setSelectedCategory(id)
    }

    function handlerOpen(img) {
        setVisible(true)
        setImgSrc(img)
        document.body.style.overflow = "hidden"
    }

    function handlerClose() {
        setVisible(false)
        document.body.style.overflow = "auto"
    }

    let viewImage = visible ? ((<ViewImage img={imgSrc} onClick={handlerClose}/>)) : undefined;
    return (
        <div className="catalogue">
            <div className="catalogue__container">
                <div className="item-page" itemScope itemType="https://schema.org/Article">
                    <meta itemProp="inLanguage" content="en-GB"/>
                    <div id="ethmen-catalogue">
                        <CatalogueCategory category={category} checkId={handlerClick}/>
                        <CatalogueContent itemsData={itemsData} selectedCategory={selectedCategory}
                                          openImg={handlerOpen} getPages={getPages} />
                    </div>
                </div>

            </div>
            {viewImage}
        </div>
    )
}

export default CataloguePage