import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export const Cancel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    alert("Your Payment is Cancelled");
    navigate('/Cart');
  })
  return (
    <div>

    </div>
  )
}
