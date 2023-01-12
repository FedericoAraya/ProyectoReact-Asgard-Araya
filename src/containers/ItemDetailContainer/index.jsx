import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import productos from "../../data/data.json";





const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise((acc, rec) => {
      setTimeout(() => {
        acc(productos);
      }, 2000);
    });
    promesa
      .then((result) => {
           const detalleDeProductoSeleccionado = result.find((producto)=> producto.idProd === Number(id) )
           
        setDetail(detalleDeProductoSeleccionado);
        
        })
      .catch((err) => {
        alert("no se pudo traer el array");
      });
  }, [id]);

  return (
    <div>
            <ItemDetail detail={detail} />
    </div>
  );

};


export default ItemDetailContainer;
