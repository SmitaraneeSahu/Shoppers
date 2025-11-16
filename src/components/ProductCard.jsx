import React, { useEffect, useState } from 'react'
// import {useCart} from '../context/CartContext';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {add, remove} from '../store/cartSlice';

export default function ProductCard({product}) {
  // const {addToCart, cartList, removeFromCart} = useCart();
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList);
  const {id, name, price,image } = product;
  
  const [isInCart, setIsInCart] = useState(false);
  useEffect(()=>{
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);
    if (productIsInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
  },[cartList,id])

  return (
    <div className='productCard'>
        <img src={image} alt='productimage'/>
        <p className='name'>{name}</p>
        <div className='action'>
            <p>${price}</p>
            {/* {isInCart ? (<button onClick={()=> removeFromCart(product)} className='remove'>Remove</button>) :
             (<button onClick={()=> addToCart(product)} >Add to cart</button>) } */}
             {isInCart ? (<button onClick={()=> dispatch(remove(product))} className='remove'>Remove</button>) :
             (<button onClick={()=> dispatch(add(product))} >Add to cart</button>) }
        </div>
    </div>
  )
}
