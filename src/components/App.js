import React, {useState,useEffect} from 'react'
import Cart from './Cart'
import Producto from './Producto'

export default function App() {

  const array = [{ "id": 1, "name": "producto1", "price": 199.50, "stock": 10 },
  { "id": 2, "name": "producto2", "price": 12.50, "stock": 6 },
  { "id": 3, "name": "producto3", "price": 300.50, "stock": 12 },
]
 
  const [products, setProducts] = useState([])
  const [productsCart, setProductCart] = useState([])
  const [totalCarrito, setTotalCarrito] = useState (0)

  useEffect(() => { // para consumir la api q voy a hacer con json db
    setProducts(array)
    }, [])
  
  const handleAddCart = (id) => {
  // aqui va a ir toda la logica del cargado del producto al carrito
    const productoACart = products.find(p => p.id === id)
    setProductCart(productsCart.concat(productoACart))
    
  // unificacion de objetos iguales y suma de un total
    setTotalCarrito(totalCarrito + productoACart.price)
  //disminucion de stock de porducto
  }
  //console.log(productCart)
 console.log(totalCarrito)
    return (
    <>
          <div>
          {array.map(producto => <Producto key={producto.id + producto.name} props={producto} handleAddCart={() => handleAddCart(producto.id) }/>)}
          </div>
          
            <div>
          <Cart productsCart={productsCart} totalCarrito={ totalCarrito} />
          </div>
    </>
  )
}
