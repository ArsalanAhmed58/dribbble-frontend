
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
export function PublicRoute() {
  const token = localStorage.getItem('user');
  const img = localStorage.getItem('image');
  if (!token) {
    return <Outlet />;
  } else if(!token && !img) {
    return <Navigate to="/profile-creation" />;
  } else if(token && img) {
    return <Navigate to="/home" />;
  }
}
