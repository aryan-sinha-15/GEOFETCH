import EmergencyCard from "./EmergencyCard";
import { emergencyServices } from "../data/emergencyData";

const ServiceList = ({ pincode }) => {
  const services = emergencyServices;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Emergency Services {pincode && `for ${pincode}`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <EmergencyCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;