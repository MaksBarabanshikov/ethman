import React from "react";

function SliderItem({categoryData}) {
    return (
            <a href={categoryData.href} target="_blank" rel="noreferrer">
                <h3>{categoryData.title}</h3>
                <h4>{categoryData.subtitle}</h4>
            </a>
    )
}

export default SliderItem