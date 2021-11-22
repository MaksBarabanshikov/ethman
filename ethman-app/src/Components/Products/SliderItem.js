import React from "react";

function SliderItem({sliderData}) {
    return (
        <li className="sliderItem" id={sliderData.id}>
            <a href={sliderData.href} target="_blank">
                <h3>{sliderData.title}</h3>
                <h4>{sliderData.subtitle}</h4>
            </a>
        </li>
    )
}

export default SliderItem