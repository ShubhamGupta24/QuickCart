import React from 'react';
import { useNavigate } from "react-router-dom";
import { useCartContext } from '../Context/CartContext';
import { MdDelete } from "react-icons/md";
import PriceParser from '../Helpers/PriceParser';
import FormatPrice from '../Helpers/FormarPrice';
import { useAuth } from "../storeToken/auth";
import axios from "axios";
import { FaCartPlus } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js"
import "./Product.css"

export const Cart = () => {
  const { cart, totalAmount, totalSize, setIncrement, setDecrement, deleteItem, clearCart } = useCartContext();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  if (cart.length === 0) {
    return (<div className='Products cart empty'>
      <FaCartPlus size={300} opacity={0.3} />
      <h3>YOUR CART IS EMPTY</h3>
      <button className='continue' onClick={() => navigate("/Categories")}>Continue Shopping</button>
    </div>);
  }

  const handleProceedBuying = async () => {
    const stripe = await loadStripe("pk_test_51PJbN4SBPKOqa8UPLP58BXlQqDjecQZJ990ntdzOpLXrTEqFsEU3EYGDok2CcqU9PVLIyRNkbaOLLalQ50N5BSwq00WDqijBVC");

    try {
      const res = await axios.post(process.env.REACT_APP_PAYMENT_CONNECT_API, cart);
      const session = await res.data;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });
      if (result.error) {
        console.log(result.error.message);
      }
    } catch (error) {
      console.log("Error from Cart", error);
    }
  };



  return (
    <div className='Products'>
      <div>
        <button className='clear' onClick={() => navigate("/Categories")}>
          CONTINUE SHOPPING
        </button>
        <button className='clear all' onClick={clearCart}>
          CLEAR CART
        </button>
      </div>
      <div className="cart">
        <h1>Shopping Cart</h1>
        <hr />
        {cart.map((item) => (
          <>
            <div key={item.id} className='cart_card'>
              <div className='image'>
                <img className='image_tag' src={item.image} alt={item.Brand} />
              </div>
              <div>
                <div><span>{item.Brand}</span></div>
                {item.Description && <div><span>Description</span>: {item.Description}</div>}
                <div><span>Our Price</span>: {item.SellingPrice}</div>
              </div>
              <div>
                <div className='count'>
                  <button className='add' onClick={() => setDecrement(item.id)}>-</button>
                  <div className='add'>{item.quantity}</div>
                  <button className='add' onClick={() => setIncrement(item.id)}>+</button>
                </div>
              </div>

              <div className="subTotal"><PriceParser amount={item.SellingPrice} quantity={item.quantity} /></div>
              <div>
                <button className='clear' onClick={() => deleteItem(item.id)}>
                  <MdDelete size={20} />
                </button>
              </div>
            </div>
            <hr />
          </>
        ))}
        <div className="bill">
          <h2>Your Bill</h2>
          <hr />
          <div>Total size: {totalSize}</div>
          <div>Total Order: <FormatPrice price={totalAmount} /></div>
          <div>Shipping Fee:<FormatPrice price={50} /></div>
          <hr />
          <div>Order Value:<FormatPrice price={totalAmount + 50} /> </div>
          {!isLoggedIn ? (
            <button onClick={() => navigate('/Login')}>Proceed To Buy</button>
          ) : (
            <>
              <button onClick={() => handleProceedBuying()}>Proceed To Buy</button>
            </>
          )}
        </div>

      </div >
    </div >
  );
};
