import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaHeadset,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaClock,
  FaBuilding
} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Support",
      details: "support@geofetch.in",
      action: "mailto:support@geofetch.in",
      color: "bg-blue-100 text-blue-600",
      description: "For general inquiries and support"
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Customer Care",
      details: "+91 1800 123 4567",
      action: "tel:+9118001234567",
      color: "bg-green-100 text-green-600",
      description: "24/7 toll-free support line"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Corporate Office",
      details: "123 Tech Park, Bangalore, India",
      action: "https://goo.gl/maps/example",
      color: "bg-purple-100 text-purple-600",
      description: "Visit by appointment only"
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Technical Support",
      details: "support@geofetch.tech",
      action: "mailto:support@geofetch.tech",
      color: "bg-red-100 text-red-600",
      description: "For technical issues and API support"
    }
  ];

  const socialLinks = [
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "https://twitter.com/geofetch",
      color: "hover:bg-blue-400"
    },
    {
      icon: <FaFacebook className="text-xl" />,
      name: "Facebook",
      url: "https://facebook.com/geofetch",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/geofetch",
      color: "hover:bg-blue-800"
    }
  ];

  const faqs = [
    {
      question: "How often is your emergency data updated?",
      answer: "We update our database quarterly and verify critical emergency contacts monthly. Users can also report outdated information through our feedback system."
    },
    {
      question: "Is GeoFetch available in regional languages?",
      answer: "Currently we support English and Hindi, with plans to add more regional languages in future updates."
    },
    {
      question: "Can organizations contribute to your database?",
      answer: "Yes! We welcome contributions from government agencies, NGOs, and verified community organizations. Contact us for partnership opportunities."
    },
    {
      question: "What's your response time for support requests?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. Emergency data corrections are prioritized."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact GeoFetch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional support and value your feedback
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              Contact Options
            </h2>
            
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className={`${method.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <a 
                      href={method.action} 
                      className="text-gray-800 hover:text-blue-600 transition-colors block mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.details}
                    </a>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FaClock className="text-blue-500 mr-2" />
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} bg-gray-100 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FaBuilding className="text-blue-500 mr-2" />
                  Our Headquarters
                </h3>
                <address className="not-italic text-gray-600 mb-4">
                  123 Tech Park,<br />
                  Whitefield, Bangalore<br />
                  Karnataka 560066<br />
                  India
                </address>
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.801075729687!2d77.7248643152705!3d12.9169999908897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13a03000001f%3A0x5e5e3e9b6a8f3a1b!2sTech%20Park!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="GeoFetch Office Location"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Have questions or feedback? Our team typically responds within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;