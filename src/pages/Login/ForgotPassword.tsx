import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset email sent successfully! Please check your email.');
        toast({
          title: 'Email sent',
          description: 'Check your inbox for the OTP to reset your password.',
          duration: 3000,
        });
        setTimeout(() => {
          navigate('/forgot-password-otp', { state: { email } });
        }, 2000);
      } else {
        setError(data.message || 'Failed to send password reset email');
        toast({
          title: 'Request failed',
          description: String(data.message || 'Failed to send password reset email'),
          variant: 'destructive',
          duration: 3000,
        });
      }
    } catch (err) {
      setError('Network error. Please try again.');
      toast({
        title: 'Network error',
        description: 'Please try again.',
        variant: 'destructive',
        duration: 3000,
      });
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full space-y-8 text-center">
                  <h2 className="text-3xl font-bold text-foreground">Forgot your password ?</h2>

        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {message}
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <input
              type="email"
              name="email"
              placeholder="your-sign-up-email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-400 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition duration-200 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Request password reset'}
          </button>
        </form>

        <div>
          <button 
            className="text-sm text-blue-500 hover:text-blue-600 hover:cursor-pointer" 
            onClick={() => navigate("/login")}
            disabled={isLoading}
          >
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;