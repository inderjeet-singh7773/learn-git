import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Book from './pages/Book';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PaymentPage from './pages/PaymentPage';
import { useAuth } from './context/AuthContext';

const Protected = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}
const AdminOnly = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role !== 'admin') return <Navigate to="/" />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book" element={<Protected><Book /></Protected>} />
      <Route path="/payment/:id" element={<Protected><PaymentPage /></Protected>} />
      <Route path="/" element={<Protected><UserDashboard /></Protected>} />
      <Route path="/admin" element={<AdminOnly><AdminDashboard /></AdminOnly>} />
    </Routes>
  );
}
