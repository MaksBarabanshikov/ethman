import React from "react"
import PropTypes from 'prop-types'

function CategoryItem(props) {
    return (
        <li id={props.category.id}
            onClick={() => props.onClick(props.category.id)}>
            {props.category.name}
        </li>
    )
}

CategoryItem.propTypes={
    category: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CategoryItem