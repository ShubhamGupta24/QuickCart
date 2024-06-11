import React, { useEffect } from 'react'
import { useCartContext } from "../Context/CartContext";
import { useNavigate } from 'react-router-dom';

export const Success = () => {
  const { clearCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
    navigate('/');
  })
  return (
    <div>success</div>
  )
}
