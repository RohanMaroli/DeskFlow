
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  requireAuth?: boolean;
  requiredRoles?: string[];
};

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  requireAuth = false,
  requiredRoles = []
}) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-flowdesk-300 mb-4"></div>
          <div className="h-4 w-24 bg-flowdesk-200 rounded"></div>
        </div>
      </div>
    );
  }

  // Redirect unauthenticated users
  if (requireAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check for role-based access restrictions
  if (
    requireAuth && 
    user && 
    requiredRoles.length > 0 && 
    !requiredRoles.includes(user.role)
  ) {
    // Redirect to dashboard or another appropriate page if user doesn't have required role
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
