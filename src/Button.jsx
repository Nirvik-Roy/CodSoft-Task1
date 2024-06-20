import React from 'react'

const Button = (props) => {
  let name=props.name
  return (
    <div>
      <button>Learn More{name}</button>
    </div>
  )
}

export default Button
