import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import login from "../../asserts/login.png"
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login: authLogin } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const { toast } = useToast();

  
  useEffect(() => {
    const oauth2Success = searchParams.get('oauth2_success');
    const oauth2Failure = searchParams.get('oauth2_failure');

    if (oauth2Success === 'true') {
      
      handleOAuth2Success();
    } else if (oauth2Failure === 'true') {
      setError("Google login failed. Please try again.");
    }
  }, [searchParams]);

  const handleOAuth2Success = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/auth/oauth2-success", {
        method: "GET",
        credentials: "include"
      });

      const data = await response.json();
      
      if (data.success) {
        console.log("OAuth2 login successful:", data.data);
        
        authLogin({
          id: data.data.user.id,
          firstName: data.data.user.firstName,
          lastName: data.data.user.lastName,
          email: data.data.user.email,
          dateOfBirth: data.data.user.createdAt || new Date().toISOString()
        });
        toast({
          title: "Logged in",
          description: "Google login successful! Welcome!",
          duration: 3000,
        });
        navigate("/");
      } else {
        setError(data.message || "Google login failed.");
      }
    } catch (error) {
      console.error("OAuth2 success handler error:", error);
      setError("Failed to complete Google login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      console.log("Attempting login for:", email);
      
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      console.log("Login response status:", response.status);
      const data = await response.json();
      console.log("Login response:", data);

      if (data.success) {
        console.log("Login successful for:", email);
        authLogin(data.data);
        toast({
          title: "Logged in",
          description: "Login successful! Welcome back.",
          duration: 3000,
        });
        navigate("/");
      } else {
        setError(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side of the Form ra pilla bacha*/}
      <div className="flex-1 flex items-center justify-center bg-white px-6 md:px-12 text-black">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="text-sm text-gray-600">Please enter your details</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 pr-10"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-black"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15}/>}
                </div>
              </div>
            </div>

            
            <div className="flex items-center justify-end text-sm">
              <button 
                type="button"
                className="font-semibold text-blue-500 hover:text-blue-700 transition-all duration-300"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password ?
              </button>
            </div>

            
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-md transition ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>

            
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>

            
            <button
              type="button"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition disabled:opacity-50"
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={20} className="mt-0.5"/>
              Sign in with Google
            </button>

            
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{"  "}
              <span 
                className="font-semibold hover:cursor-pointer text-blue-500 hover:text-blue-600 transition-all duration-300" 
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>

      
      <div className="hidden md:block md:w-[45%] bg-gray-200 blur-sm max-h-screen">
        <img
          src={login}
          alt="Login image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;