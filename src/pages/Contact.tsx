import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Video } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaMedium } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Got it!",
      description: "We'll be in touch soon.",
    });
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Left Side - Contact Me Section */}
              <div className="relative">
                <div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-16 text-gray-900 dark:text-gray-100">
                    Contact us
                  </h1>
                  
                  {/* Contact Information */}
                  <div className="space-y-10 mb-12">
                    {/* Email */}
                    <div className="flex items-start gap-6">
                      <Mail className="h-9 w-9 text-gray-900 dark:text-gray-100 mt-1 flex-shrink-0" />
                      <a 
                        href="mailto:dentimap527@gmail.com" 
                        className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        dentimap527@gmail.com
                      </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-6">
                      <Phone className="h-9 w-9 text-gray-900 dark:text-gray-100 mt-1 flex-shrink-0" />
                      <a 
                        href="tel:+16052027777" 
                        className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +1 605 202 7777
                      </a>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-6">
                      <MapPin className="h-9 w-9 text-gray-900 dark:text-gray-100 mt-1 flex-shrink-0" />
                      <div className="text-xl md:text-2xl text-gray-900 dark:text-gray-100">
                        <div>Department of Computer Science,</div>
                        <div>414 E. Clark Street,</div>
                        <div>Vermillion, SD 57069</div>
                      </div>
                    </div>
                  </div>

                  {/* Let's Meet Button */}
                  <Button 
                    className="w-full md:w-full md:max-w-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-2xl px-12 py-6 rounded-lg mb-12 transition-all shadow-md hover:shadow-lg"
                    onClick={() => {
                      // You can add video call functionality here
                      toast({
                        title: "Let's Meet!",
                        description: "We'll schedule a meeting soon.",
                      });
                    }}
                  >
                    Let's Meet
                    
                  </Button>
                </div>
              </div>

              {/* Right Side - Form Card */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        First name<span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="h-12 text-base bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Last name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="h-12 text-base bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email<span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}                       required
                        className="h-12 text-base bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        What can we help you with?
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="resize-y text-base bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[120px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-base font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
