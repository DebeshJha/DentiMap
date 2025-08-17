import { ArrowRight, Scan, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-white dark:black dark:from-blue-200 dark:via-blue-500 dark:to-blue-500">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-black dark:to-black" />
      </div>

      {/* Animated background elements ra pilla bacha */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
              <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-500 max-w-4xl mx-auto">
                Revolutionary AI-powered dental diagnostics using advanced microcamera technology 
                for real-time teeth analysis and disease detection.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-black hover:bg-transparent hover:bg-blue-500 dark:text-white dark:border-white hover:dark:text-black text-black hover:text-black dark:hover:bg-white hover:border-white px-8 py-4 text-lg bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-2">Real-time Scanning</h3>
              <p className="text-sm text-gray-400">Continuous monitoring with advanced microcamera</p>
            </div>
            <div className="text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-400">Deep learning powered diagnostics</p>
            </div>
            <div className="text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-400" />
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