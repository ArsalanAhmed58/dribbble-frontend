import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
export function ProtectedRoute() {
  const token = localStorage.getItem('user');
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
