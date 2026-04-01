import { FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { TbStarFilled } from "react-icons/tb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Swarnaone from "../asserts/about/swarnaone.png";
import TechinalLead from "../asserts/about/Leadimage.png";
import harshith from "../asserts/about/Harshith.png";

const teamMembers = [
  {
    name: "Sai Sankar Swarna",
    role: "Full Stack Developer",
    college: "Graduate Student",
    image: Swarnaone,
    description: "Built responsive UIs with React & Tailwind; developed backend with Spring Boot.",
    social: {
      github: "https://github.com/Swarna7414",
      linkedin: "https://www.linkedin.com/in/swarna-sai-sankar-a1084a203/",
    },
  },
  {
    name: "Harshith Reddy Nalla",
    role: "AI/ML Engineer",
    college: "Undergraduate Student",
    image: harshith,
    imagePosition: "object-top",
    description: "Model development, API development, FastAPI, model deployment, Hugging Face Spaces and model workflow.",
    social: {
      github: "https://github.com/HarshithReddy01",
      linkedin: "https://www.linkedin.com/in/harshith-reddy-nalla-6005012ab/",
      portfolio: "https://harshithreddy01.github.io/My-Web/",
    },
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">

      {/* Hero */}
      <div className="relative pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary mb-6">
            University of South Dakota
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Meet the Team Behind <span className="text-primary">DentiMap</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate innovators dedicated to revolutionizing dental care through artificial intelligence and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Technical Lead */}
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-muted-foreground uppercase tracking-widest text-sm">Technical Lead</h2>
          <Card className="group hover:shadow-2xl transition-all duration-500 border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-72 shrink-0 overflow-hidden">
                  <img
                    src={TechinalLead}
                    alt="Dr. Debesh Jha"
                    className="w-full h-72 md:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">Technical Lead</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-1">Dr. Debesh Jha</h3>
                  <p className="text-muted-foreground mb-4 font-medium">
                    Assistant Professor (Tenure Track) @ USD &middot; Former Sr. Research Associate
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    AI/ML specialist in medical imaging and computational pathology, recognized among the world's top scientists. Dr. Jha leads research at the intersection of deep learning and healthcare, driving DentiMap's core AI vision.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="w-9 h-9 rounded-full"
                      onClick={() => window.open("https://github.com/DebeshJha", "_blank")}
                    >
                      <FiGithub className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="w-9 h-9 rounded-full"
                      onClick={() => window.open("https://www.linkedin.com/in/debesh-jha-ph-d-071462aa/", "_blank")}
                    >
                      <FiLinkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="w-9 h-9 rounded-full"
                      onClick={() => window.open("https://x.com/debesh_jha", "_blank")}
                    >
                      <FaXTwitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold mb-8 text-center text-muted-foreground uppercase tracking-widest">Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-96">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${member.imagePosition ?? "object-top"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.social.github && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                          onClick={() => window.open(member.social.github, "_blank")}
                        >
                          <FiGithub className="h-3.5 w-3.5 text-white" />
                        </Button>
                      )}
                      {member.social.linkedin && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                          onClick={() => window.open(member.social.linkedin, "_blank")}
                        >
                          <FiLinkedin className="h-3.5 w-3.5 text-white" />
                        </Button>
                      )}
                      {member.social.portfolio && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                          onClick={() => window.open(member.social.portfolio, "_blank")}
                        >
                          <FiGlobe className="h-3.5 w-3.5 text-white" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{member.role}</span>
                    <h3 className="text-lg font-bold mt-1 mb-1">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{member.college}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Who are we */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-background to-background border border-border/50 p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold mb-5">Who Are We?</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base">
              We're a research team from the <span className="font-semibold text-foreground">University of South Dakota</span> building accessible, AI-powered tools for healthcare. Our goal is to bridge cutting-edge machine learning with real clinical needs, creating solutions that support doctors, researchers, and patients with practical, human-centered technology.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At the University of South Dakota, we're committed to transforming healthcare through innovative AI technology.
            Our mission is to make advanced diagnostics more accessible, accurate, and efficient for everyone, combining
            cutting-edge machine learning with intuitive design to empower both patients and healthcare professionals.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TbBulb size={36} />,
                title: "Innovation First",
                desc: "We continuously push the boundaries of what's possible with AI technology in healthcare.",
              },
              {
                icon: <FaHeartCircleCheck size={32} />,
                title: "Patient-Centered",
                desc: "Every decision we make is guided by improving patient outcomes and experiences.",
              },
              {
                icon: <TbStarFilled size={32} />,
                title: "Excellence",
                desc: "We strive for the highest standards in everything we build and deliver.",
              },
            ].map((val, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white">{val.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
