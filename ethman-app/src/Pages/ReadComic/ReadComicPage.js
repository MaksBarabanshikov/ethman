import React, {useEffect} from "react";
import Magazine from "./Magazine";

function ReadComicsPage({selectedPage}) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.style.padding = "3rem";
        return () => {
            document.body.style.overflow = "auto";
            document.body.style.padding = "3rem";
        };
    }, []);
    return (
        <div className="comics">
            <Magazine selectedPage={selectedPage}/>
        </div>

    )
}

export default ReadComicsPage