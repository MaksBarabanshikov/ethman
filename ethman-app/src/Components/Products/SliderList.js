import React from "react";
import SliderItem from "./SliderItem";
import {Splide, SplideSlide} from "@splidejs/react-splide";

import '@splidejs/splide/dist/css/splide.min.css';

function SliderList(props) {
    return (
        <Splide
            options={{
                type: 'loop',
                perPage: 4,
                perMove: 1,
                focus: 'center',
                trimSpace: true,
                pagination : false,
                autoplay: true,
                interval: 3000,
                arrows: false,
                flickPower: 100,
                breakpoints: {
                    1000: {
                        perPage: 2,
                    },
                    767: {
                        perPage: 1,
                    }
                },
            }}>
            {props.sliderData.map(sliderData => {
                return (
                    <SplideSlide className={sliderData.id}>
                        <SliderItem sliderData={sliderData}/>
                    </SplideSlide>
                )
            })}
        </Splide>
    )
}

export default SliderList