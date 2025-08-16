import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import { useToast } from "@/hooks/use-toast";


const SignupPage = () => {

  const navigate=useNavigate();
  const { toast } = useToast();

  const [dob,setdob]=useState<Dayjs | null>(null);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if(!dob){
      toast({
        title: "Missing date of birth",
        description: "Please select your Date of Birth.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    if(formData.password !== formData.confirmPassword){
      toast({
        title: "Passwords do not match",
        description: "Password and Confirm Password must be the same.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    if(dob.isAfter(dayjs())){
      toast({
        title: "Invalid date of birth",
        description: "Date of Birth cannot be in the future.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
     

    try{

      const response = await fetch("http://localhost:8080/api/auth/register",{
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          firstName:formData.firstName,
          lastName:formData.lastName,
          email:formData.email,
          gender:formData.gender,
          password:formData.password,
          confirmPassword:formData.confirmPassword,
          dateOfBirth:dob?.format("YYYY-MM-DD")
        })
      });

      const res = await response.json();

      if(res.success){
        localStorage.setItem("PendingUser",JSON.stringify({
          ...formData,
          dateofBirth: dob.format("YYYY-MM-DD")
        }));
        toast({
          title: "Registration started",
          description: "OTP sent to your email. Please verify.",
          duration: 3000,
        });
        navigate("/otp");
      }else{
        toast({
          title: "Registration failed",
          description: String(res.message || "Unable to register"),
          variant: "destructive",
          duration: 3000,
        });
      }

    }catch(e){
      console.log(e);
      toast({
        title: "Network error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12 text-black pt-16">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name bro */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Last Name bro*/}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Gender (you are a Gay) */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
              required
            >
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dob}
                onChange={(newValue) => setdob(newValue)}
                format="YYYY-MM-DD"
                slotProps={{ textField: { fullWidth: true, required: true, size: "small" } }}
              />
            </LocalizationProvider>
          </div>


          {/* Email echay */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Password pettu*/}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Confirm Password chusko bro */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(prev => !prev)}
              >
                {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </div>
            </div>
          </div>

          {/* Nokku*/}
          <button
            type="submit"
            className="w-full bg-white border-2 hover:bg-gray-300 py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account? Please <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-semibold" onClick={()=> navigate('/login')}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;