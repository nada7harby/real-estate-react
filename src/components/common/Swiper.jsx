import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/components/Swiper.css";
import { Pagination } from "swiper/modules";
import img1 from "../../assets/images/blog-post-1.jpg";
import img2 from "../../assets/images/blog-post-2.jpg";
import img3 from "../../assets/images/blog-post-3.jpg";
import img4 from "../../assets/images/blog-post-4.jpg";
import img5 from "../../assets/images/blog-post-5.jpg";
import img6 from "../../assets/images/blog-post-6.jpg";
import OneSwiper from "./OneSwiper";
const properties = [
  {
    id: 1,
    image: img1,
    status: "For Sale",
    isFeatured: true,
    isTrendy: true,
    bedrooms: 3,
    bathrooms: 2,
    title: "Villa on Hollywood Boulevard",
    location: "Hatteras Lane, Hollywood, FL 33019, USA",
    type: "Villa",
    price: "$740,000",
    area: "4530 sq ft",
    addedDate: "June 13, 2022",
  },
  {
    id: 2,
    image: img2,
    status: "For Rent",
    isFeatured: false,
    isTrendy: true,
    bedrooms: 2,
    bathrooms: 1,
    title: "Modern Apartment",
    location: "Downtown, Miami, FL 33101, USA",
    type: "Apartment",
    price: "$1,200/month",
    area: "1200 sq ft",
    addedDate: "May 5, 2023",
  },
  {
    id: 3,
    image: img3,
    status: "For Sale",
    isFeatured: true,
    isTrendy: false,
    bedrooms: 4,
    bathrooms: 3,
    title: "Luxury Penthouse",
    location: "Ocean Drive, Miami Beach, FL 33139, USA",
    type: "Penthouse",
    price: "$1,250,000",
    area: "3200 sq ft",
    addedDate: "April 15, 2023",
  },
  {
    id: 4,
    image: img4,
    status: "For Rent",
    isFeatured: true,
    isTrendy: true,
    bedrooms: 1,
    bathrooms: 1,
    title: "Studio Downtown",
    location: "Brickell Avenue, Miami, FL 33131, USA",
    type: "Studio",
    price: "$1,800/month",
    area: "750 sq ft",
    addedDate: "March 22, 2023",
  },
  {
    id: 5,
    image: img5,
    status: "For Sale",
    isFeatured: false,
    isTrendy: false,
    bedrooms: 5,
    bathrooms: 4,
    title: "Waterfront Mansion",
    location: "Star Island, Miami Beach, FL 33139, USA",
    type: "Mansion",
    price: "$8,500,000",
    area: "8500 sq ft",
    addedDate: "February 10, 2023",
  },
  {
    id: 6,
    image: img6,
    status: "For Rent",
    isFeatured: false,
    isTrendy: true,
    bedrooms: 3,
    bathrooms: 2,
    title: "Family Home",
    location: "Coral Gables, FL 33134, USA",
    type: "House",
    price: "$2,500/month",
    area: "1800 sq ft",
    addedDate: "January 5, 2023",
  },
  {
    id: 7,
    image: img1,
    status: "For Sale",
    isFeatured: true,
    isTrendy: false,
    bedrooms: 2,
    bathrooms: 2,
    title: "Beachfront Condo",
    location: "Collins Avenue, Miami Beach, FL 33140, USA",
    type: "Condo",
    price: "$950,000",
    area: "1500 sq ft",
    addedDate: "December 12, 2022",
  },
  {
    id: 8,
    image: img2,
    status: "For Rent",
    isFeatured: true,
    isTrendy: true,
    bedrooms: 4,
    bathrooms: 3,
    title: "Suburban Villa",
    location: "Pinecrest, FL 33156, USA",
    type: "Villa",
    price: "$3,200/month",
    area: "2800 sq ft",
    addedDate: "November 18, 2022",
  },
  {
    id: 9,
    image: img3,
    status: "For Sale",
    isFeatured: false,
    isTrendy: true,
    bedrooms: 6,
    bathrooms: 5,
    title: "Historic Estate",
    location: "Coconut Grove, FL 33133, USA",
    type: "Estate",
    price: "$4,750,000",
    area: "6200 sq ft",
    addedDate: "October 30, 2022",
  },
];
export default function OurSwiper() {
  return (
    <>
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
        }}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <OneSwiper property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}