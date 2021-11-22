import React from "react";
import SliderItem from "./SliderItem";

function SliderList(props) {
    return (
        <ul className="slider-list" id="slider-list">
            { props.sliderData.map(sliderData => {
                return <SliderItem sliderData={sliderData}/>
            })}
        </ul>
    )
}

export default SliderList