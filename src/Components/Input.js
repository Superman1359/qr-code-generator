import React from 'react'

const Input = ({handleChange}) => {
  return (
    <div>
        <input className='inp' type="text" onChange={handleChange} />
    </div>
  )
}

export default Input