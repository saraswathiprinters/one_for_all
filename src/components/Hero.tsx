import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Building, Globe, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { icon: Building, number: "5", label: "Business Ventures" },
    { icon: Users, number: "1000+", label: "Satisfied Clients" },
    { icon: Award, number: "10+", label: "Years Experience" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 to-transparent z-0" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 z-10 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 border border-yellow-300 mb-8"
        >
          <Globe className="w-4 h-4 text-yellow-600 mr-2" />
          <span className="text-sm text-yellow-700 font-inter">Business Portfolio Showcase</span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins"
        >
          <span className="text-gray-800">Chandraa</span>{' '}
          <span className="text-yellow-600">Group</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-inter text-gray-600 leading-relaxed"
        >
          A diverse portfolio of professional businesses serving various industries with excellence. 
          From digital solutions to printing services, we deliver quality and innovation across all ventures.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-center gap-6 mb-5"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-500 text-white rounded-lg font-semibold text-lg shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:bg-yellow-600 transition-all duration-300 font-inter flex items-center justify-center space-x-2"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore Businesses</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Business Highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {[
            "Web Development",
            "Advertising",
            "Events",
            "Printing",
            "Branding"
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-4 py-3 bg-white rounded-lg border border-yellow-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="text-sm text-gray-600 font-inter text-center hover:text-yellow-700 transition-colors duration-300">
                {service}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-yellow-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Business Icons */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-200 rounded-full opacity-70 animate-float flex items-center justify-center">
        <Building className="w-4 h-4 text-yellow-600" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-yellow-300 rounded-full opacity-50 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
        <Globe className="w-5 h-5 text-yellow-700" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-float flex items-center justify-center" style={{ animationDelay: '4s' }}>
        <Users className="w-3 h-3 text-yellow-800" />
      </div>
    </section>
  );
};

export default Hero;