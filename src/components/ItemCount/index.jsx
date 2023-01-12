import "./styles.css";
import { useEffect, useState } from "react";



const ItemCount = ( {detail} ) => {
  const [stock, setStock] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
  setStock(Number(detail.stock))
}, [detail]);

  const sumarContador = () => {
    if (stock > 0) {
      setCantidad(cantidad + 1);
      setStock(stock - 1);
    } else {
      alert("No disponemos de mas stock en este momento");
    }
  };

  const restarContador = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      setStock(stock + 1);
    }
  };

  const onAdd = () => {
    if (cantidad === 1) {
      alert("Fue agregado " + [cantidad] + " producto al carrito.");
    } else if (cantidad > 1) {
      alert("Fueron agregados " + [cantidad] + " productos al carrito.");
    }
  };

  return (
    <>
      <div className="contador">
        <button onClick={restarContador} className="modificarContador p-1">
          -
        </button>
        <span className="p-1">{cantidad}</span>
        <button onClick={sumarContador} className="modificarContador p-1">
          +
        </button>
      </div>
      <button onClick={onAdd} className="onAdd">
        <span>Agregar al carrito </span>
      </button>
    </>
  );
};

export default ItemCount;

