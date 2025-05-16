import { motion } from 'framer-motion';
import { 
  FaGlobeAsia, 
  FaShieldAlt, 
  FaUsers, 
  FaDatabase,
  FaChartLine,
  FaMobileAlt,
  
} from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaGlobeAsia className="text-4xl" />,
      title: "Nationwide Coverage",
      desc: "GeoFetch provides comprehensive emergency service information across all 28 states and 8 union territories of India, ensuring you're covered wherever you travel.",
      color: "text-blue-600"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Verified Data",
      desc: "Our team regularly updates and verifies all contact information with local authorities to ensure you get accurate, reliable data when you need it most.",
      color: "text-purple-600"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "User Focused",
      desc: "Designed with real emergency situations in mind, GeoFetch prioritizes quick access, simple navigation, and one-tap calling for critical services.",
      color: "text-green-600"
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Comprehensive Database",
      desc: "With thousands of verified contacts and locations, we maintain one of India's most complete directories of emergency and essential services.",
      color: "text-red-600"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Continuous Improvement",
      desc: "We constantly analyze usage patterns and user feedback to enhance our services and add new features that address real needs.",
      color: "text-yellow-600"
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile Optimized",
      desc: "GeoFetch works perfectly on all devices, ensuring you can access critical information even on slower mobile networks during emergencies.",
      color: "text-indigo-600"
    }
  ];

  const team = [
    {
      name: "Dr. Ananya Sharma",
      role: "Public Safety Expert",
      bio: "Former disaster management officer with 15 years experience in emergency response systems.",
      img: "/images/team1.jpg"
    },
    {
      name: "Raj Patel",
      role: "Technology Lead",
      bio: "Software engineer specializing in location-based services and civic technology.",
      img: "/images/team2.jpg"
    },
    {
      name: "Priya Desai",
      role: "Community Outreach",
      bio: "Works with local governments and NGOs to verify and expand our service database.",
      img: "/images/team3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About GeoFetch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering citizens with instant access to emergency services across India
          </p>
          <div className="mt-10">
            <img 
              src="/images/about-hero.jpg" 
              alt="Emergency Services Team" 
              className="rounded-xl shadow-lg max-w-4xl mx-auto"
            />
          </div>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              GeoFetch was born from a simple idea: <strong>no one should struggle to find help during an emergency</strong>. 
              In 2018, after witnessing the challenges people faced during the Kerala floods, our founders set out to create 
              a comprehensive, easy-to-use directory of emergency services for all of India.
            </p>
            <p className="text-gray-700 mb-6">
              Today, GeoFetch serves millions of users across the country, providing instant access to verified emergency contacts, 
              medical services, and safety information - all organized by location and available with just a few taps.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-800 mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To become India's most trusted emergency information platform, saving lives by connecting people with help when seconds matter most.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
            <ol className="list-decimal list-inside space-y-6 text-gray-700">
              <li>
                <strong>Location-Based Search</strong>: Enter any Indian pincode or allow location access to automatically 
                find services near you. Our system covers over 99% of inhabited pincodes in India.
              </li>
              <li>
                <strong>Verified Contacts</strong>: Get direct phone numbers for police stations, hospitals, fire departments, 
                and other emergency services specific to your location.
              </li>
              <li>
                <strong>One-Tap Calling</strong>: Contact any service immediately with our integrated calling feature - no need 
                to manually dial numbers during emergencies.
              </li>
              <li>
                <strong>Comprehensive Categories</strong>: From medical emergencies to natural disasters, women's safety to 
                child protection, we organize services by type for quick access.
              </li>
            </ol>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose GeoFetch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className={`${feature.color} mb-6`}>{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to experience GeoFetch?
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Start exploring emergency services in your area today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 text-lg"
            >
              Search by Pincode
            </a>
            <a 
              href="/emergency" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition duration-300 text-lg"
            >
              View All Contacts
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;