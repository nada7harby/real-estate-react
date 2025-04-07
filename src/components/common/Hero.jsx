import React from "react";
import { Button } from "@mui/material";
import { Icon } from "@iconify/react";
import img6 from "../../assets/images/img-6.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img3 from "../../assets/images/img-3.jpg";

const images = [img6, img3, img4];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" bg-gray-50 ">
      {/* Header */}
      <div className=" mx-auto mb-8 lg:pl-30">
        <div className="flex justify-between items-center mb-4 ">
          <h1 className="text-4xl font-bold text-blue-400 ">
            Find Your Sweet Home
          </h1>
          <div className="flex items-center gap-4 bg-blue-100 p-5 text-color-white rounded-l-lg">
            <span>Need Help To Choose Your Property</span>
            <Button variant="contained" size="small" color="primary">
              Let Us Call You!
            </Button>
          </div>
        </div>
        {/* <Button variant="outlined" size="small">
          <Icon icon="lucide:search" className="mr-1" />
          Looking for certain features
        </Button> */}
      </div>

      {/* Property Slider */}
      <div className="relative w-full mx-auto">
        <div className="relative aspect-[2/1] w-full rounded-xl">
          <img
            src={images[currentIndex]}
            alt={`Property view ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="contained"
              sx={{
                minWidth: "40px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(17, 106, 195, 0.76)",
                "&:hover": {
                  backgroundColor: "rgba(5, 26, 88, 0.7)",
                },
              }}
              onClick={handlePrevious}
            >
              <Icon
                icon="lucide:chevron-left"
                className="text-3xl text-white"
              />
            </Button>

            <Button
              variant="contained"
              sx={{
                minWidth: "40px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(17, 106, 195, 0.76)",
                "&:hover": {
                  backgroundColor: "rgba(5, 26, 88, 0.7)",
                },
              }}
              onClick={handleNext}
            >
              <Icon
                icon="lucide:chevron-right"
                className="text-3xl text-white"
              />
            </Button>
          </div>

          {/* Property Info Card */}
          <div className="absolute lg:left-1/6 md:left-1/4  -bottom-20 bg-gray-200 rounded-lg p-4 shadow-lg lg:w-4xl">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-sm">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">Built 2018</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Villa on Hollywood Boulevard
                </h2>
                <div className="flex gap-6 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Icon icon="lucide:bed" />
                    <span>2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="lucide:bath" />
                    <span>4</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon icon="lucide:square" />
                    <span>2500 sq.ft</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-blue-600 font-bold text-2xl">
                  $740,000
                </span>
                <div className="text-blue-500 text-sm">For Sale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
