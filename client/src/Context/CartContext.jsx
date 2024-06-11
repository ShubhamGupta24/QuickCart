import React, { createContext, useContext, useReducer, useEffect, useRef } from 'react';
import cartReducer from '../Reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem('cartItem');
    if (!localCartData) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const getLocalProductList = () => {
    let localProductList = localStorage.getItem('productList');
    if (!localProductList) {
        return null;
    } else {
        return JSON.parse(localProductList);
    }
}

const initialState = {
    cart: getLocalCartData(),
    productList: getLocalProductList(),
    category: null,
    subTotal: 0,
    totalAmount: 0,
    totalSize: 0
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const prevCategoryRef = useRef(state.category);

    const setCategory = (newCategory) => {
        dispatch({ type: 'SET_CATEGORY', payload: { category: newCategory } });
    }

    const setProducts = (Products) => {
        console.log('setProducts', Products);
        dispatch({ type: 'SET_PRODUCTS', payload: { Products } });
    }

    const addToCart = (productId) => {
        dispatch({ type: 'ADD_TO_CART', payload: { productId } });
    }

    const setDecrement = (productId) => {
        dispatch({ type: 'SET_DECREMENT', payload: { productId } });
    }

    const setIncrement = (productId) => {
        dispatch({ type: 'SET_INCREMENT', payload: { productId } });
    }

    const deleteItem = (productId) => {
        dispatch({ type: 'DELETE_ITEM', payload: { productId } });
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    useEffect(() => {
        dispatch({ type: "CART_SIZE_PRICE" });
        localStorage.setItem('cartItem', JSON.stringify(state.cart));
        prevCategoryRef.current = state.category;
    }, [state.cart, state.category]);


    return (
        <CartContext.Provider value={{ ...state, setProducts, addToCart, setDecrement, setIncrement, setCategory, deleteItem, clearCart, prevCategory: prevCategoryRef.current }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };
