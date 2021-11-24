import React from "react";

function MenuItem(props) {
    return(
        <div className="menu__item disabled">
            {props.name}
        </div>
    )
}

export default MenuItem