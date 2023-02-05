import React, { useState } from "react";
import "./styles.css";



const ItemCount = ( {onAdd, stock, initial } ) => {
  const [count, setCount] = useState(initial);

  const sumarContador = () => {
    if (count < stock) setCount(count + 1);
  };

  const restarContador = () => {
    if (count > initial) setCount(count - 1);
  };

   return (
    <div className="itemCount">
      <div className="contador">
        <button onClick={restarContador} className="modificarContador p-1">
          -
        </button>
        <span className="p-1">{count}</span>
        <button onClick={sumarContador} className="modificarContador p-1">
          +
        </button>
      </div>
      <button onClick={ () => onAdd(count) } className="onAdd">
       <span>Agregar al carrito </span>
      </button>
      </div>
   
  );
};

export default ItemCount;

