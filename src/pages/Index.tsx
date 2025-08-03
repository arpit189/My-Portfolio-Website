
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Sun, Moon, ExternalLink, Download, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      "title": "VisionFlux — AI Image Transformation SaaS",
      "description": "High-throughput AI image transformation platform with sub-500 ms latency, seamless authentication, and integrated monetization for a scalable SaaS experience.",
      "tech": [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Clerk",
        "Cloudinary",
        "Stripe",
        "Shadcn",
        "Tailwind CSS"
      ],
      "github": "https://github.com/arpit189/visionflux",
      "demo": "https://visionflux-demo.com",
      "metrics": [
        "10,000+ images/month processed at < 500 ms latency",
        "99.9% uptime with webhook-driven session sync",
        "500+ Stripe transactions/month",
        "40% reduction in search latency via Cloudinary AI tagging & Atlas Search"
      ]
    },
    
    {
      title: "WeTawk – Real-Time Chat App",
      description: "Scalable MERN architecture supporting 1,000+ concurrent users with JWT auth and MongoDB indexing. Achieved 40% latency reduction using Socket.io (200ms → 120ms) and 35% page load improvement via code splitting & Vite optimizations.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Vite"],
      github: "https://github.com/arpit189/WeTawk",
      demo: "https://wetawk-demo.com",
      metrics: ["40% latency reduction", "1,000+ concurrent users", "35% faster load times"]
    },
    {
      title: "Blogify – Full-Stack Blogging Platform",
      description: "Responsive UI built with Bootstrap 5 + EJS featuring JWT-based authentication and real-time comments. Achieved 40% boost in user engagement through optimized UX and interactive features.",
      tech: ["EJS", "Bootstrap 5", "Node.js", "MongoDB", "JWT", "Socket.io"],
      github: "https://github.com/arpit189/Blogify",
      demo: "https://blogify-demo.com",
      metrics: ["40% engagement boost", "Real-time comments", "JWT authentication"]
    },
  
    {
      "title": "CollegeTips Photo Gallery",
      "description": "An interactive, responsive photo gallery built with React, Vite, and Tailwind CSS. Features a masonry-style grid, smooth hover and scroll animations, smart category filtering, and an accessible fullscreen lightbox experience.",
      "tech": [
        "React",
        "Vite",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "Intersection Observer API"
      ],
      "github": "https://github.com/arpit189/college-tips-gallery",
      "demo": "https://college-tips-gallery.vercel.app",
      "metrics": [
        "Responsive masonry layout (1–4 columns)",
        "Smooth hover & fade-in animations",
        "Keyboard-navigable, touch-friendly lightbox",
        "WCAG 2.1 AA accessibility compliance"
      ]
    }
    
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "C++", level: 92 },
    { name: "Data Structures", level: 90 },
    { name: "Next.js", level: 82 },
    { name: "TailwindCSS", level: 88 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-mono font-bold text-xl bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
            arpit.dev
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('/ArpitShrivastava.cv.pdf', '_blank')}
              className="hidden md:flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Download size={16} />
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">Arpit Shrivastava</span>
            </h1>
            <h2 className="font-mono text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4">
              Full-Stack Developer & DSA Junkie
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto font-sans">
              Building real-time web apps and solving problems one line at a time
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('/ArpitShrivastava.cv.pdf', '_blank')}
                className="flex items-center gap-2 border-indigo-200 dark:border-indigo-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/50"
              >
                <Download size={18} />
                Download Resume
              </Button>
            </div>

            {/* Floating Code Animation */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute top-0 left-0 floating-element opacity-30">
                <code className="font-mono text-indigo-600 dark:text-indigo-400 text-sm bg-white/80 dark:bg-slate-800/80 px-3 py-1 rounded-lg shadow-sm">
                  const developer = "Arpit";
                </code>
              </div>
              <div className="absolute top-20 right-0 floating-element opacity-30" style={{animationDelay: '1s'}}>
                <code className="font-mono text-sky-600 dark:text-sky-400 text-sm bg-white/80 dark:bg-slate-800/80 px-3 py-1 rounded-lg shadow-sm">
                  solve(problem) → solution
                </code>
              </div>
              <div className="absolute bottom-0 left-1/3 floating-element opacity-30" style={{animationDelay: '2s'}}>
                <code className="font-mono text-purple-600 dark:text-purple-400 text-sm bg-white/80 dark:bg-slate-800/80 px-3 py-1 rounded-lg shadow-sm">
                  while(learning) code();
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <h3 className="font-mono text-xl font-semibold mb-3 group-hover:text-indigo-600 transition-colors text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-sans">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white font-mono">Key Metrics:</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 font-sans">
                      {project.metrics.map((metric, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                      <Github size={16} />
                      Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-4 animate-fade-in">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-indigo-500 to-sky-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-6xl font-mono font-bold text-white">AS</span>
              </div>
              
              <div className="text-center mt-6">
                <h3 className="font-mono text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                  BTech IT, IIIT Sonepat
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2 font-sans">
                  8.6 CGPA
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4 font-sans">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">370+ DSA problems solved</span> across platforms
                </p>
                <p className="italic text-slate-600 dark:text-slate-300 font-serif">
                  "Coding is my canvas—philosophy is my color palette"
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 animate-slide-in-right">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
                  I'm a passionate full-stack developer who finds joy in crafting elegant solutions to complex problems. 
                  My journey spans from competitive programming to building scalable web applications that serve thousands of users.
                </p>
                
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
                  Beyond code, I'm fascinated by philosophy and psychology—they shape how I approach problem-solving and user experience. 
                  I believe in teaching what I learn and sharing knowledge with the developer community.
                </p>

                <div className="space-y-4 mt-8">
                  <h4 className="font-mono font-semibold text-lg mb-4 text-slate-900 dark:text-white">Core Skills</h4>
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-800 dark:text-slate-200 font-sans">{skill.name}</span>
                        <span className="text-slate-600 dark:text-slate-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-sky-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button 
                    size="lg"
                    onClick={() => window.open('/ArpitShrivastava.cv.pdf', '_blank')}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download size={18} />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="font-mono text-xl font-semibold mb-6 text-slate-900 dark:text-white">Get In Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-sans">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and philosophy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-indigo-600" size={20} />
                  <span className="text-slate-700 dark:text-slate-300 font-sans">arpit1892004@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-indigo-600" size={20} />
                  <span className="text-slate-700 dark:text-slate-300 font-sans">+91 94244 32975</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-indigo-600" size={20} />
                  <span className="text-slate-700 dark:text-slate-300 font-sans">India</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="icon" className="hover:bg-indigo-100 dark:hover:bg-indigo-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  <Github size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-indigo-100 dark:hover:bg-indigo-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  <Linkedin size={20} />
                </Button>
              </div>
            </div>

            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 animate-slide-in-right">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4 font-sans">
            © 2025 Arpit Shrivastava. Built with React + TailwindCSS
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Github size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Linkedin size={18} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
