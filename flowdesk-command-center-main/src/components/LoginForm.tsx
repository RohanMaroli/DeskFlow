
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, MessageSquare } from 'lucide-react';

// Sample login credentials for demo purposes
const DEMO_CREDENTIALS = [
  { role: 'Main Admin', email: 'admin@flowdesk.com' },
  { role: 'Customer Care', email: 'care@flowdesk.com' },
  { role: 'Technical Support', email: 'tech@flowdesk.com' },
  { role: 'Billing Department', email: 'billing@flowdesk.com' },
  { role: 'Logistics Team', email: 'logistics@flowdesk.com' },
];

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = async (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('password'); // Dummy password for demo
    
    setIsSubmitting(true);
    
    try {
      const success = await login(demoEmail, 'password');
      if (success) {
        navigate('/dashboard');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-md">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-flowdesk-100">
            <MessageSquare className="w-7 h-7 text-flowdesk-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
        <p className="text-gray-600 mt-2">Sign in to access your dashboard</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your-email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-flowdesk-600 hover:text-flowdesk-800">Forgot password?</a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-11"
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-flowdesk-600 hover:bg-flowdesk-700 h-11"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Sign in
        </Button>
      </form>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Demo accounts</span>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          {DEMO_CREDENTIALS.map((cred, index) => (
            <Button
              key={index}
              type="button"
              variant="outline"
              className="w-full justify-between text-left font-normal h-auto py-2"
              onClick={() => handleDemoLogin(cred.email)}
              disabled={isSubmitting}
            >
              <span>{cred.role}</span>
              <span className="text-xs text-gray-500">{cred.email}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
