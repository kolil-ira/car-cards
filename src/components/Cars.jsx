import React from 'react';
import './Cars.css';

function Cars({ Car_data }) {
  return (
    <>
      <div className="card-container">
        <div className="card-img">
          <img src={Car_data.img} alt={Car_data.name} height={100} width={100} />
        </div>
        <div className="card-info">
          <h2>Name: {Car_data.name}</h2>
          <h2>Brand: {Car_data.make}</h2>
          <h2>Color: {Car_data.color}</h2>
          <h2>Year: {Car_data.year}</h2>
        </div>
      </div>
    </>
  );
}

export default Cars;
