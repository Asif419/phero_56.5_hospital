import React, { useContext } from 'react';
import { CartContext } from '../Layout/Main';

const Cart = ({ cart }) => {
  const [carts, setCarts] = useContext(CartContext);
  console.log(carts);
  const handleCarts = (cart) => {
    const remainingCarts = carts.filter(ct => ct.id != cart.id);
    setCarts(remainingCarts);
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{cart.name}</h2>
        <div className="card-actions">
          <button onClick={() => handleCarts(cart)} className="btn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;