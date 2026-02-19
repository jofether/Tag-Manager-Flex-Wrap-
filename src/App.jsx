import React, { useState } from 'react';

function App() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState(new Set());

  const skills = [
    "JavaScript", "React", "Tailwind CSS", "Node.js", "TypeScript",
    "Python", "API Design", "GraphQL", "REST", "Docker",
    "AWS", "Git", "UI/UX Design", "Responsive Design", "Performance",
    "Accessibility", "Testing", "Agile", "Git Actions", "Kubernetes"
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Dashboard Platform",
      description: "A comprehensive analytics dashboard with real-time data visualization",
      tech: ["React", "Tailwind CSS", "GraphQL", "Node.js"],
      image: "🎨",
      color: "from-purple-400 to-pink-600",
      details: "Built a real-time analytics dashboard that processes 10k+ events per minute with WebSocket updates and beautiful data visualizations."
    },
    {
      id: 2,
      title: "E-Commerce Solution",
      description: "Full-stack e-commerce platform with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      color: "from-blue-400 to-cyan-600",
      details: "Complete e-commerce system featuring user authentication, product management, shopping cart, and secure payment processing with Stripe integration."
    },
    {
      id: 3,
      title: "AI-Powered Chat App",
      description: "Real-time messaging with intelligent features",
      tech: ["React", "Firebase", "AI API", "Tailwind"],
      image: "💬",
      color: "from-green-400 to-emerald-600",
      details: "Chat application with AI-powered assistance, real-time notifications, file sharing, and beautiful message animations."
    },
    {
      id: 4,
      title: "Design System Library",
      description: "Reusable component library for consistent UI",
      tech: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
      image: "🎯",
      color: "from-orange-400 to-red-600",
      details: "Comprehensive design system with 50+ customizable components, accessibility compliance, and comprehensive documentation for teams."
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "24", icon: "📦" },
    { label: "Happy Clients", value: "18", icon: "👥" },
    { label: "Technologies", value: "35+", icon: "⚡" },
    { label: "Years Experience", value: "8", icon: "⭐" }
  ];

  const toggleSkill = (skill) => {
    const newSkills = new Set(selectedSkills);
    if (newSkills.has(skill)) {
      newSkills.delete(skill);
    } else {
      newSkills.add(skill);
    }
    setSelectedSkills(newSkills);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="backdrop-blur-md bg-slate-900/50 border-b border-slate-700/50 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center font-bold">
                  PM
                </div>
                <span className="font-bold text-lg">Portfolio</span>
              </div>
              <div className="hidden md:flex gap-8">
                <a href="#" className="hover:text-purple-400 transition">About</a>
                <a href="#" className="hover:text-purple-400 transition">Projects</a>
                <a href="#" className="hover:text-purple-400 transition">Skills</a>
                <a href="#" className="hover:text-purple-400 transition">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-20">
            <h1 className="text-6x md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Creative Developer
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Crafting beautiful, functional digital experiences with modern technologies and innovative design thinking.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-t-r from-purple-500 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 font-semibold">
                View My Work
              </button>
              <button className="px-8 py-3 border border-slate-500 rounded-lg hover:border-purple-400 transition font-semibold">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-8 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-400/50 transition">
                <div className="text-4xl mx-auto mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-slate-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="flex gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-400/50 transition cursor-pointer group -mx-4"
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <div className={`bg-gradient-to-br ${project.color} h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition`}>
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  
                  {expandedProject === project.id && (
                    <div className="mb-4 p-4 bg-slate-900/50 rounded-lg border border-slate-600/50 animate-in fade-in">
                      <p className="text-slate-200">{project.details}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700/50 text-sm rounded-full text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition">
                    {expandedProject === project.id ? "Less details" : "More details"}
                    <span style={{display: 'inline-block', transform: expandedProject === project.id ? 'rotate(180deg)' : '', transition: 'transform 0.3s'}}>▼</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-32">
            <p className="text-slate-300 mb-6">Click to select skills</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    selectedSkills.has(skill)
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:border-purple-400/50'
                  }`}
                >
                  {skill}
                  {selectedSkills.has(skill) && <span className="ml-2">✓</span>}
                </button>
              ))}
            </div>
            <div className="mt-8 p-4 bg-slate-900/50 rounded-lg">
              <p className="text-slate-400">
                {selectedSkills.size === 0
                  ? 'Select skills to see more details'
                  : `Selected: ${Array.from(selectedSkills).join(', ')}`}
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur border border-purple-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. I'm always excited to work on creative and challenging problems.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition font-semibold flex items-center gap-2">
                ✉️ Send me an Email
              </button>
              <button className="px-8 py-3 border border-white rounded-lg hover:border-purple-400 transition font-semibold flex items-center gap-2 text-white bg-slate-100">
                🔗 GitHub Profile
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-700/50 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Work</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400 transition">Projects</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Experience</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400 transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">GitHub</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Articles</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400">
            <p>© 2024 Creative Developer. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
