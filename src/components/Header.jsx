import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiInfo, FiPhone, FiAlertTriangle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <FiHome />, text: "Home" },
    { path: "/emergency", icon: <FiAlertTriangle />, text: "Emergency" },
    { path: "/about", icon: <FiInfo />, text: "About" },
    { path: "/contact", icon: <FiPhone />, text: "Contact" },
  ];

  return (
    <header className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div whileHover={{ rotate: 15 }} className="bg-white p-2 rounded-full shadow-lg">
              <img
                src="/images/logo.png"
                alt="GeoFetch"
                className="h-14 transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
            <motion.span
              className="text-3xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-montserrat tracking-wide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              GeoFetch
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`px-6 py-2 rounded-lg flex items-center transition-all duration-300 shadow-md ${
                    location.pathname === item.path ? "bg-white/30 scale-110 shadow-lg" : "hover:bg-white/20 hover:scale-105"
                  }`}
                >
                  <span className="mr-2 text-xl">{item.icon}</span>
                  <span className="text-lg font-medium">{item.text}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none transition-transform duration-300 active:scale-90"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={34} /> : <FiMenu size={34} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 bg-indigo-900 rounded-lg shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col p-6 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-6 py-3 rounded-lg flex items-center transition-all duration-300 shadow-md ${
                        location.pathname === item.path ? "bg-white/30 scale-110 shadow-lg" : "hover:bg-white/20 hover:scale-105"
                      }`}
                    >
                      <span className="mr-3 text-xl">{item.icon}</span>
                      <span className="text-lg font-medium">{item.text}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
