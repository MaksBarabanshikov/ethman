import React from "react"
import SliderList from "./SliderList"
import sliderData from "../../assets/sliderData"
import "./Products.css"

function Products() {
    return (
        <div className="products">
            <SliderList sliderData={sliderData}/>
        </div>
    )
}

export default Products