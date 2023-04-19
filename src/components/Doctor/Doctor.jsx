import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';

const Doctor = ({ doctor, handleCarts }) => {
  const { name, email, phone, id } = doctor;
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <div className="card-actions">
          <Link to={`/doctor/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
            <button onClick={() => handleCarts(id)} className="btn btn-primary">Add for Visit</button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;