import React from 'react'

export default function Producto({ props, handleAddCart }) {
  const {name, price, stock } = props
  
  return (
    <div>
      <h2>{name}</h2>
      <h4><strong>${price}</strong></h4>
      <small>stock disponible: <strong>{stock}</strong></small>
      <button onClick={handleAddCart}>Add to Cart</button>
    </div>
  )
}
