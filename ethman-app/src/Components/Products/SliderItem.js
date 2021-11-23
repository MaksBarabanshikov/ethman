import React from "react";

function SliderItem({sliderData}) {
    return (
            <a href={sliderData.href} target="_blank" rel="noreferrer">
                <h3>{sliderData.title}</h3>
                <h4>{sliderData.subtitle}</h4>
            </a>
    )
}

export default SliderItem