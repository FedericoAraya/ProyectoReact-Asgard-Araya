import React, { useContext, useState } from "react";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import OffCanvasCart from "../../containers/OffCanvasCart";


const ItemDetail = ({ detail }) => {
  const [quantity, setQuantity] = useState(0);

  const { addProduct } = useContext(Shop);

  const onAdd = (cantidad) => {
    setQuantity(cantidad);
    addProduct({ ...detail, quantity: cantidad });
  };

  return (
    <>
      <div className="detalle">
        <div className="primerNivel">
          <img
            variant="top"
            src={detail.imagenProducto}
            alt={detail.nombreProducto}
          />
          <div className="datos">
            <h2>{detail.nombreProducto}</h2>
            <h5>${detail.precio}</h5>
            {quantity === 0 ? (
              <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} />
            ) : (
              
               <OffCanvasCart widget={false} />
              
            )}
          </div>
        </div>
        <div className="descripcion">
          <span> {detail.descripcion} </span>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
