import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, User } from 'lucide-react';

interface Website {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  features: string[];
  image: string;
  liveUrl: string;
  status: 'Live' | 'Development';
  role: string;
}

interface WebsiteModalProps {
  website: Website;
  onClose: () => void;
}

const WebsiteModal: React.FC<WebsiteModalProps> = ({ website, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-yellow-300 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-yellow-200 flex justify-between items-center bg-gradient-to-r from-yellow-50 to-white">
            <div>
              <h2 className="text-2xl font-bold font-poppins text-gray-800">{website.title}</h2>
              <p className="text-gray-600 font-inter mt-1">{website.description}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 hover:bg-yellow-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6 bg-white">
            {/* Project Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-3">Service Overview</h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {website.longDescription}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div>
                    <div className="text-sm text-gray-500 font-inter">Category</div>
                    <div className="text-gray-800 font-inter">{website.category}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    website.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <div className="text-sm text-gray-500 font-inter">Status</div>
                    <div className="text-gray-800 font-inter">{website.status}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-yellow-600" />
                  <div>
                    <div className="text-sm text-gray-500 font-inter">Service Type</div>
                    <div className="text-gray-800 font-inter">{website.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-3">Key Services & Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {website.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 font-inter">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-yellow-200">
              <motion.a
                href={website.liveUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-yellow-500 text-white rounded-lg font-inter font-semibold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:bg-yellow-600 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Live Website</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WebsiteModal;