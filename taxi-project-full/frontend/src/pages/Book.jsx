import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Book(){
  const [pickup,setPickup] = useState('');
  const [drop,setDrop] = useState('');
  const [carType,setCarType] = useState('Mini');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const body = { pickup: { address: pickup }, drop: { address: drop }, distanceKm: 5, estimatedFare: 100, carType };
    try{
      const res = await API.post('/bookings', body);
      alert('Booking created');
      nav('/');
    }catch(err){ alert('Error creating booking'); }
  }

  return (
    <div className="container">
      <h2>Book a Ride</h2>
      <form onSubmit={submit}>
        <input placeholder="Pickup address" value={pickup} onChange={e=>setPickup(e.target.value)} /><br />
        <input placeholder="Drop address" value={drop} onChange={e=>setDrop(e.target.value)} /><br />
        <select value={carType} onChange={e=>setCarType(e.target.value)}>
          <option>Mini</option>
          <option>Sedan</option>
          <option>SUV</option>
        </select><br />
        <button>Book</button>
      </form>
    </div>
  )
}
