import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Briefcase, User, Home } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-professional-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer"
        >
          <div className="w-10 h-10 blue-gradient rounded-full mr-3 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold font-poppins text-white">
            Portfolio<span className="text-gradient">Pro</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, color: '#3B82F6' }}
                className="text-professional-light hover:text-professional-light-blue transition-colors duration-300 font-inter font-medium flex items-center space-x-2"
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : '100%' }}
          className="fixed top-0 right-0 h-full w-64 bg-professional-navy/95 backdrop-blur-md md:hidden flex flex-col justify-center items-center space-y-8"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-inter text-white hover:text-professional-light-blue transition-colors duration-300 flex items-center space-x-3"
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;