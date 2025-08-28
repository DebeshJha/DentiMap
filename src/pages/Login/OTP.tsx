import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const OTP: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const { toast } = useToast();

  

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      if (value && index < 4) {
        const next = document.getElementById(`otp-${index + 1}`);
        if (next) next.focus();
      }
    }
  };

  const handleResendOTP = async () => {
    const userdata = JSON.parse(localStorage.getItem("PendingUser") || "{}");
    
    if (!userdata.email) {
      toast({
        title: "No pending registration",
        description: "Please sign up again.",
        variant: "destructive",
        duration: 3000,
      });
      navigate("/signup");
      return;
    }

    setIsResending(true);
    
    try {
      console.log("Resending OTP to:", userdata.email);
      const response = await fetch("http://localhost:8080/api/auth/resend-registration-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: userdata.email
        }),
      });

      console.log("Resend response status:", response.status);
      const res = await response.json();
      console.log("Resend response:", res);

      if (res.success) {
        toast({
          title: "OTP sent",
          description: "A new OTP has been sent to your email.",
          duration: 3000,
        });
        setCode(["", "", "", "", ""]);
      } else {
        toast({
          title: "Resend failed",
          description: res.message || "Failed to resend OTP.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (e) {
      console.log("Resend OTP error", e);
      toast({
        title: "Resend failed",
        description: "Failed to resend OTP. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsResending(false);
    }
  };

  const handleVerify = async () => {
    const otpcode = code.join("");

    if(otpcode.length!==5){
        toast({
          title: "Invalid OTP",
          description: "Please enter the 5-digit code.",
          variant: "destructive",
          duration: 3000,
        });
        return;
    }

    const userdata = JSON.parse(localStorage.getItem("PendingUser") || "{}");

    
    if (!userdata.email) {
        toast({
          title: "No pending registration",
          description: "Please sign up again.",
          variant: "destructive",
          duration: 3000,
        });
        navigate("/signup");
        return;
    }

    const payload = {
        firstName: userdata.firstName,
        lastName: userdata.lastName,
        dateOfBirth: userdata.dateofBirth, 
        gender: userdata.gender,
        email: userdata.email,
        password: userdata.password,
        confirmPassword: userdata.confirmPassword,
        otp: otpcode
    };

    console.log("Sending verification payload:", payload);
    setIsLoading(true);

    try{
        const response = await fetch("http://localhost:8080/api/auth/verify-registration-otp",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(payload),
        });

        console.log("Verification response status:", response.status);
        const res = await response.json();
        console.log("Verification response:", res);

        if(res.success){
            console.log("Registration was successful");
            localStorage.removeItem("PendingUser");
            toast({
              title: "Registration complete",
              description: "Please login.",
              duration: 3000,
            });
            navigate("/login");
        }else{
            toast({
              title: "Verification failed",
              description: res.message || "OTP Verification failed.",
              variant: "destructive",
              duration: 3000,
            });
        }

    }catch(e){
        console.log("OTP error",e);
        toast({
          title: "Verification error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
          duration: 3000,
        });
    } finally {
        setIsLoading(false);
    }

  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="bg-card shadow-md rounded-lg p-8 w-full max-w-md text-center">
                  <h2 className="text-2xl font-bold mb-2 text-foreground">Email Verification</h2>
        <p className="mb-6 text-gray-600">
          Enter the 5-digit verification code that was sent to your Email.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {code.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              disabled={isLoading}
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          disabled={isLoading}
          className={`w-full font-semibold py-2 px-6 rounded cursor-pointer ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isLoading ? 'Verifying...' : 'Verify Account'}
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Didn't receive code?{' '}
          <span 
            className={`cursor-pointer ${
              isResending 
                ? 'text-gray-400' 
                : 'text-blue-600 hover:underline'
            }`}
            onClick={!isResending ? handleResendOTP : undefined}
          >
            {isResending ? 'Sending...' : 'Resend'}
          </span>
        </p>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default OTP;