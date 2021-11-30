import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Magazine.css"

function Magazine({selectedPage}) {
    return (
            <HTMLFlipBook
                width={600}
                height={750}
                size="stretch"
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}>
                {selectedPage.map(selectedPage => {
                    return (
                        <div className="page" key={selectedPage.pageNumber}>
                            <img src={selectedPage.page} alt={selectedPage.pageNumber}/>
                        </div>
                    )
                })}
            </HTMLFlipBook>

    )
}

export default Magazine