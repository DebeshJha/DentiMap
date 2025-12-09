import React, { useState } from "react";
import { 
  Brain, 
  Camera, 
  Shield, 
  ImagePlay ,
  Loader,
  ClipboardPlus,
  UserPlus,
  Zap, 
  Users,   
  ChevronRight,
  Microscope,
  Database,
  Lock,
  Globe,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LearnMoreSidebar from "@/components/LearnMoreSidebar";

const LearnMore = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-6 mt-8 md:mt-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r bg-blue-600 dark:text-white bg-clip-text text-transparent">
                Welcome to DentiMap
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Revolutionary AI-powered dental diagnostics platform that combines advanced microcamera technology 
                with cutting-edge artificial intelligence for real-time teeth analysis and disease detection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 px-4 md:px-0">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 dark:text-blue-600" />
                  </div>
                  <CardTitle>Advanced Imaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    High-resolution microcamera technology for detailed dental imaging
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 dark:text-purple-600" />
                  </div>
                  <CardTitle>AI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Deep learning algorithms for accurate disease detection and diagnosis
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 dark:text-green-600" />
                  </div>
                  <CardTitle>Real-time Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Instant diagnostic feedback and treatment recommendations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "technology":
        return (
          <div className="space-y-6 mt-8 md:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-0">Technology Stack</h2>
            <p className="text-muted-foreground px-4 md:px-0">
              DentiMap leverages cutting-edge technologies to deliver accurate and reliable dental diagnostics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="h-5 w-5" />
                    Microcamera Technology
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Advanced optical sensors with high-resolution imaging capabilities</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Resolution:</span>
                      <Badge variant="secondary">4K Ultra HD</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Magnification:</span>
                      <Badge variant="secondary">Up to 100x</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Light Source:</span>
                      <Badge variant="secondary">LED Multi-Spectrum</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    AI & Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Deep learning models trained on extensive dental datasets</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Model:</span>
                      <Badge variant="secondary">Meta-Llama-3-8B</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Accuracy:</span>
                      <Badge variant="secondary">85%+</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Training Data:</span>
                      <Badge variant="secondary">Images</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="space-y-6 mt-8 md:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-0">Key Features</h2>
            <p className="text-muted-foreground px-4 md:px-0">
              Discover the powerful capabilities that make DentiMap the future of dental diagnostics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
              <Card>
                <CardHeader>
                  <CardTitle>Real-time Scanning</CardTitle>
                  <CardDescription>Continuous monitoring and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-500" />
                      Live video feed processing
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-blue-500" />
                      Instant anomaly detection
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 dark:text-blue-500" />
                      Automated image capture
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Analysis</CardTitle>
                  <CardDescription>Intelligent diagnostic assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-purple-500" />
                      Disease pattern recognition
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-purple-500" />
                      Treatment recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-purple-500" />
                      Risk assessment scoring
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Smart Reporting</CardTitle>
                  <CardDescription>Comprehensive diagnostic reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-500" />
                      Detailed analysis reports
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-500" />
                      Progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-500" />
                      Export capabilities
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mobile Integration</CardTitle>
                  <CardDescription>Access anywhere, anytime</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-orange-500" />
                      Cross-platform compatibility
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-orange-500" />
                      Offline functionality
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-orange-500" />
                      Cloud synchronization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6 mt-8 md:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-0">Security & Privacy</h2>
            <p className="text-muted-foreground px-4 md:px-0">
              Your data security and privacy are our top priorities. We implement industry-leading security measures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Data Encryption
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>All data is encrypted using AES-256 encryption both in transit and at rest.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    HIPAA Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Full compliance with HIPAA regulations for patient data protection.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Secure Storage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Data stored in secure, redundant cloud infrastructure with regular backups.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Access Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Role-based access control with multi-factor authentication support.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "workflow":
        return (
          <div className="space-y-6 mt-8 md:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-0">How It Works</h2>
            <p className="text-muted-foreground px-4 md:px-0">
              A simple 4-step process from image capture to diagnostic results.
            </p>
            
            <div className="space-y-6 md:space-y-8 px-4 md:px-0">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="dark:text-blue-600 font-bold text-sm md:text-base"><ImagePlay/></span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Image Capture</h3>
                  <p className="text-muted-foreground">
                    Use the microcamera to capture high-resolution images of the dental area. 
                    The system automatically adjusts lighting and focus for optimal results.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="dark:text-purple-600 font-bold text-sm md:text-base"><Loader/></span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">AI Analysis</h3>
                  <p className="text-muted-foreground">
                    Our advanced CNN networks to analyze the captured images, identifying patterns, 
                    anomalies, and potential dental issues with high accuracy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="dark:text-green-600 font-bold text-sm md:text-base"><ClipboardPlus/></span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Diagnostic Report</h3>
                  <p className="text-muted-foreground">
                    Generate comprehensive diagnostic reports with detailed findings, 
                    risk assessments, and treatment recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="dark:text-orange-600 font-bold text-sm md:text-base"><UserPlus/></span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Action & Follow-up</h3>
                  <p className="text-muted-foreground">
                    Take immediate action based on results and schedule follow-up appointments 
                    with integrated calendar and reminder systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "benefits":
        return (
          <div className="space-y-6 mt-8 md:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-0">Benefits</h2>
            <p className="text-muted-foreground px-4 md:px-0">
              Discover how DentiMap transforms dental care delivery and improves patient outcomes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 dark:text-blue-500" />
                    For Healthcare Providers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 dark:text-blue-500 mt-1" />
                    <span>Improved diagnostic accuracy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 dark:text-blue-500 mt-1" />
                    <span>Reduced examination time</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 dark:text-blue-500 mt-1" />
                    <span>Enhanced patient communication</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500 mt-1" />
                    <span>Streamlined workflow</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    For Patients
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-500 mt-1" />
                    <span>Early disease detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-500 mt-1" />
                    <span>Reduced treatment costs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-500 mt-1" />
                    <span>Better understanding of conditions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-500 mt-1" />
                    <span>Improved treatment outcomes</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "integration":
        return (
          <div className="space-y-6 mt-8 md:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-0">System Integration</h2>
            <p className="text-muted-foreground px-4 md:px-0">
              Seamlessly integrate DentiMap with your existing dental practice management systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
              <Card>
                <CardHeader>
                  <CardTitle>Practice Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Dentrix Integration</li>
                    <li>• Eaglesoft Compatibility</li>
                    <li>• Open Dental Support</li>
                    <li>• Custom API Access</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Export</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• PDF Reports</li>
                    <li>• DICOM Format</li>
                    <li>• JSON API</li>
                    <li>• Cloud Storage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "support":
        return (
          <div className="space-y-6 mt-8 md:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-0">Customer Support</h2>
            <p className="text-muted-foreground px-4 md:px-0">
              We're here to help you get the most out of DentiMap with comprehensive support services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
              <Card>
                <CardHeader>
                  <CardTitle>24/7 Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Round-the-clock technical assistance for any issues or questions.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Training & Onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive training programs for your team to maximize DentiMap usage.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Detailed user guides, video tutorials, and best practices documentation.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Community Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Connect with other users and share experiences in our community forum.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-card border-b border-border p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary">Learn More</h1>
            <p className="text-sm text-muted-foreground">
              Explore DentiMap's capabilities
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hover:bg-accent"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <div className="flex pt-16 md:pt-0">
        
        <div className="hidden md:block">
          <LearnMoreSidebar
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>

        
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="fixed left-0 top-0 h-full" onClick={(e) => e.stopPropagation()}>
              <LearnMoreSidebar
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                isMobile={true}
                onClose={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
        
        
        <div className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
