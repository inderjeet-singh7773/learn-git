import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';
import { onBookingUpdated } from '../services/socket';

export default function UserDashboard(){
  const [bookings,setBookings] = useState([]);

  useEffect(()=>{ const load = async()=>{ const r = await API.get('/bookings/user'); setBookings(r.data);} ; load(); },[]);

  useEffect(()=>{
    const cb = (booking) => { setBookings(prev => prev.map(b => (b._id === booking._id ? booking : b))); };
    onBookingUpdated(cb);
    return () => {};
  },[]);

  return (
    <div className="container">
      <h2>My Bookings</h2>
      <Link to="/book">Create Booking</Link>
      <ul>
        {bookings.map(b=> (
          <li key={b._id}>{b.pickup.address} → {b.drop.address} — {b.status} {b.status === 'CONFIRMED' && b.driverId ? `(Driver assigned)` : ''}</li>
        ))}
      </ul>
    </div>
  )
}
