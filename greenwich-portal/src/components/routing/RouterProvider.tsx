'use client';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { generateRoutes } from '@/routes';

export function RouterProvider() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const getDashboardRoute = () => {
    if (!user) return '/auth/login';
    
    switch (user.role) {
      case 'student':
        return '/student/dashboard';
      case 'teacher':
        return '/teacher/dashboard';
      case 'staff':
        return '/staff/dashboard';
      case 'admin':
        return '/admin/dashboard';
      case 'parent':
        return '/parent/dashboard';
      default:
        return '/auth/login';
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Root redirect */}
        <Route 
          path="/" 
          element={<Navigate to={getDashboardRoute()} replace />} 
        />
        
        {/* Generated routes from configuration */}
        {generateRoutes()}
        
        {/* Catch all - redirect to 404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}