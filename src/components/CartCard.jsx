import React from 'react'
// import {useCart } from '../context/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import {remove} from '../store/cartSlice';

export default function CartCard({product}) {
  // const {removeFromCart} = useCart();
  const dispatch = useDispatch();
  const cartList = useSelector(state=> state.cartState.cartList);
  const {id, name, image, price} = product;
  return (
    <div className='cartCard'>
      <img src={image} alt='productimage'/>
      <p className='productName'>{name}</p>
      <p className='productPrice'>${price}</p>
      <button onClick={()=> dispatch(remove(product))}>Remove</button>
    </div>
  )
}
