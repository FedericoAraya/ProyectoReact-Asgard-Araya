import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import "./styles.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams()

    useEffect(() => {
      let querySnapshot;
      const getProducts = async () => {
        if (categoryId){
      const q = query(collection(db, "products"), where("category", "==", categoryId));
      querySnapshot = await getDocs(q);
         } else{
          querySnapshot = await getDocs(collection(db, "products"));
         }
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
        
        const product ={
          id: doc.id,
          ...doc.data()
        }
        productosFirebase.push(product)
      });
      setProducts(productosFirebase)
    }
    getProducts();


  }, [categoryId]);
  
  return (
    
      <ItemList productos={products} />      
   
  );
};

export default ItemListContainer;
