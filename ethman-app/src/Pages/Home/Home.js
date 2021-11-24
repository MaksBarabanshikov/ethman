import React from "react";
import SliderList from "./SliderList";
import categoryData from "../../assets/categoryData";
import './Slider.css'

function HomePage() {
    return (
            <div className="products">
                <SliderList categoryData={categoryData}/>
            </div>
    )
}

export default HomePage