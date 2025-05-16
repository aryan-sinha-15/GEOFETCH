import { FaHeart, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    {
      title: "Quick Links",
      items: [
        { name: "Home", url: "/" },
        { name: "Emergency", url: "/emergency" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Disaster Preparedness", url: "#" },
        { name: "Safety Tips", url: "#" },
        { name: "First Aid Guide", url: "#" },
        { name: "Government Portals", url: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
        { name: "Data Sources", url: "#" },
        { name: "Disclaimer", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white pt-16 pb-8 shadow-xl">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-6">
              <motion.img
                src="/images/logo-white.png"
                alt="GeoFetch"
                className="h-12 mr-3 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="text-3xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-montserrat tracking-wide"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                GeoFetch
              </motion.span>
            </div>
            <p className="text-blue-200 mb-6 text-lg">
              Your trusted companion for emergency services and local information across India.
            </p>
            <div className="flex space-x-4">
              {[FaTwitter, FaFacebookF, FaLinkedinIn].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5 }}
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300 shadow-md"
                  aria-label="social"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {links.map((column, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <motion.li key={itemIndex} whileHover={{ x: 5 }}>
                    <a href={item.url} className="text-blue-200 hover:text-white transition duration-300 text-lg">
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-blue-200 mb-4 text-lg">Subscribe to our newsletter for safety tips and updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-l-lg focus:outline-none text-gray-800 w-full text-lg"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-r-lg font-bold hover:bg-yellow-300 transition duration-300 text-lg shadow-md"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 mb-4 md:mb-0 text-lg">© {new Date().getFullYear()} GeoFetch. All rights reserved.</p>
          <div className="flex items-center text-blue-300 text-lg">
            <span className="mr-1">Made with</span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <FaHeart className="text-red-400 mx-1 text-lg" />
            </motion.span>
            <span className="ml-1">in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
