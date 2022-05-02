import React  from 'react'
import ProductoInCart from './ProductoInCart'

function Cart({ productsCart,totalCarrito}) {
  return (
    <div>
      <h1>Total:$ {totalCarrito}</h1>
    {
      productsCart.map(producto => <ProductoInCart key={producto.id} producto={producto} />)
      }
      
    </div>
  )
}

export default Cart