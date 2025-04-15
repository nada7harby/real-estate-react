import { useState } from "react";
import PropertyCard from "../common/PropertyCard";
import MapFullWidth from "../common/MapFullWidth";
import ComparePanel from "../common/ComparePanal";
import SearchBar from "../common/SearchBar";
import { useProperties } from "../common/PropertiesContext";
import { useNavigate } from "react-router-dom";

const PropertiesGridPage = () => {
  const { properties } = useProperties();
  const navigate = useNavigate();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const handleSearch = (filters) => {
    const results = properties.filter((property) => {
      const propertyStatus = Array.isArray(property.status)
        ? property.status
        : [property.status];

      return (
        (filters.keyword === "" ||
          property.title
            .toLowerCase()
            .includes(filters.keyword.toLowerCase())) &&
        (filters.location === "" ||
          property.address
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (filters.status === "" || propertyStatus.includes(filters.status)) &&
        (filters.type === "" || property.type === filters.type)
      );
    });

    setFilteredProperties(results);
    setCurrentPage(1);
  };

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  return (
    <div className="px-6 py-10 bg-[#f8fbff] min-h-screen">
      <SearchBar onSearch={handleSearch} />

      <h2 className="text-2xl font-bold text-gray-800 mb-2 pt-6">
        Properties Grid Fullwidth
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        {startIndex + 1} to {Math.min(endIndex, filteredProperties.length)} out
        of {filteredProperties.length} properties
      </p>

      <MapFullWidth />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {currentProperties.map((property) => (
          <div 
            key={property.id} 
            onClick={() => handlePropertyClick(property.id)}
            className="cursor-pointer"
          >
            <PropertyCard {...property} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded-full transition-colors duration-300 ${
              currentPage === i + 1
                ? "bg-sky-400 text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <ComparePanel />
    </div>
  );
};

export default PropertiesGridPage;