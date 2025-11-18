import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PortfolioShowcase from './components/PortfolioShowcase';
import WebsiteModal from './components/WebsiteModal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen professional-gradient text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <PortfolioShowcase />
    </div>
  );
};

export default App;