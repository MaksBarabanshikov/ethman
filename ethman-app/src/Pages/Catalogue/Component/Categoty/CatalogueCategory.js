import React from "react";
import CategoryItem from "./CategoryItem";


function CatalogueCategory(props) {

    return (
        <div className="catalogue__category">
            <ul>
                {props.category.map(category =>
                      <CategoryItem
                            category={category}
                            key={category.id}
                            onClick={props.checkId}
                        />
                )}
            </ul>
        </div>
    )
}

export default CatalogueCategory