import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

import MapFullWidth from "../common/MapFullWidth";
import ContactFormSection from "./ContactFormSection";

import partner1 from "../../assets/images/Adobe-Homes.png";
import partner2 from "../../assets/images/AA-Builders.png";
import partner3 from "../../assets/images/The-Capital.png";
import partner4 from "../../assets/images/Rosewood-Homes.png";
import partner5 from "../../assets/images/Ironwood-Apartments.png";

const Contact = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5];

  return (
    <div className="px-4 md:px-16 py-8">
      
      <div className="text-lg text-gray-500 mb-4">
        <Link
          to="/"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Home
        </Link>{" "}
        &gt; <span className="text-blue-400">Contact</span>
      </div>

      
      <h1 className="text-3xl font-bold mb-8">Contact</h1>

      
      <div className="relative">
  <MapFullWidth />
  
  <div
    className="
      w-[85%] mx-auto 
      bg-white rounded-4xl shadow-lg p-8 z-10 
      flex flex-col md:flex-row items-center justify-between gap-6
      mt-10
      md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-bottom-20 md:mt-0
    "
  >
    
    <div className="flex flex-col items-center text-center">
      <PhoneIcon className="text-blue-500 mb-2" fontSize="large" />
      <p className="text-gray-600 text-lg hover:text-blue-400 cursor-pointer transition-colors duration-200">
        +133-456-787
      </p>
    </div>

    
    <div className="flex flex-col items-center text-center">
      <LocationOnIcon className="text-blue-500 mb-2" fontSize="large" />
      <p className="text-gray-600 text-lg leading-relaxed">
        3015 Grand Ave, Coconut Grove,
        <br />
        Merrick Way, FL 12345
      </p>
    </div>

    
    <div className="flex flex-col items-center text-center">
      <EmailIcon className="text-blue-500 mb-2" fontSize="large" />
      <p className="text-gray-600 text-lg hover:text-blue-400 cursor-pointer transition-colors duration-200">
        sales@yourwebsite.com
      </p>
    </div>
  </div>
</div>


      
      <div className="mt-44">
        <ContactFormSection />
      </div>

      
      <section className="mt-24">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Partners of RealHomes</h2>
          <p className="text-gray-500 mt-2">
            We are pleased to work with our partners
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {partners.map((partner, index) => (
    <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
      <img src={partner} alt={`Partner ${index + 1}`} className="h-16 md:h-20 object-contain" />
    </div>
  ))}
</div>


      </section>
    </div>
  );
};

export default Contact;


