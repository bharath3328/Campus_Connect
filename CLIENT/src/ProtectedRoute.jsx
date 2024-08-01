import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useUser();

  return allowedRoles.includes(user.role) ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
