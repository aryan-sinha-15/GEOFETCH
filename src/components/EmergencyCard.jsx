import { FaAmbulance, FaHospital, FaShieldAlt, FaFemale, FaChild } from "react-icons/fa";
import { MdLocalPolice, MdEmergency } from "react-icons/md";

const iconMap = {
  police: <MdLocalPolice className="text-blue-500 text-2xl" />,
  ambulance: <FaAmbulance className="text-red-500 text-2xl" />,
  hospital: <FaHospital className="text-green-500 text-2xl" />,
  women: <FaFemale className="text-pink-500 text-2xl" />,
  child: <FaChild className="text-purple-500 text-2xl" />,
  disaster: <MdEmergency className="text-orange-500 text-2xl" />,
  general: <FaShieldAlt className="text-primary-light text-2xl" />,
};

const EmergencyCard = ({ service }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {iconMap[service.icon] || iconMap.general}
        </div>
        <h3 className="text-lg font-semibold">{service.name}</h3>
      </div>
      <div className="space-y-2">
        {service.numbers.map((number, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-gray-700">{number.label}:</span>
            <div className="flex items-center">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">{number.number}</span>
              <button 
                onClick={() => copyToClipboard(number.number)}
                className="text-primary-light hover:text-primary-dark transition duration-300"
                title="Copy to clipboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {service.note && (
        <p className="mt-3 text-sm text-gray-500 italic">{service.note}</p>
      )}
    </div>
  );
};

export default EmergencyCard;