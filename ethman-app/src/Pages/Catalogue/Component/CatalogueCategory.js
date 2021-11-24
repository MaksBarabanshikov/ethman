import React from "react";
import CategoryItem from "./CategoryItem";

function CatalogueCategory() {
    return (
        <div className="catalogue__category">
            <ul>
                <CategoryItem name="ETH-MEN Figures"/>
                <CategoryItem name="ETH-MEN 3D"/>
                <CategoryItem name="ETH-MEN Comics"/>
                <CategoryItem name="ETH-MEN Avatars"/>
                <CategoryItem name="ETH-MEN Exclusive"/>
                <CategoryItem name="ETH-MEN Cryptovoxels"/>
                <CategoryItem name="ETH-MEN Reavers"/>
                <CategoryItem name="ETH-MEN Related"/>
            </ul>
        </div>
    )
}

export default CatalogueCategory