import { useState } from 'react';
import PincodeInput from '../components/PincodeInput';
import {
  FaMapMarkerAlt,
  FaHospital,
  FaShieldAlt,
  FaUserShield,
  FaFirstAid,
  FaWater,
  FaPhone,
  FaInfoCircle,
  FaSearch,
  FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const [searchMode, setSearchMode] = useState('pincode'); // 'pincode' or 'location'

  // Common emergency numbers in India
  const emergencyNumbers = [
    { service: "Police", number: "100" },
    { service: "Ambulance", number: "108" },
    { service: "Fire", number: "101" },
    { service: "Women Helpline", number: "1091" }
  ];

  const features = [
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: "Precise Location Mapping",
      desc: "Get accurate local information based on your exact pincode or GPS coordinates with our advanced geolocation technology.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Emergency Response",
      desc: "Immediate access to police stations, fire departments, and other critical safety services in your vicinity.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaHospital className="text-4xl" />,
      title: "Medical Assistance",
      desc: "Find the nearest hospitals, clinics, and ambulance services with contact numbers and estimated response times.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "Women's Safety",
      desc: "Direct links to women's helplines, safety apps, and nearby protection services available 24/7.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <FaFirstAid className="text-4xl" />,
      title: "Disaster Preparedness",
      desc: "Emergency contacts and procedures for natural disasters like floods, earthquakes, and cyclones.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaWater className="text-4xl" />,
      title: "Utilities & Services",
      desc: "Contact information for water, electricity, and other essential municipal services in your area.",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const testimonials = [
    {
      quote: "GeoFetch helped me find the nearest hospital during an emergency. The one-click calling feature was a lifesaver!",
      author: "Rahul Sharma, Delhi",
      role: "Resident"
    },
    {
      quote: "As a woman traveling alone, having quick access to safety contacts gives me peace of mind wherever I go in India.",
      author: "Priya Patel, Mumbai",
      role: "Business Traveler"
    },
    {
      quote: "During the floods last year, GeoFetch's disaster contacts helped our community coordinate rescue efforts.",
      author: "Arjun Nair, Kerala",
      role: "Community Leader"
    }
  ];

  const coverageStats = [
    { value: "28", label: "States" },
    { value: "8", label: "Union Territories" },
    { value: "100k+", label: "Local Services" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Simple navigation breadcrumbs */}
      <div className="bg-white border-b shadow-sm py-3">
        <div className="container mx-auto px-4 flex items-center text-sm">
          <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Find Emergency Services</span>
        </div>
      </div>

      {/* Hero Section with Context */}
      <div className="relative text-center py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat">
              Welcome to GeoFetch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">
              Your comprehensive emergency services directory for all of India
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Find instant access to critical services in your area through pincode or location-based search. 
              Available across all 28 states and 8 union territories.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {emergencyNumbers.map((item, index) => (
                <a 
                  key={index}
                  href={`tel:${item.number}`} 
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
                >
                  <FaPhone /> {item.service}: <span className="font-bold">{item.number}</span>
                </a>
              ))}
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/emergency-services.png" 
                alt="Emergency Services" 
                className="h-40 object-contain" 
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Coverage Stats */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {coverageStats.map((stat, index) => (
              <div key={index} className="px-8 py-3 text-center">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Search Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-20"
        >
          <div className="p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
              Find Local Emergency Services
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Enter your pincode to locate critical services in your area including hospitals, 
              police stations, fire stations, and more
            </p>
            
            {/* Search mode tabs */}
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                <button 
                  onClick={() => setSearchMode('pincode')} 
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                    searchMode === 'pincode' 
                      ? 'bg-white shadow-sm text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <FaSearch size={14} /> By Pincode
                </button>
                <button 
                  onClick={() => setSearchMode('location')} 
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                    searchMode === 'location' 
                      ? 'bg-white shadow-sm text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <FaMapMarkerAlt size={14} /> Current Location
                </button>
              </div>
            </div>
            
            <PincodeInput onSearch={(query) => console.log('Searching:', query)} />
            
            <div className="mt-6 text-center text-gray-500 text-sm">
              <div className="flex items-center justify-center gap-1">
                <FaInfoCircle size={14} /> 
                <span>Your data is kept private and secure</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Use GeoFetch Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Comprehensive Emergency Support
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            GeoFetch connects you with critical services across India with accurate, up-to-date information
            that could make all the difference in an emergency situation.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How GeoFetch Helps You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-full w-16 h-16 flex items-center justify-center text-white mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Enter Your Pincode</h3>
                <p className="text-gray-600">Type in your 6-digit pincode to locate services in your area</p>
              </div>
              <div className="hidden md:block text-gray-300">
                <FaArrowRight size={20} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Browse Services</h3>
                <p className="text-gray-600">View all emergency and essential services available near you</p>
              </div>
              <div className="hidden md:block text-gray-300">
                <FaArrowRight size={20} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Connect Instantly</h3>
                <p className="text-gray-600">Tap to call or get directions with a single click</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            What People Are Saying
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from real users who have benefited from our services during critical situations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-gray-800 font-medium">
                    - {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mb-20">
          <p className="text-center text-gray-500 mb-6">TRUSTED BY</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="h-12 flex items-center">
              <span className="text-gray-400 font-medium">National Disaster Management Authority</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="text-gray-400 font-medium">Ministry of Health & Family Welfare</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="text-gray-400 font-medium">National Institute of Disaster Management</span>
            </div>
          </div>
        </div>

        {/* Emergency Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Access emergency contacts anytime, anywhere across India
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/emergency" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 text-lg"
            >
              View Emergency Contacts
            </a>
            <a 
              href="tel:100" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition duration-300 text-lg"
            >
              Call Police (100)
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mini version of the copyright info (not a full footer) */}
      <div className="bg-gray-50 py-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} GeoFetch. All rights reserved.</p>
        <p className="mt-1">Serving all regions of India with critical emergency information.</p>
      </div>
    </div>
  );
};

export default Home;