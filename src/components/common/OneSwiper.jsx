import React from "react";
import { Card, CardContent, Button, Chip } from "@mui/material";
import { Icon } from "@iconify/react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useNavigate } from "react-router-dom";
import { useFavorite } from "./FavoriteContext";

export default function OneSwiper({ property }) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorite();

  const handlePropertyClick = () => {
    navigate(`/property/${property.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(property);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
      }}
      onClick={handlePropertyClick}
    >
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {property.status && (
            <Chip
              label={property.status}
              size="small"
              sx={{
                backgroundColor: "white",
                color: "primary.main",
                fontWeight: "bold",
              }}
            />
          )}
        </div>
        <div className="absolute bottom-3 right-3 flex gap-2">
          <Button
            variant="contained"
            onClick={handleFavoriteClick}
            sx={{
              minWidth: "50px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "rgba(218, 218, 218, 0.9)",
              },
            }}
          >
            <Icon
              icon="lucide:heart"
              style={{ 
                fontSize: "24px", 
                color: isFavorite(property.id) ? "red" : "gray",
                fill: isFavorite(property.id) ? "red" : "transparent"
              }}
              className="inline"
            />
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              // Add compare functionality here
            }}
            sx={{
              minWidth: "50px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "rgba(218, 218, 218, 0.9)",
              },
            }}
          >
            <CompareArrowsIcon 
              sx={{ 
                fontSize: "24px", 
                color: "#1976d2" 
              }} 
            />
          </Button>
        </div>
      </div>
      <CardContent>
        <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{property.address}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {property.price}
          </span>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{property.beds} beds</span>
            <span>{property.baths} baths</span>
            <span>{property.size} sq ft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}