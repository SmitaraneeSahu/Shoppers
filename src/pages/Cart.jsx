import React from 'react'
import CartCard from '../components/CartCard'
import useTitle from '../hooks/useTitle'
import { useSelector } from 'react-redux';
// import {useCart} from '../context/CartContext';

export function Cart() {
  // const {total, cartList}= useCart(); 
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);
  useTitle("Cart");
  
  return (
    <main>
      <section className='cart'>
        <div className='cartTop'><h2>Cart items: {cartList.length}</h2>
        <span>Total to Pay: ${total}</span></div>
        {cartList.map((product)=>(
            <CartCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}
