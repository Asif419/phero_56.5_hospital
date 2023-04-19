import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ServiceDetails = () => {
  const service = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  const handleGoToServices = () => {
    navigate(`/services`);
  }
  const { title, subtitle, language, pages, price } = service;
  console.log(service);
  return (
    <div className='hospitalContainer flex flex-col'>
      <div className="mx-auto card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{subtitle}</p>
          <div className="flex justify-between items-center pt-10 card-actions">
            <p>Price: {price}</p>
            <button className="btn">Take Now</button>
          </div>
        </div>
      </div>
      <div className='mx-auto pt-5'>
        <button onClick={handleGoToServices} className='btn btn-primary'>Services</button>
      </div>
    </div>
  );
};

export default ServiceDetails;