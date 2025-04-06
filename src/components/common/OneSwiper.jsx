import React from "react";
import { Card, CardContent, Button, Chip } from "@mui/material";
import { Icon } from "@iconify/react";

export default function OneSwiper({ property }) {
  return (
    <div className="p-4">
      <Card className="max-w-md">
        <div className="relative">
          <img
            src={property.image}
            alt="Villa interior"
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Chip label={property.status} variant="filled" size="small" sx={{ backgroundColor: 'white', color: 'black' }} />
            {property.isFeatured && <Chip label="Featured" variant="filled" size="small" color="primary" />}
            {property.isTrendy && <Chip label="Trendy" variant="filled" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white' }} />}
          </div>
          <div className="absolute top-3 right-3 flex gap-2">
            <Chip 
              label={
                <div className="flex items-center">
                  <Icon icon="lucide:bed" className="mr-1" />
                  {property.bedrooms}
                </div>
              }
              variant="filled" 
              size="small" 
              sx={{ backgroundColor: 'white', color: 'black' }}
            />
            <Chip 
              label={
                <div className="flex items-center">
                  <Icon icon="lucide:bath" className="mr-1" />
                  {property.bathrooms}
                </div>
              }
              variant="filled" 
              size="small" 
              sx={{ backgroundColor: 'white', color: 'black' }}
            />
          </div>
          <div className="absolute bottom-3 right-3 flex gap-2">
            <Button 
              variant="contained" 
              sx={{ 
                minWidth: '40px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(218, 218, 218, 0.9)'
                }
              }}
            >
              <Icon icon="lucide:heart" className="text-gray-700 !text-4xl" />
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                minWidth: '40px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)'
                }
              }}
            >
              <Icon icon="lucide:share-2" className="text-gray-700 text-6xl" />
            </Button>
          </div>
        </div>
        <CardContent className="gap-4">
          <h2 className="text-xl font-semibold">{property.title}</h2>
          <div className="flex items-center gap-2 text-default-500">
            <Icon icon="lucide:map-pin" className="text-blue-500"  />
            <span>{property.location}</span>
          </div>
          <div className="text-sm">{property.type}</div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">{property.price}</span>
            <div className="flex gap-4 text-default-500 ">
              <div className="flex items-center gap-1">
                <Icon icon="lucide:bed" className="text-blue-500"  />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="lucide:bath" className="text-blue-500" />
                <span>{property.bathrooms}</span>
              </div>
            
            </div>
          </div>
          <div className="text-sm text-default-500">
            Added: {property.addedDate}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}