import { FaUserTie, FaLandmark, FaPhone, FaEnvelope } from "react-icons/fa";

const MLACard = ({ mla }) => {
  if (!mla) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="bg-gradient-to-r from-primary-light to-primary-dark p-4 text-white">
        <h3 className="text-xl font-bold">Your MLA Information</h3>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gray-200 rounded-full p-3">
            <FaUserTie className="text-primary-dark text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg">{mla.name}</h4>
            <p className="text-gray-600">{mla.party}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <FaLandmark className="text-primary-light mr-3" />
            <span>Constituency: {mla.constituency}</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-primary-light mr-3" />
            <span>Phone: {mla.phone || "Not available"}</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-primary-light mr-3" />
            <span>Email: {mla.email || "Not available"}</span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <a 
            href={mla.profileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-secondary-light text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition duration-300"
          >
            View Full Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default MLACard;