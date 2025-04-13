import React from "react";
import img1 from "../../assets/images/myFav/1.jpg";
import img2 from "../../assets/images/myFav/2.jpg";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavCard = () => {
  const favorites = [
    {
      id: 1,
      title: "Villa on Hollywood Boulevard",
      description: "The very best waterfront location in...",
      bedrooms: 3,
      bathrooms: 4,
      area: "4530 sq ft",
      addedOn: "June 13, 2022",
      status: "For Sale",
      published: true,
      featured: true,
      price: "$740,000",
      type: "sale",
      image: img1,
    },
    {
      id: 2,
      title: "Traditional Food Restaurant",
      description: "We are an award winning and...",
      area: "950 sq ft",
      addedOn: "June 12, 2022",
      status: "For Rent",
      published: true,
      price: "$2,600 Monthly",
      type: "rent",
      image: img2,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb and Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="text-sm text-gray-600 mb-2">
          <a href="#" className="hover:text-blue-600 font-bold">
            Home
          </a>{" "}
          <ChevronRightIcon />
          <span className="text-blue-800 font-bold">My Favorites</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">My Favorites</h2>
      </div>

      {/* Show message if no favorites */}
      <div className="container mx-auto px-4">
        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <FavoriteBorderIcon className="text-red-400 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700">
              No Favorites Yet
            </h2>
            <p className="text-gray-500 mt-2">
              You haven’t added any properties to your favorites.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop View (lg and up) - Table Layout */}
            <div className="container mx-auto px-4 hidden lg:block">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Property Info
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Added On
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Property Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price & Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {favorites.map((property) => (
                      <tr key={property.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-40 w-44 rounded-md overflow-hidden">
                              <img
                                src={property.image}
                                alt={property.title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-lg font-bold text-gray-900">
                                {property.title}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {property.description}
                              </div>
                              {property.type === "sale" && (
                                <div className="mt-3 flex space-x-4 text-sm text-gray-600">
                                  <span>
                                    <p className="font-bold">Bedrooms</p>
                                    <span className="font-medium">
                                      <BedIcon />
                                    </span>{" "}
                                    {property.bedrooms}
                                  </span>
                                  <span>
                                    <p className="font-bold">Bathrooms</p>
                                    <span className="font-medium">
                                      <ShowerIcon />
                                    </span>{" "}
                                    {property.bathrooms}
                                  </span>
                                  <span>
                                    <span className="font-medium">
                                      <p className="font-bold">Area</p>
                                    </span>{" "}
                                    {property.area}
                                  </span>
                                </div>
                              )}
                              {property.type === "rent" && (
                                <div className="mt-3 text-sm text-gray-600">
                                  <span>
                                    <span className="font-medium">Area:</span>{" "}
                                    {property.area}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {property.addedOn}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              property.status === "For Sale"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {property.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Published
                          </span>
                          {property.featured && (
                            <span className="ml-2 px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Featured
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-around">
                            <span className="text-lg font-bold text-gray-900">
                              {property.price}
                            </span>
                            <button className="ml-4 px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium rounded-md transition-colors">
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Medium Screen View (md) - Card Layout */}
            <div className="container mx-auto px-4 hidden md:block lg:hidden">
              <div className="space-y-6">
                {favorites.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-5">
                      <div className="flex flex-col md:flex-row">
                        {/* Property Image */}
                        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-5">
                          <div className="h-48 w-full rounded-lg overflow-hidden">
                            <img
                              src={property.image}
                              alt={property.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Property Details */}
                        <div className="md:w-2/3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">
                                {property.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {property.description}
                              </p>
                            </div>
                            <div className="text-lg font-bold text-gray-900">
                              {property.price}
                            </div>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm font-medium text-gray-500">
                                Added On
                              </span>
                              <p className="text-sm">{property.addedOn}</p>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-500">
                                Status
                              </span>
                              <span
                                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  property.status === "For Sale"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {property.status}
                              </span>
                            </div>

                            {property.type === "sale" && (
                              <>
                                <div>
                                  <p className="font-bold">Bedrooms</p>
                                  <span className="text-sm font-medium text-gray-500">
                                    <BedIcon />
                                  </span>
                                  <p className="text-sm">{property.bedrooms}</p>
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-gray-500">
                                    <p className="font-bold">Bathrooms </p>
                                  </span>
                                  <p className="text-sm">
                                    {" "}
                                    <ShowerIcon />
                                    {property.bathrooms}
                                  </p>
                                </div>
                              </>
                            )}

                            <div className="col-span-2">
                              <span className="text-sm font-medium text-gray-500">
                                <p className="font-bold">Area</p>
                              </span>
                              <p className="text-sm">{property.area}</p>
                            </div>
                          </div>

                          <div className="mt-4 flex justify-between items-center border-t pt-3">
                            <div>
                              <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                Published
                              </span>
                              {property.featured && (
                                <span className="ml-2 px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  Featured
                                </span>
                              )}
                            </div>
                            <button className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium rounded-md transition-colors">
                              Remove from Favorites
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile View (sm and down) - Compact Card Layout */}
            <div className="container mx-auto px-4 md:hidden">
              <div className="space-y-4">
                {favorites.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-lg shadow overflow-hidden"
                  >
                    <div className="p-4">
                      {/* Property Image */}
                      <div className="h-48 w-full mb-4 rounded-md overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Property Info */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {property.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {property.description}
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div>
                            <span className="text-xs font-medium text-gray-500">
                              Added On
                            </span>
                            <p className="text-sm">{property.addedOn}</p>
                          </div>
                          <div>
                            <span className="text-xs font-medium text-gray-500">
                              Status
                            </span>
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                property.status === "For Sale"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {property.status}
                            </span>
                          </div>

                          {property.type === "sale" && (
                            <>
                              <div>
                                <span className="text-xs font-medium text-gray-500">
                                  <BedIcon />
                                </span>
                                <p className="text-sm">{property.bedrooms}</p>
                              </div>
                              <div>
                                <span className="text-xs font-medium text-gray-500">
                                  <p className="font-bold">Bathrooms</p>
                                </span>
                                <p className="text-sm">
                                  {" "}
                                  <ShowerIcon /> {property.bathrooms}
                                </p>
                              </div>
                            </>
                          )}

                          <div className="col-span-2">
                            <span className="text-xs font-medium text-gray-500">
                              <p className="font-bold">Area</p>
                            </span>
                            <p className="text-sm">{property.area}</p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div>
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                              Published
                            </span>
                            {property.featured && (
                              <span className="ml-1 px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Featured
                              </span>
                            )}
                          </div>
                          <span className="text-base font-bold text-gray-900">
                            {property.price}
                          </span>
                        </div>

                        <button className="mt-3 w-full py-2 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium rounded-md transition-colors">
                          Remove from Favorites
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FavCard;
