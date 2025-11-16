import { useContext, useReducer } from "react";
import { createContext } from "react"; 
import { cartReducer } from "../reducer/cartReducer";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState);

export function CartProvider({children}){
    const [state, dispatch] = useReducer(cartReducer,initialState);

    function addToCart(product){
        const updatedCartList = state.cartList.concat(product);
        updateTotal(updatedCartList);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products : updatedCartList
            }
        })
    }

    function removeFromCart(product){
        const updatedCartList = state.cartList.filter(p => p.id !== product.id);
        updateTotal(updatedCartList);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }
    function updateTotal(products){
        let total = 0;
        products.forEach(product => total= total+ product.price);
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })
    }
    const value={
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    };
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}