import React, { useState } from 'react'
import { createContext } from "react";

export const Shop = createContext()


const ShopProvider = ({children}) => {

    const [products , setProducts] = useState([])

    const[ dataComprador , setDataComprador] = useState([])

    const [clienteOk , setClienteOk] = useState(false)

    const addProduct = (product) => {
      const isInCart = isProductInCart(product.id);
      if (isInCart) {
          const productoRepetido = products.find(element => element.id === product.id)
          productoRepetido.quantity += product.quantity
          setProducts([...products])
      } else {
          setProducts([...products, product])
      }
      total()
  }

  const countCart = () => {
      let cantidadTotal = 0;
      for (const product of products) {
          cantidadTotal += product.quantity
      }
      return cantidadTotal
  }

  const isProductInCart = (id) => {
      return products.some(product => product.id === id)
  }

  const total = () => {
      let total = 0;
      for (const product of products) {
          total += product.precio * product.quantity          
      }
      return total
       }
       
       

  const vaciarCarrito = () => {
      setProducts([])
  }

  const eliminarProducto = (id) => {
      const productsFiltered = products.filter(product => product.id !== id);
      setProducts(productsFiltered)
  }

  const traerDataComprador = (datosIngresados) => {
      setDataComprador(datosIngresados)
  }

  const verificarCliente = (clienteVerificado) =>{    
    setClienteOk(clienteVerificado)
  }

  return (
    <Shop.Provider value = {{products,verificarCliente, clienteOk , addProduct, countCart,total, vaciarCarrito, eliminarProducto, traerDataComprador, dataComprador}}>
        {children}
    </Shop.Provider >
  )
}

export default ShopProvider