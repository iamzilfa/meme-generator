import React from 'react'

const Star = (props) => {
let starIcon = props.isFilled ? "filled-star.png" : "star-empty.png"
  return (
    <img
    src={require(`../images/${starIcon}`)}
    className="w-6 cursor-pointer"
    onClick={props.handleClick}
    alt="startEmpty"
  />
  )
}

export default Star