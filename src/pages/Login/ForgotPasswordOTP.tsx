import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ForgotPasswordOTP: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    
    const stateEmail = location.state?.email;
    const urlParams = new URLSearchParams(window.location.search);
    const urlEmail = urlParams.get('email');
    
    setEmail(stateEmail || urlEmail || '');
    
    if (!stateEmail && !urlEmail) {
      
      navigate('/forgot-password');
    }
  }, [location, navigate]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 4) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    
    if (enteredOtp.length !== 5) {
      setError('Please enter the complete 5-digit OTP');
      toast({
        title: 'Invalid OTP',
        description: 'Please enter the complete 5-digit code.',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('https://map.paninsight.org/api/auth/verify-reset-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          otp: enteredOtp, 
          email: email 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('OTP verified successfully! Redirecting to password reset...');
        toast({
          title: 'OTP verified',
          description: 'Redirecting to reset your password...',
          duration: 3000,
        });
        setTimeout(() => {
          navigate('/reset-password', { 
            state: { 
              email: email,
              otp: enteredOtp 
            } 
          });
        }, 2000);
      } else {
        setError(data.message || 'Invalid OTP. Please try again.');
        toast({
          title: 'Verification failed',
          description: String(data.message || 'Invalid OTP. Please try again.'),
          variant: 'destructive',
          duration: 3000,
        });
        setOtp(['', '', '', '', '']);
        inputsRef.current[0]?.focus();
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

  const handleResendOTP = async () => {
    if (!email) {
      setError('Email not found. Please go back to forgot password page.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://map.paninsight.org/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('New OTP sent successfully! Please check your email.');
        setOtp(['', '', '', '', '']);
        inputsRef.current[0]?.focus();
      } else {
        setError(data.message || 'Failed to resend OTP');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditEmail = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full space-y-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground">Enter the 5-digit OTP</h2>
        <p className="text-sm text-gray-600">We've sent it to {email}</p>

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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => { inputsRef.current[index] = el }}
                required
                disabled={isLoading}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-400 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <div className="space-y-4">
          <button
            onClick={handleResendOTP}
            disabled={isLoading}
            className="text-sm text-blue-400 hover:text-blue-600 mt-4 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Resend OTP'}
          </button>
          
          <div>
            <button
              onClick={handleEditEmail}
              disabled={isLoading}
              className="text-sm text-blue-400 hover:text-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Edit email address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordOTP;