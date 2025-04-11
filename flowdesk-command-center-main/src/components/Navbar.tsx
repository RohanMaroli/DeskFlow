
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MessageSquare, LogOut, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLandingPage = location.pathname === '/';

  return (
    <header className={`w-full ${isLandingPage ? 'absolute top-0 left-0 z-10' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <MessageSquare className="h-8 w-8 text-flowdesk-600 mr-2" />
            <span className="text-xl font-bold gradient-text">FlowDesk</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link 
                to="/" 
                className={`text-sm font-medium ${isLandingPage ? 'text-flowdesk-800' : 'text-gray-600 hover:text-flowdesk-600'} transition-colors`}
              >
                Home
              </Link>
              {user && (
                <Link 
                  to="/dashboard" 
                  className="text-sm font-medium text-gray-600 hover:text-flowdesk-600 transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </nav>

            <div className="flex items-center space-x-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-10 w-10 rounded-full"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="flex items-center text-red-500">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button variant="default" className="bg-flowdesk-600 hover:bg-flowdesk-700">
                    Admin Login
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-flowdesk-600" />
            ) : (
              <Menu className="h-6 w-6 text-flowdesk-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-base font-medium text-gray-600 hover:text-flowdesk-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {user && (
                <Link 
                  to="/dashboard" 
                  className="text-base font-medium text-gray-600 hover:text-flowdesk-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              {!user && (
                <Link 
                  to="/login" 
                  className="text-base font-medium text-flowdesk-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Login
                </Link>
              )}
              {user && (
                <div className="pt-2">
                  <div className="flex items-center space-x-3 pb-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }} 
                    className="flex items-center text-red-500"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
