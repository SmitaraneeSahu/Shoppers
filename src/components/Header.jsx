import React from 'react'
import logo from '../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
import { useSelector } from 'react-redux';

export default function Header() {
  // const {cartList} = useCart();
  const cartList = useSelector(state=> state.cartState.cartList);
  return (
    <header>
        <Link to="/" className='logo'>
            <img src={logo} alt='logo'/>
            <span>SHOPPERS</span>
        </Link>
        <nav className='navigation'>
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>
        <Link to="/cart">
            <span>Cart: {cartList.length}</span>
        </Link>
    </header>
  )
}
