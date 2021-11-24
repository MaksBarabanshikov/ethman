import React from "react";
import CatalogueCategory from "./Component/CatalogueCategory";
import CatalogueContent from "./Component/CatalogueContent";
import "./Categorue.css"

function CataloguePage() {
    return (
        <div className="catalogue">
            <div className="catalogue__container">
                <div className="item-page" itemScope itemType="https://schema.org/Article">
                    <meta itemProp="inLanguage" content="en-GB"/>
                    <div id="ethmen-catalogue">
                        <CatalogueCategory/>
                        <CatalogueContent/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CataloguePage