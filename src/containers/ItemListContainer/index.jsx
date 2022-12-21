import React from "react";
import ItemCount from "../../components/ItemCount";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className="greeting-container">
        <h1>{greeting}</h1>
      </div>
      <div className="count-container">
      <ItemCount />
      </div>
    </>
  );
};

export default ItemListContainer;
