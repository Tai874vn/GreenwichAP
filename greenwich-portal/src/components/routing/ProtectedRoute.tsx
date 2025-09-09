'use client';

import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { ROUTES, PUBLIC_ROUTES, ROLE_ROUTES } from '@/constants/routes';
import { UserRole } from '@/types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  allowedRoles?: UserRole[];
}

export function ProtectedRoute({ 
  children, 
  requiredRole, 
  allowedRoles 
}: ProtectedRouteProps) {
  const location = useLocation();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  // Check if current route is public
  const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname);

  // If it's a public route, allow access
  if (isPublicRoute) {
    return <>{children}</>;
  }

  // If not authenticated and not a public route, redirect to login
  if (!isAuthenticated || !user) {
    return (
      <Navigate 
        to={ROUTES.AUTH.LOGIN} 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }

  // Check role-based access
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={ROUTES.ERROR.FORBIDDEN} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={ROUTES.ERROR.FORBIDDEN} replace />;
  }

  // Check if user has access to current route based on their role
  const userAllowedRoutes = ROLE_ROUTES[user.role] || [];
  const hasRouteAccess = userAllowedRoutes.some(route => {
    // Handle dynamic routes
    if (route.includes(':')) {
      const routePattern = route.replace(':id', '[^/]+');
      const regex = new RegExp(`^${routePattern}$`);
      return regex.test(location.pathname);
    }
    return location.pathname.startsWith(route);
  });

  if (!hasRouteAccess) {
    return <Navigate to={ROUTES.ERROR.FORBIDDEN} replace />;
  }

  return <>{children}</>;
}

// HOC for protecting routes
export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  options?: {
    requiredRole?: UserRole;
    allowedRoles?: UserRole[];
  }
) {
  return function AuthenticatedComponent(props: P) {
    return (
      <ProtectedRoute {...options}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };
}