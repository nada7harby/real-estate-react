import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/components/Swiper.css";
import { Pagination } from "swiper/modules";
import OneSwiper from "./OneSwiper";

export default function OurSwiper() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/data/properties.json')
      .then(response => response.json())
      .then(data => setProperties(data.properties))
      .catch(error => console.error('Error loading properties:', error));
  }, []);

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