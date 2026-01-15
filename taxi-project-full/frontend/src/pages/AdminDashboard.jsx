import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function AdminDashboard(){
  const [bookings,setBookings] = useState([]);

  const load = async () => { const r = await API.get('/admin/bookings'); setBookings(r.data); }
  useEffect(()=>{ load(); },[]);

  const updateStatus = async (id,status) =>{ await API.put(`/admin/booking/${id}/status`, { status }); await load(); }

  return (
    <div className="container">
      <h2>Admin — All Bookings</h2>
      <table border={1} cellPadding={8}>
        <thead><tr><th>User</th><th>Pickup</th><th>Drop</th><th>Fare</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {bookings.map(b=> (
            <tr key={b._id}>
              <td>{b.userId?.name} ({b.userId?.email})</td>
              <td>{b.pickup?.address}</td>
              <td>{b.drop?.address}</td>
              <td>{b.estimatedFare}</td>
              <td>{b.status}</td>
              <td>
                {b.status === 'PENDING' && (
                  <>
                    <button onClick={()=>updateStatus(b._id,'CONFIRMED')}>Confirm</button>
                    <button onClick={()=>updateStatus(b._id,'REJECTED')}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
