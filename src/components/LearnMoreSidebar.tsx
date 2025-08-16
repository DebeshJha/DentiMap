import React from "react";
import { 
  Brain, 
  Microscope, 
  Zap, 
  Shield, 
  BarChart3, 
  Award, 
  Settings, 
  Users 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface SidebarItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface LearnMoreSidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "overview",
    title: "Overview",
    icon: <Brain className="h-5 w-5" />,
    description: "Introduction to DentiMap"
  },
  {
    id: "technology",
    title: "Technology",
    icon: <Microscope className="h-5 w-5" />,
    description: "AI & Microcamera Tech"
  },
  {
    id: "features",
    title: "Features",
    icon: <Zap className="h-5 w-5" />,
    description: "Key Capabilities"
  },
  {
    id: "security",
    title: "Security",
    icon: <Shield className="h-5 w-5" />,
    description: "Data Protection"
  },
  {
    id: "workflow",
    title: "Workflow",
    icon: <BarChart3 className="h-5 w-5" />,
    description: "How It Works"
  },
  {
    id: "benefits",
    title: "Benefits",
    icon: <Award className="h-5 w-5" />,
    description: "Advantages"
  },
  {
    id: "integration",
    title: "Integration",
    icon: <Settings className="h-5 w-5" />,
    description: "System Integration"
  },
  {
    id: "support",
    title: "Support",
    icon: <Users className="h-5 w-5" />,
    description: "Customer Support"
  }
];

const LearnMoreSidebar: React.FC<LearnMoreSidebarProps> = ({
  activeSection,
  onSectionChange,
  isMobile = false,
  onClose
}) => {
  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className={`${isMobile ? 'w-80' : 'w-80'} bg-card border-r border-border min-h-screen p-6 ${isMobile ? 'mt-0' : 'mt-16'}`}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-primary">Learn More</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Explore DentiMap's capabilities
          </p>
        </div>
        
        <Separator />
        
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              {item.icon}
              <div>
                <div className="font-medium">{item.title}</div>
                <div className="text-xs opacity-80">{item.description}</div>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LearnMoreSidebar;
