import React, { useState } from 'react';
import API from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login(){
  const { setToken } = useAuth();
  const nav = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [err,setErr] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await API.post('/auth/login',{ email,password });
      setToken(res.data.token);
      const payload = JSON.parse(atob(res.data.token.split('.')[1]));
      if (payload.role === 'admin') nav('/admin'); else nav('/');
    }catch(err){ setErr(err.response?.data?.message || 'Login failed'); }
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /> <br />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /> <br />
        <button>Login</button>
      </form>
      <p>{err}</p>
      <p>New? <Link to="/register">Register</Link></p>
    </div>
  )
}
