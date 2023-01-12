import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import productos from "../../data/data.json";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams()

    useEffect(() => {
    const promesa = new Promise((acc, rec) => {
      setTimeout(() => {
        acc(productos);
        return acc
      }, 2000);
    });

    promesa
      .then((products) => {
        if (categoryId){
        const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
        setProducts(productosFiltradosPorCategoria);
      }else{
        setProducts(products)
      }
      })
      .catch((err) => {
        alert("no se pudo traer el array");
      });
  }, [categoryId]);

  return (
    <>
      <div className="greeting-container">
        <h1>{greeting}</h1>
      </div>      
      <ItemList productos={products} />      
    </>
  );
};

export default ItemListContainer;
