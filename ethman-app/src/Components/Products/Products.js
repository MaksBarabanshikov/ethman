import React from "react"
import SliderList from "./SliderList"
import sliderData from "../../assets/sliderData"
import "./Products.css"

function Products() {
    return (
        <div className="products">
            <div className="slider">
                <div className="slider__track" id="slider-track">
                    <SliderList sliderData={sliderData}/>
                </div>
            </div>
        </div>
    )
}

export default Products