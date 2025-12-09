
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../asserts/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src={Logo}
                alt="DentiMap Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                DentiMap
              </span>
            </Link>
            <p className="text-black dark:text-white mb-6 max-w-md">
              Revolutionizing dental care through artificial intelligence and advanced microcamera technology. 
              Making dental diagnostics more accurate, accessible, and immediate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black dark:text-white hover:text-blue-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-black dark:text-white hover:text-blue-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer">Live AI Model</span></li>
              <li><span className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer">Upload & Analyze</span></li>
              <li><span className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer">AI Chat Consultation</span></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-black dark:text-white">dentimap527@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-black dark:text-white">+1 605 202 7777</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-black dark:text-white">Vermillion,<br /> South Dakota- 57069</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center cursor-not-allowed">
            <p className="text-black dark:text-white text-sm">
              © 2025 DentiMap. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 cursor-help">
              <a className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
              <a className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
              <a className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;