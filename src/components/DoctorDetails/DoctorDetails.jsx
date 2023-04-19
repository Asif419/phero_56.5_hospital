import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const DoctorDetails = () => {
  const doctor = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div className='hospitalContainer'>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bolder text-5xl">{doctor.name}</h2>
        <p className='text-2xl'>Email: {doctor.email}</p>
        <p className='text-2xl'>Phone: {doctor.phone}</p>
        <div className="card-actions">
          <button onClick={handleGoBack} className="btn btn-primary">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;