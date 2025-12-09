import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Bounce from "../src/asserts/bounce.png"
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Login/Signup";
import OTP from "./pages/Login/OTP";
import ForgotPassword from "./pages/Login/ForgotPassword";
import ForgotPasswordOTP from "./pages/Login/ForgotPasswordOTP";
import ResetPassword from "./pages/Login/ResetPassword";
import ChatBot from "./pages/ChatBot";
import UploadScan from "./pages/UploadScan";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();


const isLoginPage = (pathname: string) => {
  const loginRoutes = ['/login', '/signup', '/otp', '/forgot-password', '/forgot-password-otp', '/reset-password'];
  return loginRoutes.includes(pathname);
};


const AppContent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    if (isLoginPage(location.pathname)) {
      setIsChatOpen(false);
    }
  }, [location.pathname]);

  const openChat = () => {
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {!isLoginPage(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/otp" element={<OTP/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/forgot-password-otp" element={<ForgotPasswordOTP/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/upload-scan" element={<UploadScan/>}/>
      </Routes>
      
      {!isLoginPage(location.pathname) && (
        <div 
          className="bottom-8 right-5 transform -translate-x-1/2 fixed hidden lg:block cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={openChat}
          title="Chat with DentiJha AI"
        >
          <div className="animate-bounce">
            <img 
              src={Bounce}
              alt="Chat with DentiJha AI" 
              className="w-12 h-12 animate-pulse"
            />
          </div>
        </div>
      )}
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="dentimap-theme">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename="/DentiMap">
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
