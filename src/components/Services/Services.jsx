import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Service from '../Service/Service';

import Loading from '../Loading/Loading';

const Services = () => {
  const [price, setPrice] = useState(false);
  const data = useLoaderData();
  const services = data.books;

  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <Loading></Loading>;
  }

  return (
    <div className='grid grid-cols-1 hospitalContainer'>
      <div className='flex gap-2 justify-center items-center'>
        <button onClick={() => setPrice(!price)} className='btn btn-primary'>Under $50</button>
        <button onClick={() => setPrice(!price)} className='btn btn-primary'>Above $50</button>
      </div>

      {price ? (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
          {
            services.map(service => {
              const price = service.price;
              const newPrice = price.replace('$', '');
              if (newPrice < 50) {
                return (
                  <Service
                    key={service.isbn13}
                    service={service}
                  ></Service>
                )
              }
            })
          }
        </div>
      ) :
        (<div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
          {
            services.map(service => {
              const price = service.price;
              const newPrice = price.replace('$', '');
              if (newPrice >= 50) {
                return (
                  <Service
                    key={service.isbn13}
                    service={service}
                  ></Service>
                )
              }
            })
          }
        </div>)
      }

    </div>
  );
};

export default Services;