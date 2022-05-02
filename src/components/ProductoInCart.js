import React from 'react'

export default function ProductoInCart({ producto }) {
    const { name, price, stock } = producto
    
    return (
      <div>
        <h2>{name}</h2>
        <h4><strong>${price}</strong></h4>
        <small>stock disponible: <strong>{stock}</strong></small>
      </div>
    )
}
