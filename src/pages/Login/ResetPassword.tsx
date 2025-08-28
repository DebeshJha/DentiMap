import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useToast } from '@/hooks/use-toast';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    
    const stateEmail = location.state?.email;
    const stateOtp = location.state?.otp;
    
    if (!stateEmail || !stateOtp) {
      navigate('/forgot-password');
      return;
    }
    
    setEmail(stateEmail);
    setOtp(stateOtp);
  }, [location, navigate]);

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      toast({
        title: 'Invalid password',
        description: passwordError,
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and confirm password do not match');
      toast({
        title: 'Mismatch',
        description: 'Password and confirm password do not match',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          otp: otp,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset successfully! Redirecting to login...');
        toast({
          title: 'Password reset',
          description: 'Your password has been reset successfully.',
          duration: 3000,
        });
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError(data.message || 'Failed to reset password');
        toast({
          title: 'Reset failed',
          description: String(data.message || 'Failed to reset password'),
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
                  <h2 className="text-3xl font-bold text-foreground">Reset Your Password</h2>
        <p className="text-sm text-gray-600">Enter your new password below</p>

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
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left mb-1">
                New Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                minLength={6}
              />
              <p className="text-xs text-gray-500 text-left mt-1">
                Password must be at least 6 characters long
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 text-left mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black pr-10"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-black"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-400 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition duration-200 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
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

export default ResetPassword;