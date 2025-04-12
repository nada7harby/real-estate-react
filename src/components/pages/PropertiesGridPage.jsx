import { useState } from "react";
import PropertyCard from "../common/PropertyCard";
import MapFullWidth from "../common/MapFullWidth";
import ComparePanel from "../common/ComparePanal";
import SearchBar from "../common/SearchBar";

const properties = [
  {
    image:
      "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way-680x510.jpg",
    title: "Home in Coral Gables",
    address: "Jeronimo Drive, Coral Gables, FL 33146, USA",
    type: "Single Family",
    price: "850,000",
    beds: 4,
    baths: 4.5,
    size: 3800,
    added: null,
    status: ["For Sale", "Featured"],
  },
  {
    image:
      "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-2.jpg",
    title: "Luxury Apartment",
    address: "435 Southwest 12th Avenue, Miami, FL 33130, USA",
    type: "Apartment",
    price: "2,500",
    beds: 2,
    baths: 2,
    size: 1650,
    added: "June 7, 2022",
    status: ["For Sale", "Featured", "Hot"],
  },
  {
    image:
      "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-680x510.jpg",
    title: "Building Having 15 Apartments",
    address: "435 Southwest 12th Avenue, Miami, FL 33130, USA",
    type: "Apartment Building",
    price: "6,950,000",
    beds: null,
    baths: null,
    size: 52000,
    added: "June 6, 2022",
    status: ["For rent", "Featured", "Trendy"],
  },
  {
    image:
      "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House-680x510.jpg",
    title: "Traditional Food Restaurant",
    address: "435 Southwest 12th Avenue, Miami, FL 33130, USA",
    type: "Apartment Building",
    price: "6,950,000",
    beds: null,
    baths: null,
    size: 52000,
    added: "June 6, 2022",
    status: "For Sale",
  },
  {
    image:
      "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/House-Design-680x510.jpg",
    title: "Traditional Food Restaurant",
    address: "435 Southwest 12th Avenue, Miami, FL 33130, USA",
    type: "Apartment Building",
    price: "6,950,000",
    beds: null,
    baths: null,
    size: 52000,
    added: "June 6, 2022",
    status: "For Sale",
  },
  {
    image:
      "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/meeting-working-room-office-building-680x510.jpg",
    title: "Traditional Food Restaurant",
    address: "435 Southwest 12th Avenue, Miami, FL 33130, USA",
    type: "Apartment Building",
    price: "6,950,000",
    beds: null,
    baths: null,
    size: 52000,
    added: "June 6, 2022",
    status: "For Sale",
  },
  {
    image:
      "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-680x510.jpg",
    title: "Building Having 15 Apartments",
    address: "435 Southwest 12th Avenue, Miami, FL 33130, USA",
    type: "Apartment Building",
    price: "6,950,000",
    beds: null,
    baths: null,
    size: 52000,
    added: "June 6, 2022",
    status: "For Sale",
  },
];

const PropertiesGridPage = () => {
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
        {currentProperties.map((prop, idx) => (
          <PropertyCard key={idx} {...prop} />
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