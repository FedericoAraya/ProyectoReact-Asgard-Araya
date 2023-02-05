import React, { useContext, useState } from 'react'
import CardCart from './CardCart'
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import FormContainer from '../FormContainer';
import Swal from 'sweetalert2';



const Cart = () => {
 

  const {products,total, vaciarCarrito, dataComprador} = useContext(Shop);
  
  const [loader, setLoader] = useState(false);

  const finalizarCompra = async () => {


   
     try {
      setLoader(true);  
      const order = generateOrderObject({
        nombre: dataComprador[0],
        apellido: dataComprador[1],
        email: dataComprador[2],
        telefono: dataComprador[3],
        cart: products,
        total: total(),
      })
  
        

      const docRef = await addDoc(collection(db, "orders"), order);
      vaciarCarrito()
      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }
      Swal.fire(
        'Felicitaciones!',
        "Su número de orden es: " + docRef.id,
        'success'
      )
      
      } catch (error) {
     
    } finally {
      setLoader(false);
    }
  }

  return (
   <>
      {
        products.length !== 0 ?
        <>
          {products.map(product => {
                return <CardCart key={product.id} product={product}/>
              })}         
          {
            loader ?
            <h2>Cargando ... </h2>
            :
            <>
            <h4 className="text-end">Total = {total()}</h4>
            <div>            
            <FormContainer finalizarCompra={finalizarCompra}/>            
            <button className='btn btn-ligth' onClick={()=> vaciarCarrito() }>Vaciar Carrito</button>
            </div>
            </>
          }
        </>
        :
        <>
          <h3>No hay productos en el carrito.</h3>
          <button className='btn btn-primary'> 
            <Link to = "/">Tienda</Link>
          </button>
        </>
      }
     
      </>
  )
}

export default Cart