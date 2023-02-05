import React, { useContext } from 'react'
import {IoCartOutline} from "react-icons/io5"
import { Shop } from '../../context/ShopProvider'

import "./styles.css"

const CartWidget = () => {

const {countCart} = useContext(Shop)



  return (
    <>             
    <IoCartOutline style={{height: 35 , width: 35}}/> 
    <span className='volumenCart'>{countCart()} </span>    
    </>
     )
}

export default CartWidget