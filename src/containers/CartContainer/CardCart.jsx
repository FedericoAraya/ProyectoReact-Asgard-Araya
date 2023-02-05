import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import { BsTrash } from "react-icons/bs";
import "./styles.css"

const CardCart = ({product}) => {

  const {eliminarProducto} = useContext(Shop);

  return (
    <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img src={product.imagenProducto} alt={product.nombreProducto}/>
    <small className="text-muted achicarId">{product.id}</small>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.nombreProducto}</h5>
        <div className='d-flex flex-row fila3'>
        <p className="card-text">${product.precio} </p>
        <button className='btn btn-ligth ' onClick={()=> eliminarProducto(product.id)}> <BsTrash/> </button>
        </div>
        <p className="card-text"><small className="text-muted">Cantidad:{product.quantity} </small></p>
      </div>
    </div>
  </div>
</div>

  )
}

export default CardCart