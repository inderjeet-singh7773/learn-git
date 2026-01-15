import React, { useState } from 'react';
import API from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const { setToken } = useAuth();
  const nav = useNavigate();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [phone,setPhone]=useState('');

  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/register',{ name,email,password,phone });
    setToken(res.data.token);
    nav('/');
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br />
        <input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} /><br />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br />
        <button>Register</button>
      </form>
    </div>
  )
}
