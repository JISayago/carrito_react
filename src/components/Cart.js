import React from 'react'
import ProductoInCart from './ProductoInCart'

function Cart({ productsCart }) {
  
  return (
  <div>
    {
      productsCart.map(producto => <ProductoInCart key={producto.id} producto={producto} />)
    }
    </div>
  )
}

export default Cart