import React from 'react';
import './AddressCard.css';

interface AddressCardProps {
  name: string;
  ipAddress: string;
  date: Date;
  status: string
}

function AddressCard({ name, ipAddress, date, status }: AddressCardProps) {
  return (
    <div className="address-card">
      <div>
        <h4>{name}</h4>
        <p>{ipAddress} </p>
        <p>{date.toISOString()} </p>
      </div>
      <div>
        <span>{status} </span>
      </div>
    </div>
  );
}

export default AddressCard;
