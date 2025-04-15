import React from "react";
import { Card, CardContent, Button, Chip } from "@mui/material";
import { Icon } from "@iconify/react";
import { PropertyViewer } from "./Property-viewer";
import { properties } from "../../assets/Data/properties.json";
import { useNavigate } from "react-router-dom";

export default function AllProperties() {
  const navigate = useNavigate();

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handlePropertyClick(property.id)}
            >
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Chip
                    label={property.status}
                    size="small"
                    sx={{ backgroundColor: "white" }}
                  />
                </div>
              </div>
              <CardContent>
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Icon icon="lucide:map-pin" className="text-blue-500" />
                  <span>{property.address}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-blue-600">
                    {property.price}
                  </span>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:bed" className="text-blue-500" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:bath" className="text-blue-500" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
