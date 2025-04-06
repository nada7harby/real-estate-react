import React from "react";
import { Card, CardContent, Button, Chip } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Example() {
  return (
    <div className="p-4">
      <Card className="max-w-md">
        <div className="relative">
          <img
            src="https://picsum.photos/800/600"
            alt="Villa interior"
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Chip label="For Sale" variant="filled" size="small" sx={{ backgroundColor: 'white', color: 'black' }} />
            <Chip label="Featured" variant="filled" size="small" color="primary" />
            <Chip label="Trendy" variant="filled" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white' }} />
          </div>
          <div className="absolute top-3 right-3 flex gap-2">
            <Chip 
              label={
                <div className="flex items-center">
                  <Icon icon="lucide:bed" className="mr-1" />
                  8
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
                  1
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
                  backgroundColor: 'rgba(255,255,255,0.9)'
                }
              }}
            >
              <Icon icon="lucide:heart" className="text-gray-700" />
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
              <Icon icon="lucide:share-2" className="text-gray-700" />
            </Button>
          </div>
        </div>
        <CardContent className="gap-4">
          <h2 className="text-xl font-semibold">Villa on Hollywood Boulevard</h2>
          <div className="flex items-center gap-2 text-default-500">
            <Icon icon="lucide:map-pin" />
            <span>Hatteras Lane, Hollywood, FL 33019, USA</span>
          </div>
          <div className="text-sm">Villa</div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">$740,000</span>
            <div className="flex gap-4 text-default-500">
              <div className="flex items-center gap-1">
                <Icon icon="lucide:bed" />
                <span>3</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="lucide:bath" />
                <span>4</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="lucide:square" />
                <span>4530 sq ft</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-default-500">
            Added: June 13, 2022
          </div>
        </CardContent>
      </Card>
    </div>
  );
}