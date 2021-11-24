import React from "react";
import SliderList from "./SliderList";
import sliderData from "../../assets/sliderData";
import './Slider.css'

function HomePage() {
    return (
            <div className="products">
                <SliderList sliderData={sliderData}/>
            </div>
    )
}

export default HomePage