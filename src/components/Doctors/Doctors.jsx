import React, { createContext, useContext, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';
import Carts from '../Carts/Carts';
import { toast } from 'react-toastify';
import { CartContext } from '../Layout/Main';
import Loading from '../Loading/Loading';


const Doctors = () => {
  const doctors = useLoaderData();
  const [carts, setCarts] = useContext(CartContext);
  const navigation = useNavigation();

  if(navigation.state === 'loading'){
    return <Loading></Loading>
  }

  const handleCarts = (id) => {
    const isExist = carts.find(cart => cart.id === id);
    if (!isExist) {
      const newCart = doctors.find(doctor => doctor.id === id);
      setCarts([...carts, newCart]);
    }
    else {
      toast("You have already added")
    }
  }

  return (
    <CartContext.Provider value={[carts, setCarts]}>
      <div className='hospitalContainer grid grid-cols-1 md:grid-cols-5 gap-2'>
        <div className='col-span-4 grid grid-cols-1 md:grid-cols-4 gap-2'>
          {
            doctors.map(doctor => <Doctor
              key={doctor.id}
              doctor={doctor}
              handleCarts={handleCarts}
            ></Doctor>)
          }
        </div>
        <Carts
          carts={carts}
        ></Carts>
      </div>
    </CartContext.Provider>
  );
};

export default Doctors;