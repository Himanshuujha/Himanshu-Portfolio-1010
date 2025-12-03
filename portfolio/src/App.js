import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  Cpu, 
  Server, 
  Database, 
  Terminal, 
  ExternalLink, 
  Download, 
  Menu, 
  X,
  ChevronRight,
  MapPin,
  Award
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activeSection, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              HJ.
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`${
                  activeSection === link.id 
                    ? 'text-cyan-400' 
                    : 'text-slate-300 hover:text-white'
                } transition-colors text-sm font-medium`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block p-2 px-4 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm animate-fade-in-up">
          <span className="text-cyan-400 font-medium text-sm">Welcome to my portfolio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Himanshu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Jha</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Electronics & Communication Engineer specializing in <span className="text-white font-semibold">MERN Stack Development</span> and <span className="text-white font-semibold">Embedded Systems</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
            View Projects <ChevronRight size={18} />
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            Contact Me <Mail size={18} />
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-6 text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="https://github.com/Himanshuujha" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/himanshu-jha-34a230249/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:himanshujha5288@gmail.com" className="hover:text-red-400 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Summary</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Electronics and Communication Engineer with strong expertise in embedded software and web development. 
                  Skilled in C++, Python, JavaScript, and Arduino for building robust applications and integrating IoT solutions. 
                  Experienced in developing software for data processing, real-time systems, and modern web platforms, 
                  delivering innovative engineering solutions through code.
                </p>
                {/* <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-cyan-400" />
                    <span>Ludhiana, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-yellow-400" />
                    <span>GPA: 7.61/10</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-300 mb-6 text-lg">
              I bridge the gap between hardware and software. My journey started with electronics, understanding how signals work, 
              and evolved into building full-stack applications that can interact with the physical world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Code className="text-blue-400" />, title: "Web Development", desc: "MERN Stack, Real-time apps" },
                { icon: <Cpu className="text-cyan-400" />, title: "Embedded Systems", desc: "Arduino, ESP32, Raspberry Pi" },
                { icon: <Database className="text-green-400" />, title: "IoT Solutions", desc: "MQTT, OTA Updates, Sensors" },
                { icon: <Terminal className="text-purple-400" />, title: "Low-Level Code", desc: "C, C++, Firmware optimization" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Professional Experience</h2>
        
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:mx-auto max-w-3xl pl-8 pb-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950"></div>
          
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl hover:border-cyan-500/50 transition-colors">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Embedded Software Engineer</h3>
                <p className="text-cyan-400 font-medium">Hero Cycles Ltd.</p>
              </div>
              <span className="mt-2 sm:mt-0 px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                Aug 2025 - Present
              </span>
            </div>
            
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <ChevronRight size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                <span>Engineered real-time, interrupt-driven firmware for Arduino, ESP32, and Raspberry Pi systems.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                <span>Integrated MPU6050, GPS, and Hall sensors via I2C/SPI with custom signal calibration.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                <span>Deployed power-optimized IoT on ESP8266/ESP32 using MQTT and OTA firmware updates.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, tags, description, points, icon }) => (
  <div className="group bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col h-full">
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
          {icon}
        </div>
        <div className="flex gap-2">
          {/* Mock links */}
          <button className="p-2 text-slate-400 hover:text-white transition-colors" title="View Code">
            <Github size={20} />
          </button>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-6 text-sm line-clamp-2">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-800 mt-auto">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Collaborative Code Editor",
      description: "Real-time collaborative development environment allowing multiple users to edit code simultaneously.",
      tags: ["React.js", "Express", "Node.js", "Socket.io"],
      icon: <Code size={24} />,
      points: [
        "Built a real-time code editor with multi-user synchronization.",
        "Implemented room-based sessions and syntax highlighting.",
        "Designed scalable backend for low-latency bidirectional communication."
      ]
    },
    {
      title: "Bicycle Game Controller",
      description: "IoT system converting physical bicycle movements into game inputs using BLE.",
      tags: ["ESP32", "C++", "MPU6050", "BLE"],
      icon: <Cpu size={24} />,
      points: [
        "Developed controller using MPU6050 (steering) and Hall sensor (speed).",
        "Implemented BLE Gamepad for low-latency wireless control.",
        "Designed Li-ion power system with 3.3V regulation."
      ]
    },
    {
      title: "Smart Lock Remote Access",
      description: "Secure remote entry system controllable via smartphone app over Wi-Fi.",
      tags: ["ESP8266", "Blynk", "MQTT", "Electronics"],
      icon: <Server size={24} />,
      points: [
        "Built ESP8266-based smart lock with Blynk app control (MQTT).",
        "Designed regulated 12V-3.3V power management.",
        "Added optocouplers for safe isolation between control and lock driver."
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my work across Web Development and Embedded Systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
      title: "MERN Stack",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs"]
    },
    {
      title: "Tools & DB",
      skills: ["Git", "SQL", "VS Code", "Postman"]
    },
    {
      title: "Embedded & Hardware",
      skills: ["Arduino", "Raspberry Pi", "ESP32/ESP8266", "I2C/SPI", "MQTT"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Interests */}
        <div className="mt-12 bg-slate-900 rounded-xl p-8 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="text-yellow-500" size={20} />
                Achievements
              </h3>
              <p className="text-slate-300">Winner of the Vidyapati Award Inter-School Debate Competition.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Hobbies & Interests</h3>
              <div className="flex gap-4 text-slate-300">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Chess</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Cricket</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Reading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Construct the email content using the form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Create the mailto link targeting your email address
    const mailtoLink = `mailto:himanshujha5288@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Trigger the email client
    window.location.href = mailtoLink;

    // Reset the form UI
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400">
            Currently working at Hero Cycles but always open to discussing new technologies, 
            IoT projects, or MERN stack opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-slate-800 rounded-lg text-cyan-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <a href="mailto:himanshujha5288@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  himanshujha5288@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-4 bg-slate-800 rounded-lg text-cyan-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Phone</h4>
                <a href="tel:7520109861" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  +91 7520109861
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-slate-800 rounded-lg text-cyan-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Location</h4>
                <p className="text-slate-400">Ludhiana, Punjab, India</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <h4 className="text-white font-semibold mb-4">Connect on Socials</h4>
              <div className="flex gap-4">
                <a href="https://github.com/Himanshuujha" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/himanshu-jha-34a230249/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="Project details or just saying hi..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={submitted}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
                  submitted 
                    ? 'bg-green-600 cursor-default' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25'
                }`}
              >
                {submitted ? 'Opening Email Client...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 py-8 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-slate-500 text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} Himanshu Kumar Jha. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm font-medium text-slate-500">
        <span>Designed with React & Tailwind</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Adjust for navbar height
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}