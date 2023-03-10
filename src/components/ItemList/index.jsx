import React from 'react'
import Item from '../Item'
const ItemList = ({productos}) => {

  return (
    <div className="items-container">
        {productos.map(producto => {
          
           return <Item product={producto} key={producto.id}/>
        })}
    </div>
  )
}

export default ItemList