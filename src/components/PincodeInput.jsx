import { useState, useEffect } from 'react';
import { FaLocationArrow, FaSearch, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PincodeInput = ({ onSearch = () => {}, isLoading = false }) => {
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedPincode = localStorage.getItem('pincode');
    if (savedPincode) setPincode(savedPincode);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6 || !/^\d+$/.test(pincode)) {
      setError('Please enter a valid 6-digit pincode');
      return;
    }
    setError('');
    localStorage.setItem('pincode', pincode);
    onSearch(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to emergency page with pincode as query parameter
      navigate(`/emergency?pincode=${pincode}`);
      onSearch(false);
    } catch (err) {
      setError('Failed to fetch data for this pincode');
      onSearch(false);
    }
  };

  const handleLocationClick = async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setError('');
    onSearch(true);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      
      const { latitude, longitude } = position.coords;
      console.log('User location:', latitude, longitude);
      
      // In a real app, you would reverse geocode to get pincode
      // For demo, we'll use a mock API call
      const mockPincode = await getPincodeFromCoords(latitude, longitude);
      
      setPincode(mockPincode);
      localStorage.setItem('pincode', mockPincode);
      navigate(`/emergency?pincode=${mockPincode}`);
      onSearch(false);
    } catch (err) {
      setError('Unable to retrieve your location');
      onSearch(false);
    }
  };

  // Mock function to simulate getting pincode from coordinates
  const getPincodeFromCoords = async (lat, lng) => {
    // In a real app, you would use a geocoding API here
    // This is a simplified mock implementation
    return new Promise(resolve => {
      setTimeout(() => {
        // Return a pincode based on approximate location
        if (lat > 28.4 && lat < 28.8 && lng > 76.8 && lng < 77.3) {
          resolve('110001'); // Delhi
        } else if (lat > 18.9 && lat < 19.2 && lng > 72.7 && lng < 73.0) {
          resolve('400001'); // Mumbai
        } else if (lat > 12.9 && lat < 13.2 && lng > 80.1 && lng < 80.3) {
          resolve('600001'); // Chennai
        } else {
          resolve('110001'); // Default to Delhi
        }
      }, 1500);
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Find Local Services
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter 6-digit Pincode"
              className="flex-grow px-4 py-3 focus:outline-none"
              maxLength="6"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-3 hover:bg-blue-700 transition duration-300 flex items-center disabled:opacity-70"
            >
              {isLoading ? (
                <FaSpinner className="animate-spin mr-2" />
              ) : (
                <FaSearch className="mr-2" />
              )}
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-full flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <motion.button
              type="button"
              onClick={handleLocationClick}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaLocationArrow className="mr-2" />
              Use My Current Location
            </motion.button>
          </div>
          
          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center py-2 px-4 bg-red-50 rounded-lg"
            >
              {error}
            </motion.p>
          )}
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>We support all Indian pincodes. Your data remains private.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PincodeInput;