import React from 'react'
import {IoCartOutline} from "react-icons/io5"
import "./styles.css"

const CartWidget = () => {
  return (
    <>
    <IoCartOutline style={{height: 35 , width: 35}}/> 
    <span className='volumenCart'>2</span>
    </>
     )
}

export default CartWidget