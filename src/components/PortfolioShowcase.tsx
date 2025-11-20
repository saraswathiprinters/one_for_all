import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Eye, Monitor, Smartphone, Zap, CheckCircle, Globe } from 'lucide-react';
import WebsiteModal from './WebsiteModal';
import events from '../asstets/chandraevents.png';
import concept from '../asstets/chandraconcept.png';
import ads from '../asstets/chandraads.png';
import sarawathi from '../asstets/saraswathiprinters.png';
import mediaweb6 from '../asstets/mediaweb6.png';
import cityExpress from '../asstets/cityxpress.png';
import sthreeFashion from '../asstets/sthree.png';
import bananaExports from '../asstets/banana.png';
import chandraSignage from '../asstets/singnate.png';

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

  // Add this 👇
  additionalInfo?: {
    services?: string[];
    industriesServed?: string[];
    certifications?: string[];
    markets?: string[];
    productCategories?: string[];
    newsCategories?: string[];
    contact?: {
      email?: string;
      phone?: string;
      address?: string;
    };
    stats?: {
      brandRecallIncrease?: string;
      satisfiedClients?: string;
      customerSatisfaction?: string;
      countriesServed?: string;
    };
  };
}


const PortfolioShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);

  const websites: Website[] = [
  {
    id: 1,
    title: "Media Web 6",
    description: "Creative website, app, and desktop application development",
    longDescription: "A comprehensive digital solutions agency specializing in creating innovative websites, mobile applications, and desktop software. We transform ideas into powerful digital experiences with cutting-edge technology and creative design approaches.",
    category: "Development",
    features: [
      "Custom Website Development",
      "Mobile App Creation",
      "Desktop Applications",
      "UI/UX Design",
      "Digital Strategy Consulting",
      "Ongoing Maintenance & Support"
    ],
    image: mediaweb6,
    liveUrl: "https://mediaweb6.com/",
    status: "Live",
    role: "Digital Solutions Provider"
  },
  {
    id: 2,
    title: "Chandraa Ads",
    description: "All your advertising needs under one roof—delivered seamlessly across multiple channels",
    longDescription: "A full-service advertising agency that consolidates all your marketing needs into one seamless experience. We deliver comprehensive advertising solutions across digital and traditional channels, ensuring consistent brand messaging and maximum reach for your business.",
    category: "Advertising",
    features: [
      "Multi-Channel Advertising",
      "Digital Marketing Campaigns",
      "Social Media Management",
      "Brand Strategy Development",
      "Performance Analytics",
      "Creative Content Production"
    ],
    image: ads,
    liveUrl: "https://chandraaads.com/",
    status: "Live",
    role: "Advertising Solutions Provider"
  },
  {
    id: 3,
    title: "Chandraa Event",
    description: "Crafting memorable events with attention to every detail for seamless and unforgettable experiences",
    longDescription: "An elite event management company dedicated to creating extraordinary experiences. From corporate gatherings to personal celebrations, we handle every detail with precision and creativity, ensuring each event tells your unique story and leaves lasting impressions.",
    category: "Events",
    features: [
      "Corporate Event Planning",
      "Wedding & Celebration Management",
      "Venue Selection & Decoration",
      "Entertainment Coordination",
      "Guest Experience Management",
      "End-to-End Event Execution"
    ],
    image: events,
    liveUrl: "https://chandraaevents.com/",
    status: "Live",
    role: "Event Management Specialist"
  },
  {
    id: 4,
    title: "Saraswathi Printers",
    description: "Professional printing solutions with unmatched quality and reliability for over a decade",
    longDescription: "A trusted printing partner with over ten years of excellence in delivering premium printing services. We specialize in high-quality commercial printing, packaging solutions, and custom print projects for businesses of all sizes, maintaining the highest standards of quality and customer service.",
    category: "Printing",
    features: [
      "Commercial Printing Services",
      "Packaging Solutions",
      "Business Stationery",
      "Marketing Materials",
      "Large Format Printing",
      "Custom Print Projects"
    ],
    image: sarawathi,
    liveUrl: "https://saraswathiprinters.com/",
    status: "Live",
    role: "Printing Services Provider"
  },
  {
    id: 5,
    title: "Chandraa Concept",
    description: "Premium printing service specializing in business stationery, ID cards, and custom branding solutions",
    longDescription: "A specialized printing service provider focused on corporate identity and branding solutions. We excel in creating professional business stationery, secure ID cards, promotional products, and comprehensive branding packages that help businesses establish and maintain a strong market presence.",
    category: "Branding",
    features: [
      "Business Stationery Design",
      "ID Card Production",
      "Promotional Products",
      "Corporate Branding Packages",
      "Logo & Identity Design",
      "Brand Consistency Solutions"
    ],
    image: concept,
    liveUrl: "https://chandraaconcepts.com/",
    status: "Live",
    role: "Branding & Printing Specialist"
  },
  {
    id: 6,
    title: "Chandra Digital Signage",
    description: "Transform your space with innovative digital signage solutions that engage, inform, and inspire",
    longDescription: "A comprehensive digital signage solutions provider specializing in cutting-edge display technology for businesses across various industries. We deliver end-to-end digital signage solutions including cloud management, 4K displays, interactive kiosks, and custom advertising displays that revolutionize customer engagement and brand communication.",
    category: "Digital Signage",
    features: [
      "Cloud-Based Management Platform",
      "4K Ultra HD Display Solutions",
      "Interactive Touchscreen Kiosks",
      "Smart Content Scheduling",
      "Real-time Content Updates",
      "Multi-location Display Management",
      "Custom Advertising Solutions",
      "24/7 Technical Support"
    ],
    image: chandraSignage, // Make sure to import this image
    liveUrl: "https://chandraadigitalsignage.com/",
    status: "Live",
    role: "Digital Signage Solutions Provider",
    additionalInfo: {
      services: [
        "Sunback Sheets - Outdoor advertising displays",
        "Standee Models - Custom free-standing displays",
        "In-Shop Displays - Retail visibility solutions",
        "Custom Display Racks - Tailored merchandising",
        "Promotional Canopies - Branded shade solutions",
        "Advertising Kiosks - Standalone promotional units",
        "Printed Advertising Umbrellas - Mobile branding",
        "Helium Promotional Balloons - Aerial visibility",
        "Party Decorations - Themed installations",
        "Promotional Stalls - Exhibition solutions",
        "Vehicle Road Shows - Mobile advertising",
        "Wall & Floor Branding - Custom installations"
      ],
      industriesServed: [
        "Retail",
        "Corporate",
        "Healthcare", 
        "Education",
        "Transportation",
        "Commercial",
        "Hospitality"
      ],
      contact: {
        email: "chandraadigitalsignage@gmail.com",
        phone: "+91 95852 72027",
        address: "Coimbatore, Tamil Nadu"
      },
      stats: {
        brandRecallIncrease: "78%",
        satisfiedClients: "50+",
        customerSatisfaction: "98%",
        countriesServed: "5+"
      }
    }
  },
  {
    id: 7,
    title: "Banana Milk Exports",
    description: "Premium banana powder manufacturer and exporter serving global markets with certified quality standards",
    longDescription: "A leading manufacturer and global exporter of premium banana powder with ISO 22000, HACCP, and GMP certifications. We serve 50+ countries with high-quality, preservative-free banana powder for food, pharmaceutical, and cosmetic industries, ensuring consistent quality and reliable supply chain.",
    category: "Export & Manufacturing",
    features: [
      "ISO 22000 Certified Manufacturing",
      "100% Natural & Preservative-Free",
      "Custom Mesh Size (40-120)",
      "Bulk Export Packaging",
      "Global Quality Standards",
      "Dedicated Account Management"
    ],
    image: bananaExports, // Make sure to import this image
    liveUrl: "https://bananamikexport.netlify.app/",
    status: "Live",
    role: "Banana Powder Manufacturer & Exporter",
    additionalInfo: {
      certifications: [
        "ISO 22000:2018",
        "HACCP Certified",
        "GMP Compliant", 
        "FSSAI Approved",
        "USFDA Registered",
        "EU Compliant"
      ],
      markets: [
        "Baby Food Manufacturers",
        "Bakery & Confectionery",
        "Beverage Industry",
        "Nutraceuticals",
        "Cosmetics & Personal Care",
        "Industrial Food Processing"
      ],
      contact: {
        email: "exports@bananamilk.com",
        phone: "+91 98765 43210",
        address: "Export Processing Zone, Industrial Area, India 560001"
      }
    }
  },
  {
    id: 8,
    title: "SthRee Fashion",
    description: "Discover the finest collection of traditional and contemporary Indian clothing",
    longDescription: "An exclusive online fashion destination offering premium traditional Indian wear including sarees, salwars, kurtis, and accessories. We bring you carefully curated collections that blend traditional craftsmanship with contemporary designs, delivered with exceptional customer service.",
    category: "E-commerce Fashion",
    features: [
      "Premium Saree Collections",
      "Traditional & Contemporary Designs",
      "Size Guide & Fit Assistance",
      "Secure Online Shopping",
      "Nationwide Delivery",
      "Customer-Centric Returns Policy"
    ],
    image: sthreeFashion, // Make sure to import this image
    liveUrl: "https://sthree.co.in/",
    status: "Live",
    role: "Online Fashion Retailer",
    additionalInfo: {
      productCategories: [
        "Sarees",
        "Salwar",
        "Kurti & Tops", 
        "Kids Wear",
        "New Born Collection",
        "Home Wear",
        "Accessories",
        "Mens Collection"
      ],
      contact: {
        email: "sthreetrendz2025@gmail.com",
        phone: "+91 89032 84455",
        address: "65, Tatabad 1st Street, Coimbatore - 641 012"
      }
    }
  },
  {
    id: 9,
    title: "Vanakkam City Xpress",
    description: "நம்பிக்கையுடன் வாசிக்கப்படும் தமிழ் செய்தி தளம் - Trusted Tamil News Platform",
    longDescription: "A comprehensive Tamil news platform delivering reliable and timely news coverage across politics, world affairs, sports, cinema, technology, and more. We are committed to providing accurate, unbiased news reporting in Tamil language, serving the global Tamil-speaking community.",
    category: "News & Media",
    features: [
      "Comprehensive News Coverage",
      "Real-time News Updates",
      "Multi-category Content",
      "Tamil Language Focus",
      "Mobile-Optimized Platform",
      "Regular Content Updates"
    ],
    image: cityExpress, // Make sure to import this image
    liveUrl: "https://vanakamcityxpress.com/",
    status: "Live",
    role: "Tamil News Portal",
    additionalInfo: {
      newsCategories: [
        "மாநில செய்திகள் - State News",
        "தேசிய செய்திகள் - National News", 
        "உலக செய்திகள் - World News",
        "விளையாட்டு செய்திகள் - Sports News",
        "சினிமா - Cinema",
        "தொழில்நுட்பம் - Technology"
      ],
      contact: {
        email: "contact@cityexpress.in",
        phone: "+91 98765 43210",
        address: "Chennai, Tamil Nadu"
      }
    }
  },
  {
  id: 10,
  title: "Focus Yellow Pages",
  description: "Tamil Nadu’s trusted local business directory for finding services, shops, and professionals",
  longDescription: "Focus Yellow Pages is a comprehensive local business directory designed to help users discover trusted businesses, services, and professionals across Tamil Nadu. From apparels to healthcare, printing to logistics, and restaurants to home services, the platform offers seamless navigation, category filtering, district selection, business reviews, and premium listing features to boost visibility for local businesses.",
  category: "Business Directory",
  features: [
    "Local Business Search",
    "District-Based Listings",
    "Customer Reviews",
    "Verified Business Profiles",
    "Featured & Premium Listings",
    "Category-Based Filters",
    "Business Contact Details",
    "Add Your Business Portal"
  ],
  image: focusYellowPages, // make sure to import image
  liveUrl: "http://focusyellowpages.com/",
  status: "Live",
  role: "Local Business Search Engine",
  additionalInfo: {
    availableDistricts: [
      "Coimbatore",
      "Erode",
      "Ooty",
      "Pollachi"
    ],
    topCategories: [
      "Apparels & Accessories",
      "Food & Beverages",
      "Beauty & Wellness",
      "Education",
      "Health",
      "Wedding & Events",
      "Logistics Services",
      "Printing & Stationaries"
    ],
    featuredBusinesses: [
      "Elite Men's Fashion",
      "Bella Boutique"
    ],
    directoryStats: {
      totalBusinesses: "28",
      verifiedBusinesses: "27",
      categories: "8",
      avgRating: "4.5"
    },
    contact: {
      phone: "8110001814",
      email: "yellowpagesindiateam@gmail.com",
      address: "India"
    }
  }
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
    <section id="portfolio" className="py-20 relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-yellow-200/20 to-transparent z-0" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 z-10"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
            <span className="text-gray-800">Our</span>{' '}
            <span className="text-yellow-600">Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Explore our diverse portfolio of professional services and business ventures.
          </p>
        </motion.div>

        {/* Websites Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {websites.map((website, index) => (
            <motion.div
              key={website.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-yellow-200 hover:border-yellow-400 transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-inter font-semibold ${
                website.status === 'Live' 
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : 'bg-yellow-100 text-yellow-700 border border-yellow-300'
              }`}>
                {website.status}
              </div>

              {/* Image/Preview Area */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <img 
                  src={website.image} 
                  alt={website.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-50" />
                
                {/* Mock Browser Window */}
                <div className="absolute top-3 left-3 right-3 bg-white/90 rounded-t-lg h-6 flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-inter font-semibold border border-gray-300">
                    {website.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold mb-3 font-poppins text-gray-800 group-hover:text-yellow-600 transition-all duration-300">
                  {website.title}
                </h3>
                <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                  {website.description}
                </p>
                
                {/* Key Features Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {website.features.slice(0, 3).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-inter border border-yellow-300"
                    >
                      {feature.split(' ')[0]}
                    </span>
                  ))}
                  {website.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-inter">
                      +{website.features.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedWebsite(website)}
                    className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-lg font-inter font-semibold text-sm hover:bg-yellow-600 shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </motion.button>
                  
                  <motion.a
                    href={website.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-yellow-500/20 transition-all duration-300 border border-gray-300 hover:border-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-600 hover:text-yellow-600" />
                    <span className="text-sm font-inter text-gray-600 hover:text-yellow-600">Visit Site</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Website Modal */}
      {selectedWebsite && (
        <WebsiteModal
          website={selectedWebsite}
          onClose={() => setSelectedWebsite(null)}
        />
      )}
    </section>
  );
};

export default PortfolioShowcase;