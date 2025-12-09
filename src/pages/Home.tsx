import { FaArrowRight } from "react-icons/fa";
import { BiScan } from "react-icons/bi";
import { LuBrainCircuit } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0" />
      </div>

      {/* Animated background elements ra pilla bacha */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r dark:text-white text-blue-500 bg-clip-text">
                DentiMap
              </span>
            </h1>
            <div className="mt-6">
              <p className="text-xl md:text-2xl dark:text-gray-300 text-black max-w-4xl mx-auto">
                Innovative AI driven dental diagnostics that uses cutting edge microcamera technology to analyze teeth and identify diseases in real time.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
                Get Started
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-black hover:border-blue-500 hover:bg-blue-50 hover:backdrop:blur-md dark:text-white dark:border-white hover:dark:text-black text-black hover:text-black dark:hover:bg-white px-8 py-4 text-lg bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                Learn More
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BiScan className="h-8 w-8 dark:text-blue-400 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-2">Real-time Scanning</h3>
              <p className="text-sm text-gray-400">Continuous monitoring with advanced microcamera</p>
            </div>
            <div className="text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <LuBrainCircuit className="h-8 w-8 dark:text-blue-400 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-400">Deep learning powered diagnostics</p>
            </div>
            <div className="text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <IoCheckmarkSharp className="h-8 w-8 dark:text-blue-400 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-2">Instant Results</h3>
              <p className="text-sm text-gray-400">Get immediate diagnostic feedback</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;