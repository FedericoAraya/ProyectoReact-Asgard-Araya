import React from 'react'
import ItemCount from '../ItemCount';
import './styles.css'


const ItemDetail = ({detail}) => {
 
    return (
        <div className='detalle'>
            <img variant="top" src={ detail.imagenProducto } alt={detail.nombreProducto} />
            <span> {detail.descripcion} </span> 
            
            <ItemCount detail= {detail}/>
        </div>
        
    )

}

export default ItemDetail



