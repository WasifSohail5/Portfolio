"use client"

import type React from "react"
import { useState } from "react";
import { sendEmail } from "./actions/email";
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeProvider } from "@/components/theme-provider"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  Send,
  ChevronDown,
  Star,
  Shield,
  BarChart3,
  Stethoscope,
  Calendar,
  GraduationCapIcon,
  Calculator,
  Terminal,
  Mouse,
  Music,
  Dumbbell,
  Mic,
  Gamepad2,
  ShieldCheck,
} from "lucide-react"

// Enhanced 3D Floating Elements
function FloatingTech() {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <group>
        {/* AI Brain representation */}
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="#06b6d4" wireframe />
        </mesh>

        {/* Neural Network nodes */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[Math.cos((i * Math.PI) / 4) * 1.5, Math.sin((i * Math.PI) / 4) * 1.5, Math.sin(i * 0.5) * 0.5]}
          >
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.2} />
          </mesh>
        ))}

        {/* Data visualization cube */}
        <mesh position={[2, 0, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#0891b2" transparent opacity={0.7} />
        </mesh>
      </group>
    </Float>
  )
}

// Profile Picture Upload 
// Profile Picture Component with default image
function ProfilePictureUpload() {
  const [profileImage, setProfileImage] = useState<string>("/images/Wasif.jpg"); // Your image path here

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <motion.div className="relative group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <div className="w-32 h-32 mx-auto mb-6 relative">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 p-1">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
            <img
              src={profileImage || "/placeholder.svg"}
              alt="Wasif Sohail"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Upload overlay */}
        <motion.div
          className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="text-white text-sm text-center">
            <div className="text-lg mb-1">📷</div>
            Change Photo
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// 3D Floating Cube Component
function FloatingCube() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#06b6d4" wireframe />
      </mesh>
    </Float>
  )
}

// 3D Scene Component
function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <Environment preset="night" />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <FloatingTech />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

// Project icons mapping
const projectIcons = {
  "Weapon Detection System": Shield,
  "Crime Prediction": BarChart3,
  MedNexusAI: Stethoscope,
  EventPlanner: Calendar,
  "Virtual Tutor": GraduationCapIcon,
  "Smart Electricity Bill Calculator": Calculator,
  "Easy Terminal": Terminal,
  "Virtual Mouse": Mouse,
  "AMUSIC - AI Music Recommendation": Music,
  FitFusion: Dumbbell,
  "Jarvis Voice Assistant": Mic,
  FlappyBird: Gamepad2,
  SpamShield: ShieldCheck,
}

// Enhanced Project Card Component with 3D effects
function ProjectCard({ project, index }: { project: any; index: number }) {
  const IconComponent = projectIcons[project.name as keyof typeof projectIcons] || Code

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotateY: 8,
        rotateX: 5,
        z: 50,
        transition: { duration: 0.3 },
      }}
      className="group perspective-1000 transform-gpu"
    >
      <Card className="h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 transform-gpu hover:shadow-2xl hover:shadow-cyan-500/25">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <IconComponent className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {project.name}
              </h3>
            </div>
            <div className="flex gap-2">
              {project.starred && (
                <motion.div whileHover={{ scale: 1.2, rotate: 180 }} transition={{ duration: 0.3 }}>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </motion.div>
              )}
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                </a>
              </motion.div>
            </div>
          </div>

          <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, i: number) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-200 border-cyan-500/30 hover:from-cyan-500/30 hover:to-teal-500/30 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 bg-slate-800/50 px-2 py-1 rounded-full">{project.category}</span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="ghost"
                className="text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 transition-all duration-300"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                View Project
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Contact Form Component
function ContactForm() {
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({
    message: '',
    type: null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);
    
    setIsSubmitting(false);
    
    if (result.error) {
      setFormStatus({
        message: result.error,
        type: 'error',
      });
    } else {
      setFormStatus({
        message: 'Message sent successfully!',
        type: 'success',
      });
      // Reset form
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div whileHover={{ scale: 1.02 }}>
          <Input
            name="name"
            placeholder="Your Name"
            className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-white/50 focus:border-cyan-400 transition-all duration-300"
            required
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-white/50 focus:border-cyan-400 transition-all duration-300"
            required
          />
        </motion.div>
      </div>

      <motion.div whileHover={{ scale: 1.02 }}>
        <Input
          name="subject"
          placeholder="Subject"
          className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-white/50 focus:border-cyan-400 transition-all duration-300"
          required
        />
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }}>
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="bg-slate-800/50 border-cyan-500/30 text-white placeholder:text-white/50 focus:border-cyan-400 transition-all duration-300"
          required
        />
      </motion.div>

      {formStatus.message && (
        <div className={`p-3 rounded-md ${
          formStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
        }`}>
          {formStatus.message}
        </div>
      )}

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Sending...
            </div>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </form>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  const projects = [
    {
      name: "Weapon Detection System",
      description:
        "Real-time weapon detection system using the latest YOLOv8 object detection framework. Trained to accurately detect weapons in images and video streams, making security applications more effective.",
      tech: ["Python", "YOLOv8", "Computer Vision", "OpenCV", "TensorFlow"],
      category: "Computer Vision",
      starred: false,
      githubUrl: "https://github.com/WasifSohail5/Weapon-Detection-System",
    },
    {
      name: "Crime Prediction",
      description:
        "Advanced predictive analytics system utilizing machine learning algorithms to forecast crime patterns from historical data, helping law enforcement agencies make data-driven decisions.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas"],
      category: "Data Science",
      starred: false,
      githubUrl: "https://github.com/WasifSohail5/Crime-Prediction",
    },
    {
      name: "MedNexusAI",
      description:
        "Comprehensive medical AI platform designed to assist healthcare professionals with diagnosis, treatment recommendations, and patient management using advanced machine learning algorithms.",
      tech: ["Python", "AI", "Healthcare", "Deep Learning", "Medical Imaging"],
      category: "Healthcare AI",
      starred: false,
      githubUrl: "https://github.com/WasifSohail5/MedNexusAI",
    },
    {
      name: "EventPlanner",
      description:
        "Feature-rich Google Calendar management application with advanced scheduling features, event planning capabilities, and intelligent conflict resolution for seamless calendar management.",
      tech: ["Python", "Google Calendar API", "Event Planning", "Calendar Management", "Streamlit"],
      category: "Productivity",
      starred: false,
      githubUrl: "https://github.com/WasifSohail5/EventPlanner",
    },
    {
      name: "Virtual Tutor",
      description:
        "AI-powered educational platform that provides personalized tutoring experiences, adaptive learning paths, and intelligent assessment tools for enhanced student learning outcomes.",
      tech: ["Python", "AI", "Education", "Natural Language Processing", "Machine Learning"],
      category: "Education Tech",
      starred: false,
      githubUrl: "https://github.com/WasifSohail5/Virtual_Tutor",
    },
    {
      name: "Smart Electricity Bill Calculator",
      description:
        "Desktop application that simplifies the complex task of calculating electricity bills with modern design UI. Features advanced billing algorithms and user-friendly interface.",
      tech: ["Java", "JavaFX", "Desktop App", "Billing System", "UI/UX"],
      category: "Utility",
      starred: false,
      githubUrl: "https://github.com/WasifSohail5/Smart-Electricity-Bill-Calculator",
    },
    {
      name: "Easy Terminal",
      description:
        "Revolutionary AI-powered terminal that accepts commands in natural language, making command-line operations accessible to users of all technical levels through intelligent NLP processing.",
      tech: ["Python", "NLP", "Natural Language Processing", "CLI", "Machine Learning"],
      category: "NLP",
      starred: true,
      githubUrl: "https://github.com/WasifSohail5/Easy-Terminal",
    },
    {
      name: "Virtual Mouse",
      description:
        "Innovative computer vision system that replaces traditional mouse peripherals with hand movements. Uses MediaPipe for hand tracking and PyAutoGUI for cursor control.",
      tech: ["Python", "MediaPipe", "Computer Vision", "Hand Tracking", "PyAutoGUI"],
      category: "Computer Vision",
      starred: true,
      githubUrl: "https://github.com/WasifSohail5/Virtual-Mouse",
    },
    {
      name: "AMUSIC - AI Music Recommendation",
      description:
        "AI-driven music recommendation system that helps users discover personalized songs using collaborative filtering, content-based filtering, and advanced machine learning algorithms.",
      tech: ["Python", "Collaborative Filtering", "Scikit-learn", "Pandas", "Music Analysis"],
      category: "Recommendation Systems",
      starred: true,
      githubUrl: "https://github.com/WasifSohail5/AMUSIC-AI_Powered_MusicRecommendationSystem",
    },
    {
      name: "FitFusion",
      description:
        "AI-powered fitness assistant that offers real-time posture correction, voice-controlled workouts, and AI exercise analysis with advanced tracking and fitness integration.",
      tech: ["Python", "Computer Vision", "AI", "Fitness Tech", "Real-time Analysis"],
      category: "Health Tech",
      starred: true,
      githubUrl: "https://github.com/WasifSohail5/FitFusion",
    },
    {
      name: "Jarvis Voice Assistant",
      description:
        "Lightweight and efficient Python-based voice assistant that executes tasks through voice commands. Features speech recognition, natural language processing, and task automation.",
      tech: ["Python", "Speech Recognition", "Voice Assistant", "NLP", "Task Automation"],
      category: "Voice Assistant",
      starred: true,
      githubUrl: "https://github.com/WasifSohail5/Jarvis",
    },
    {
      name: "FlappyBird",
      description:
        "2D Unity game where players control a bird, flapping through obstacles. Features smooth physics, dynamic obstacles, scoring system, and engaging gameplay mechanics.",
      tech: ["C#", "Unity", "Game Development", "2D Physics", "Game Design"],
      category: "Game Development",
      starred: true,
      githubUrl: "https://github.com/WasifSohail5/FlappyBird",
    },
    {
      name: "SpamShield",
      description:
        "Machine learning-based spam detection application that classifies emails as spam or legitimate. Uses advanced machine learning models to ensure accurate classification.",
      tech: ["Python", "Machine Learning", "Classification", "Scikit-learn", "Email Processing"],
      category: "Machine Learning",
      starred: true,
      githubUrl: "https://github.com/WasifSohail5/SpamShield",
    },
  ]

  const skills = {
    Languages: ["Python", "Java", "C++", "C#", "SQL"],
    "ML/AI": ["PyTorch", "TensorFlow", "Scikit-learn", "YOLO", "NLP", "Computer Vision"],
    Data: ["Pandas", "NumPy", "Data Analysis", "Feature Engineering", "Data Visualization"],
    Tools: ["Git", "Docker", "VS Code", "Jupyter Notebook", "Google Colab", "Unity"],
    Concepts: ["Deep Learning", "Machine Learning", "Neural Networks", "Transfer Learning"],
  }

  const achievements = [
    "CompAcc (NUST) Certificate - Outstanding performance in computing applications",
    "VisioSpark (COMSATS) Certificate - Innovative AI-based project recognition",
    "NUMLOGIC-Ideathon (NUML) - Certificate of Participation and Appreciation",
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ThemeProvider attribute="class" defaultTheme={darkMode ? "dark" : "light"}>
      <div
        className={`min-h-screen transition-all duration-500 ${
          darkMode
            ? "dark bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            : "bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50"
        }`}
      >
        {/* Enhanced Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
              >
                Wasif Sohail
              </motion.div>

              <div className="hidden md:flex items-center space-x-8">
                {["home", "about", "projects", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 relative ${
                      activeSection === section ? "text-cyan-400 font-semibold" : "text-white/70 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {section}
                    {activeSection === section && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Enhanced Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-30">
            <Scene3D />
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-teal-200 bg-clip-text text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                AI/ML Developer
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Passionate about building intelligent applications with{" "}
                <span className="text-cyan-300 font-semibold">Deep Learning</span>,{" "}
                <span className="text-teal-300 font-semibold">Computer Vision</span>, and{" "}
                <span className="text-blue-300 font-semibold">NLP</span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-3 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                    onClick={() => scrollToSection("projects")}
                  >
                    <Code className="w-5 h-5 mr-2" />
                    View My Work
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-400/50 text-white hover:bg-cyan-500/20 hover:border-cyan-400 px-8 py-3 rounded-full transition-all duration-300"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-400/50 text-white hover:bg-cyan-500/20 hover:border-cyan-400 px-6 py-3 rounded-full transition-all duration-300"
                    onClick={() => window.open("https://www.linkedin.com/in/wasif-sohail-4381602b4", "_blank")}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-cyan-400/50" />
          </motion.div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Head of AI Department at Soplex Technologies, leading innovative AI/ML projects and implementations.
                Currently pursuing BS in Artificial Intelligence with a CGPA of 3.95.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ProfilePictureUpload />
                <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/20 p-8 hover:border-cyan-400/50 transition-all duration-500">
                  <CardContent className="p-0">
                    <motion.div className="flex items-center mb-6" whileHover={{ scale: 1.02 }}>
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Education</h3>
                    </motion.div>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-800/50 rounded-lg border border-cyan-500/10">
                        <h4 className="text-lg font-semibold text-cyan-300">BS in Artificial Intelligence</h4>
                        <p className="text-white/80">National University of Modern Languages (NUML)</p>
                        <p className="text-white/60">CGPA: 3.95 • 5th Semester</p>
                      </div>
                    </div>

                    <motion.div className="flex items-center mb-6 mt-8" whileHover={{ scale: 1.02 }}>
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Experience</h3>
                    </motion.div>
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-cyan-500/10">
                      <h4 className="text-lg font-semibold text-teal-300">Head of AI Department</h4>
                      <p className="text-white/80">Soplex Technologies</p>
                      <p className="text-white/60">Leading AI/ML projects and technical roadmap</p>
                    </div>

                    <motion.div className="flex items-center mb-6 mt-8" whileHover={{ scale: 1.02 }}>
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Achievements</h3>
                    </motion.div>
                    <div className="space-y-2">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="text-white/80 text-sm p-2 bg-slate-800/30 rounded border-l-2 border-cyan-400/50"
                          whileHover={{ x: 5, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          • {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/20 p-6 hover:border-cyan-400/50 transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Technical Skills</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(skills).map(([category, skillList]) => (
                        <motion.div key={category} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <h4 className="text-cyan-300 font-semibold mb-2">{category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {skillList.map((skill, index) => (
                              <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                <Badge
                                  variant="secondary"
                                  className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-200 border-cyan-500/30 hover:from-cyan-500/30 hover:to-teal-500/30 transition-all duration-300"
                                >
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "13+", label: "Projects", color: "from-cyan-400 to-teal-400" },
                    { value: "3.95", label: "CGPA", color: "from-teal-400 to-cyan-400" },
                    { value: "3+", label: "Certifications", color: "from-blue-400 to-cyan-400" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/20 rounded-lg hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                A comprehensive showcase of my AI/ML projects spanning Computer Vision, NLP, Data Science, and more
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Let's collaborate on exciting AI/ML projects or discuss opportunities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/20 p-8 h-full hover:border-cyan-400/50 transition-all duration-500">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                    <div className="space-y-6">
                      {[
                        {
                          icon: Mail,
                          label: "Email",
                          value: "wasifsohail66@gmail.com",
                          color: "from-cyan-400 to-teal-500",
                        },
                        { icon: Phone, label: "Phone", value: "+92 313 937 9987", color: "from-teal-400 to-cyan-500" },
                        {
                          icon: MapPin,
                          label: "Location",
                          value: "Islamabad, Pakistan",
                          color: "from-blue-400 to-cyan-500",
                        },
                      ].map((contact, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                        >
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center`}
                          >
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">{contact.label}</p>
                            <p className="text-white/70">{contact.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex space-x-4 mt-8">
                      {[
                        {
                          icon: Linkedin,
                          href: "https://www.linkedin.com/in/wasif-sohail-4381602b4",
                          color: "from-cyan-500 to-teal-500",
                        },
                        { icon: Github, href: "https://github.com/WasifSohail5", color: "from-slate-700 to-slate-900" },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <social.icon className="w-6 h-6 text-white" />
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               >
                <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/20 p-8 hover:border-cyan-400/50 transition-all duration-500">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <ContactForm />
                </CardContent>
                </Card>
              </motion.div>

        {/* Enhanced Footer */}
        <footer className="py-8 border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl">
          <div className="container mx-auto px-6 text-center">
            <motion.p className="text-white/60" whileHover={{ scale: 1.02 }}>
              © 2024 Wasif Sohail. Built with Next.js, Three.js, and Framer Motion.
            </motion.p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
