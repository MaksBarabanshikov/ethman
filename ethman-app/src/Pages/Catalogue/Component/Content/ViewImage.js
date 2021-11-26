import React from "react"
import "./ViewImage.css"

function ViewImage({img,onClick}) {
    return(
        <div className="featherlight" >
            <div className="featherlight-content">
                <button className="featherlight-close-icon featherlight-close" aria-label="Close"
                onClick={() => onClick()}>✕</button>
                <img src={img} alt={img} className="featherlight-image featherlight-inner"/>
            </div>
        </div>
    )
}

export default ViewImage