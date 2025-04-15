import React from "react";
import { useFavorite } from "../common/FavoriteContext";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavCard = () => {
  const { favorites, toggleFavorite } = useFavorite();

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
              You haven't added any properties to your favorites.
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property Info
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Added On
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                                src={property.images[0]}
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
                                {property.address}
                              </div>
                              <div className="mt-3 flex space-x-4 text-sm text-gray-600">
                                <span>
                                  <BedIcon /> {property.beds}
                                </span>
                                <span>
                                  <ShowerIcon /> {property.baths}
                                </span>
                                <span>{property.size} sq ft</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {property.added || "June 13, 2022"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              property.status?.includes("For Rent")
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {property.status || "For Sale"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Published
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-around">
                            <span className="text-lg font-bold text-gray-900">
                              {property.price}
                            </span>
                            <button 
                              onClick={() => toggleFavorite(property)}
                              className="ml-4 px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium rounded-md transition-colors"
                            >
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
                        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-5">
                          <div className="h-48 w-full rounded-lg overflow-hidden">
                            <img
                              src={property.images[0]}
                              alt={property.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="md:w-2/3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">
                                {property.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {property.address}
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
                              <p className="text-sm">
                                {property.added || "June 13, 2022"}
                              </p>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-500">
                                Status
                              </span>
                              <span
                                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  property.status?.includes("For Rent")
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                              >
                                {property.status || "For Sale"}
                              </span>
                            </div>

                            <div>
                              <span className="text-sm font-medium text-gray-500">
                                Bedrooms
                              </span>
                              <p className="text-sm">
                                <BedIcon /> {property.beds}
                              </p>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-500">
                                Bathrooms
                              </span>
                              <p className="text-sm">
                                <ShowerIcon /> {property.baths}
                              </p>
                            </div>

                            <div className="col-span-2">
                              <span className="text-sm font-medium text-gray-500">
                                Area
                              </span>
                              <p className="text-sm">{property.size} sq ft</p>
                            </div>
                          </div>

                          <div className="mt-4 flex justify-between items-center border-t pt-3">
                            <div>
                              <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                Published
                              </span>
                            </div>
                            <button 
                              onClick={() => toggleFavorite(property)}
                              className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium rounded-md transition-colors"
                            >
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
                      <div className="h-48 w-full mb-4 rounded-md overflow-hidden">
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {property.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {property.address}
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div>
                            <span className="text-xs font-medium text-gray-500">
                              Added On
                            </span>
                            <p className="text-sm">
                              {property.added || "June 13, 2022"}
                            </p>
                          </div>
                          <div>
                            <span className="text-xs font-medium text-gray-500">
                              Status
                            </span>
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                property.status?.includes("For Rent")
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {property.status || "For Sale"}
                            </span>
                          </div>

                          <div>
                            <span className="text-xs font-medium text-gray-500">
                              Bedrooms
                            </span>
                            <p className="text-sm">
                              <BedIcon /> {property.beds}
                            </p>
                          </div>
                          <div>
                            <span className="text-xs font-medium text-gray-500">
                              Bathrooms
                            </span>
                            <p className="text-sm">
                              <ShowerIcon /> {property.baths}
                            </p>
                          </div>

                          <div className="col-span-2">
                            <span className="text-xs font-medium text-gray-500">
                              Area
                            </span>
                            <p className="text-sm">{property.size} sq ft</p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Published
                          </span>
                          <span className="text-base font-bold text-gray-900">
                            {property.price}
                          </span>
                        </div>

                        <button
                          onClick={() => toggleFavorite(property)}
                          className="mt-3 w-full py-2 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium rounded-md transition-colors"
                        >
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
