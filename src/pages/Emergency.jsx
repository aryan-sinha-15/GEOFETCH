import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaHospital, 
  FaShieldAlt, 
  FaFemale, 
  FaChild,
  FaAmbulance,
  FaFire,
  FaInfoCircle,
  FaSpinner,
  FaArrowLeft
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { stateData } from '../data/stateData';
import { useEffect, useState } from 'react';

const EmergencyServicesDirectory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const pincode = searchParams.get('pincode') || localStorage.getItem('pincode');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const fetchData = async () => {
      if (!pincode) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        // Simulate API call with loading state
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const state = getStateFromPincode(pincode);
        const district = getDistrictFromPincode(pincode);
        
        const stateInfo = stateData[state] || stateData.default;
        const districtInfo = stateInfo.districts?.[district] || {};
        
        // Merge state and district data with priority to district-level services
        const mergedData = {
          state: stateInfo.name || state,
          district: districtInfo.name || district,
          ...stateInfo,
          police: [...(districtInfo.police || []), ...(stateInfo.police || [])],
          medical: [...(districtInfo.medical || []), ...(stateInfo.medical || [])],
          womenHelpline: districtInfo.womenHelpline || stateInfo.womenHelpline,
          childHelpline: districtInfo.childHelpline || stateInfo.childHelpline,
          additionalServices: districtInfo.additionalServices || stateInfo.additionalServices || []
        };
        
        setData(mergedData);
        setLastUpdated(new Date().toLocaleDateString());
      } catch (err) {
        setError('Failed to load emergency services data. Please try again later.');
        console.error('Error fetching emergency data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pincode]);

  const getStateFromPincode = (pincode) => {
    if (!pincode) return 'default';
    
    // First 1-2 digits often indicate the region/state
    const firstTwo = pincode.substring(0, 2);
    
    // Comprehensive pincode to state mapping
    const pincodeMap = {
      '11': 'delhi',
      '12': 'haryana',
      '13': 'haryana',
      '14': 'punjab',
      '15': 'punjab',
      '16': 'chandigarh',
      '17': 'himachal-pradesh',
      '18': 'jammu-kashmir',
      '19': 'jammu-kashmir',
      '20': 'uttar-pradesh',
      '21': 'uttar-pradesh',
      '22': 'uttar-pradesh',
      '23': 'uttar-pradesh',
      '24': 'uttarakhand',
      '25': 'uttarakhand',
      '26': 'bihar',
      '27': 'bihar',
      '28': 'west-bengal',
      '30': 'rajasthan',
      '31': 'rajasthan',
      '32': 'rajasthan',
      '33': 'rajasthan',
      '34': 'rajasthan',
      '36': 'gujarat',
      '37': 'gujarat',
      '38': 'gujarat',
      '39': 'gujarat',
      '40': 'maharashtra',
      '41': 'maharashtra',
      '42': 'maharashtra',
      '43': 'maharashtra',
      '44': 'maharashtra',
      '45': 'madhyapradesh',
      '46': 'madhyapradesh',
      '47': 'madhyapradesh',
      '48': 'madhyapradesh',
      '49': 'chhattisgarh',
      '50': 'telangana',
      '51': 'andhra-pradesh',
      '52': 'andhra-pradesh',
      '53': 'andhra-pradesh',
      '56': 'karnataka',
      '57': 'karnataka',
      '58': 'karnataka',
      '59': 'karnataka',
      '60': 'tamil-nadu',
      '61': 'tamil-nadu',
      '62': 'tamil-nadu',
      '63': 'tamil-nadu',
      '64': 'tamil-nadu',
      '67': 'kerala',
      '68': 'kerala',
      '69': 'kerala',
      '70': 'west-bengal',
      '71': 'west-bengal',
      '72': 'west-bengal',
      '73': 'west-bengal',
      '74': 'odisha',
      '75': 'odisha',
      '76': 'odisha',
      '78': 'assam',
      '79': 'assam',
      '80': 'bihar',
      '81': 'jharkhand',
      '82': 'jharkhand',
      '83': 'jharkhand',
      '84': 'bihar',
      '85': 'bihar'
    };
    
    return pincodeMap[firstTwo] || 'default';
  };

  const getDistrictFromPincode = (pincode) => {
    // In a real app, you would have a proper pincode to district mapping
    const pincodeToDistrict = {
      '110001': 'new-delhi',
      '400001': 'mumbai-city',
      '600001': 'chennai',
      '700001': 'kolkata',
      '500001': 'hyderabad',
      '560001': 'bangalore-urban',
      '302001': 'jaipur',
      '380001': 'ahmedabad',
      '141001': 'ludhiana',
      '144001': 'jalandhar'
      // Add more mappings as needed
    };
    
    return pincodeToDistrict[pincode] || 'default';
  };

  const ServiceCard = ({ 
    icon, 
    title, 
    items, 
    color = 'blue', 
    description,
    className = ''
  }) => (
    <motion.div 
      whileHover={{ y: -3 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-${color}-500 ${className}`}
    >
      <div className={`bg-gradient-to-r from-${color}-600 to-${color}-700 p-4 text-white`}>
        <div className="flex items-center">
          <div className="p-2 bg-white/20 rounded-full mr-3">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && <p className="text-xs opacity-80 mt-1">{description}</p>}
          </div>
        </div>
      </div>
      <div className="p-5">
        {items?.length > 0 ? (
          <ul className="space-y-4">
            {items.map((service, index) => (
              <li key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{service.name}</h4>
                    {service.location && (
                      <p className="text-sm text-gray-600 mt-1 flex items-center">
                        <FaMapMarkerAlt className="mr-1.5 text-xs" /> 
                        <span>{service.location}</span>
                      </p>
                    )}
                    {service.hours && (
                      <p className="text-xs text-gray-500 mt-1.5 flex items-center">
                        <FaInfoCircle className="mr-1.5 text-xs" /> 
                        <span>{service.hours}</span>
                      </p>
                    )}
                  </div>
                  <a 
                    href={`tel:${service.number}`}
                    className={`bg-${color}-50 text-${color}-700 hover:bg-${color}-100 px-4 py-2 rounded-md flex items-center justify-center min-w-[140px] transition-colors`}
                  >
                    <FaPhone className="mr-2 text-sm" /> 
                    <span className="font-medium">{service.number}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-6 text-center">
            <p className="text-gray-500">No services available for this category</p>
          </div>
        )}
      </div>
    </motion.div>
  );

  const QuickContactCard = ({ 
    icon, 
    title, 
    number, 
    description, 
    color = 'blue',
    className = ''
  }) => (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-${color}-500 ${className}`}
    >
      <div className={`bg-gradient-to-r from-${color}-600 to-${color}-700 p-5 text-white`}>
        <div className="flex items-center">
          <div className="p-2 bg-white/20 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-5 text-center">
        <a 
          href={`tel:${number}`}
          className={`text-3xl font-bold text-${color}-600 hover:text-${color}-800 transition-colors block mb-3`}
        >
          {number}
        </a>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <FaSpinner className="animate-spin text-4xl text-blue-600 mb-6 mx-auto" />
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            Loading Emergency Services
          </h2>
          <p className="text-gray-600">
            Fetching services for pincode: <span className="font-semibold">{pincode}</span>
          </p>
          <div className="mt-6 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 animate-pulse" style={{ width: '70%' }} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full border border-red-100">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Unable to Load Data</h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Retry
              </button>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaArrowLeft className="mr-2" /> Back to Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Emergency Services Directory</h1>
              {pincode && (
                <p className="mt-1 text-sm text-gray-600">
                  Services for {data?.district ? `${data.district}, ` : ''}{data?.state || ''} (Pincode: {pincode})
                </p>
              )}
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaArrowLeft className="mr-2" /> Change Location
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!pincode ? (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
              <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Location Selected</h3>
            <p className="text-gray-600 mb-6">
              Please enter a pincode or use your current location to view emergency services.
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Search by Pincode
            </button>
          </div>
        ) : !data ? (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Services Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find emergency services for pincode: <span className="font-medium">{pincode}</span>
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try Another Pincode
            </button>
          </div>
        ) : (
          <>
            {/* Emergency Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Main Services Column */}
              <div className="lg:col-span-2 space-y-6">
                <ServiceCard
                  icon={<FaShieldAlt className="text-lg" />}
                  title="Police & Safety"
                  items={data.police}
                  color="blue"
                  description="Local police stations and emergency contacts"
                />
                
                <ServiceCard
                  icon={<FaHospital className="text-lg" />}
                  title="Medical Services"
                  items={data.medical}
                  color="green"
                  description="Hospitals, clinics and emergency medical contacts"
                />
              </div>
              
              {/* Quick Contacts Column */}
              <div className="space-y-6">
                <QuickContactCard
                  icon={<FaAmbulance className="text-lg" />}
                  title="Emergency Ambulance"
                  number="102"
                  description="24/7 emergency medical transport"
                  color="red"
                />
                
                <QuickContactCard
                  icon={<FaFire className="text-lg" />}
                  title="Fire Department"
                  number="101"
                  description="Fire and rescue services"
                  color="orange"
                />
              </div>
            </div>
            
            {/* Specialized Helplines */}
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Specialized Helplines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ServiceCard
                icon={<FaFemale className="text-lg" />}
                title="Women's Helpline"
                items={data.womenHelpline ? [{ name: "Women's Emergency Helpline", number: data.womenHelpline }] : []}
                color="pink"
                description="24/7 support for women in distress"
                className="h-full"
              />
              
              <ServiceCard
                icon={<FaChild className="text-lg" />}
                title="Child Helpline"
                items={data.childHelpline ? [{ name: "Child Emergency Helpline", number: data.childHelpline }] : []}
                color="purple"
                description="Protection and support for children"
                className="h-full"
              />
            </div>
            
            {/* Additional Resources */}
            {data.additionalServices?.length > 0 && (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Additional Emergency Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {data.additionalServices.map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="bg-white rounded-lg shadow-sm p-5 border border-gray-100"
                    >
                      <h3 className="font-medium text-gray-900 mb-2">{service.name}</h3>
                      <a 
                        href={`tel:${service.number}`}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        <FaPhone className="mr-2 text-sm" /> {service.number}
                      </a>
                      {service.description && (
                        <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </>
            )}
            
            {/* Footer Note */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Important Information</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      This directory is provided for emergency reference only. For life-threatening emergencies, 
                      please call your local emergency number immediately. Data last updated on {lastUpdated}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default EmergencyServicesDirectory;