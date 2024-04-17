import React from 'react';

const PatientCard = ({ temperature, color }) => {
  return (
    <div className="card text-white patient-card" style={{ maxWidth: '18rem', backgroundColor: color }}>
      <div className="close-icon">&#10006;</div>
      <div className="card-body">
        <div className="circle">
          <h2 className='card-heading'>{temperature}</h2>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
