import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Nexus Dashboard",
      description: "Advanced analytics dashboard with real-time data visualization and interactive charts built with React and D3.js.",
      tags: ["React", "TypeScript", "D3.js", "Tailwind"],
      gradient: "from-purple-600 to-pink-600",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Quantum E-Commerce",
      description: "Next-gen e-commerce platform with AI recommendations, AR preview, and blockchain payments.",
      tags: ["Next.js", "Three.js", "WebGL", "Node.js"],
      gradient: "from-blue-600 to-cyan-600",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Neuro Social",
      description: "Social media platform with neural interface, real-time collaboration, and immersive VR spaces.",
      tags: ["React", "WebRTC", "WebGL", "GraphQL"],
      gradient: "from-green-600 to-emerald-600",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Crypto Nexus",
      description: "Cryptocurrency trading platform with advanced charting, AI predictions, and secure wallet integration.",
      tags: ["Vue.js", "Web3", "Firebase", "Chart.js"],
      gradient: "from-orange-600 to-red-600",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 5,
      title: "Meta Learning",
      description: "Interactive learning platform with VR classrooms, AI tutors, and adaptive learning paths.",
      tags: ["React", "A-Frame", "ML", "WebXR"],
      gradient: "from-indigo-600 to-purple-600",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/30 to-transparent z-0" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 font-orbitron"
        >
          <span className="gradient-text">MY WEB PORTFOLIO</span>
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-xl text-center mb-16 max-w-2xl mx-auto font-exo text-gray-300"
        >
          Five powerful websites, each with unique capabilities, combined into one ultimate portfolio
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-400 transition-all duration-500 card-hover shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/30"
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
              
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-white rounded-full animate-pulse" />
                </div>
                
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold font-exo border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold mb-3 font-exo text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 font-exo leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.demoLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-exo font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border border-purple-500 text-purple-400 rounded-lg font-exo font-semibold hover:bg-purple-500/10 transition-all duration-300"
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "5", label: "Websites" },
            { number: "50K+", label: "Users" },
            { number: "99.9%", label: "Uptime" },
            { number: "A+", label: "Performance" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold font-orbitron gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-exo">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;