import React from "react";
import { Card, CardContent, Button, Chip } from "@mui/material";
import { Icon } from "@iconify/react";
import "../../styles/components/Property-viewer.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const PropertyViewer = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const currentProperty = properties[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
    setActiveImageIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + properties.length) % properties.length
    );
    setActiveImageIndex(0);
  };



  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setActiveImageIndex(0);
  };

  return (
    <div className="space-y-4  ">
      <Card className="overflow-hidden" style={{ boxShadow: "none" }}>
        <CardContent className="p-0 lg:flex  bg-blue-100  ">
          <div className="relative ">
            <img
              src={currentProperty.images[activeImageIndex]}
              alt={currentProperty.title}
              className="w-full h-[400px] object-cover"
            />
            {/* <Button
              variant="contained"
              sx={{ 
                position: 'absolute',
                left: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255,255,255,0.8)',
                minWidth: '40px',
                width: '40px',
                height: '40px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)'
                }
              }}
              onClick={handleImagePrev}
            >
              <Icon icon="lucide:chevron-left" className="text-xl" />
            </Button>
            <Button
              variant="contained"
              sx={{ 
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255,255,255,0.8)',
                minWidth: '40px',
                width: '40px',
                height: '40px',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)'
                }
              }}
              onClick={handleImageNext}
            >
              <Icon icon="lucide:chevron-right" className="text-xl" />
            </Button> */}
            <div className="lg:absolute lg:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {currentProperty.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === activeImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6  relative ">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex gap-2 mb-2">
                  <Chip label="For Sale" sx={{ background: "white" }} />
                  <Chip label="Featured" color="primary" />
                  <Chip label="Trendy" color="warning" />
                </div>
                <h2 className="text-5xl font-semibold mb-2">
                  {currentProperty.title}
                </h2>
                <div className="flex items-center gap-1 text-default-500">
                  <Icon
                    icon="lucide:map-pin"
                    className="text-blue-400"
                    style={{ fontSize: "20px" }}
                  />
                  <span className="text-2xl">{currentProperty.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-500">
                  ${currentProperty.price.toLocaleString()}
                </div>
                <div className="text-sm text-default-500">
                  Build {currentProperty.buildYear}
                </div>
              </div>
            </div>

            <div className="flex gap-7 mb-6 absolute  mt-2 -left-15  ">
              <div className="flex items-center gap-2 bg-white rounded-md p-3">
                <Icon icon="lucide:bed" className="text-default-500" />
                <span>{currentProperty.beds}</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-md p-3">
                <Icon icon="lucide:bath" className="text-default-500" />
                <span>{currentProperty.baths}</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-md p-3">
                <Icon icon="lucide:square" className="text-default-500" />
                <span>{currentProperty.sqft.toLocaleString()} sq ft</span>
              </div>
            </div>

            <p className="text-default-500 mb-6 mt-20">
              {currentProperty.description}
            </p>

            <div className="flex gap-4 mt-4">
              <Button
                variant="contained"
                onClick={handlePrev}
                startIcon={<Icon icon="lucide:arrow-left" />}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                endIcon={<Icon icon="lucide:arrow-right" />}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
  
      <div className="flex gap-10 lg:gap-10 overflow-x-auto pb-4 w-lg">
    <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}>
        {properties.map((property, index) => (
                <SwiperSlide>
          <button
            key={property.id}
            onClick={() => handleThumbnailClick(index)}
            className={`relative flex-shrink-0 cursor-pointer transition-all ${
              currentIndex === index ? "ring-2 ring-primary-500" : ""
            }`}
          >
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-32 h-24 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {property.title.split(" ")[0]}
              </span>
            </div>
          </button>
          </SwiperSlide>
        ))}
         </Swiper>
        <div className="flex items-center justify-center bg-default-100 rounded-lg px-4">
          <div className="text-center">
            <span className="text-default-600 font-medium">
              {properties.length}
            </span>
            <br />
            <span className="text-default-500 text-sm">Properties</span>
          </div>
        </div>
      </div>
    </div>
  );
};
