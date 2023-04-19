import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { isbn13, image, price, title } = service;
  const navigate = useNavigate();

  const handleGoServiceDetails = () => {
    navigate(`/service/${isbn13}`);
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={image} alt={isbn13} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleGoServiceDetails} className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;