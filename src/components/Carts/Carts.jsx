import React from 'react';
import Cart from '../Cart/Cart';

const Carts = ({ carts }) => {
  return (
    <div className='col-span-1 flex flex-col gap-2 overflow-y-auto  h-[calc(100vh-112px)]'>
      {
        carts.map(cart => <Cart
          key={cart.id}
          cart={cart}
        ></Cart>)
      }
    </div>
  );
};

export default Carts;