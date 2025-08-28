import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { TbStarFilled } from "react-icons/tb";
import { Card, CardContent } from "@/components/ui/card";
import Swarnaone from "../asserts/about/swarnaone.png"
import TechinalLead from "../asserts/about/Leadimage.png"
import harshith from "../asserts/about/Harshith.png";
import { Button } from "@/components/ui/button";

const About = () => {

  const Dgithub=()=>{
    window.open("https://github.com/DebeshJha","_blank");
  }

  const Dlinkedin=()=>{
    window.open("https://www.linkedin.com/in/debesh-jha-ph-d-071462aa/","_blank");
  }

  const Dtwitter=()=>{
    window.open("https://x.com/debesh_jha","_blank")
  }
  const teamMembers = [

    {
      name: "Sai Sankar Swarna",
      role: "Back-end, API design & Orchestration",
      college:"Graduate Student",
      image:Swarnaone,
      description: "Manages backend services, API development, and model workflow.",
      social: {
        github: "https://github.com/Swarna7414",
        linkedin: "https://www.linkedin.com/in/swanra-sai-sankar-000797191/",
      }
    }
    ,
    {
      name: "Harshith Reddy Nalla",
      role: "Full Stack Developer",
      college:"Undergraduate Student",
      image: harshith,
      description: "Built responsive UIs with React & Tailwind; developed backend with Spring Boot.",
      social: {
        github: "https://github.com/HarshithReddy01",
        linkedin: "https://www.linkedin.com/in/harshith-reddy-nalla-6005012ab/",
      }
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-white to-white dark:from-black dark:via-black dark:to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Passionate innovators dedicated to revolutionizing dental care through artificial intelligence and cutting-edge technology.
          </p>
        </div>
      </div>

      
      <div className="py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-white dark:from-black dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
            
            <div className="lg:col-span-6">
              <Card className="flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-md">
                    <img
                      src={TechinalLead}
                      alt={"DebashJha"}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={Dgithub}>
                        <FiGithub className="h-4 w-4 text-blue-500" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={Dlinkedin}>
                        <FiLinkedin className="h-4 w-4 text-blue-500" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={Dtwitter}>
                        <FaXTwitter className="h-4 w-4 text-blue-500" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">Dr. Debesh Jha</h3>
                    <p className="text-primary font-medium mb-3">Technical Lead</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">AI/ML specialist in medical imaging, recognized among world’s top scientists.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-1/2">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm mt-6 mb-6">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-md">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={()=>{window.open(member.social.github)}}>
                            <FiGithub className="h-3 w-3 text-white" />
                          </Button>
                          <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={()=>{window.open(member.social.linkedin)}}>
                            <FiLinkedin className="h-3 w-3 text-white" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium mb-2 text-sm">{member.role}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{member.college},</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{member.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="hidden lg:block mt-20">
                <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Who are we ?</h1>
                
                <p className="text-justify font-semibold text-md mt-6">We’re students at the University of South Dakota who created this website to make helpful technology freely accessible to everyone. 
                  Our goal is to improve AI in healthcare by building practical, research-driven tools. By combining our technical skills with insights from the 
                  medical field, we aim to develop solutions that support doctors, researchers, and patients alike,  making advanced technology more human-centered 
                  and accessible.</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Mission</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            At DentiMap, we're committed to transforming dental healthcare through innovative AI technology. 
            Our mission is to make advanced dental diagnostics accessible, accurate, and immediate for everyone. 
            By combining cutting-edge machine learning with intuitive design, we're creating tools that empower 
            both patients and dental professionals to achieve better oral health outcomes.
          </p>
        </div>
      </div>

      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white"><TbBulb size={36}/></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation First</h3>
              <p className="text-muted-foreground">
                We continuously push the boundaries of what's possible with AI technology in healthcare.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white"><FaHeartCircleCheck/></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Patient-Centered</h3>
              <p className="text-muted-foreground">
                Every decision we make is guided by improving patient outcomes and experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white"><TbStarFilled/></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in everything we build and deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
