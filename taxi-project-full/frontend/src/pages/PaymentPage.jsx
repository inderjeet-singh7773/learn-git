import React from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

export default function PaymentPage(){
  const { id } = useParams();

  const pay = async () => {
    const { data: order } = await API.post('/payments/create-order', { bookingId: id, amount: 100 });
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'VSR TAXI',
      order_id: order.id,
      handler: async (res) => {
        await API.put(`/driver/bookings/${id}/complete`, { payment: res, finalFare: 100 });
        alert('Payment success');
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (<div className="container"><h2>Pay for booking {id}</h2><button onClick={pay}>Pay</button></div>);
}
