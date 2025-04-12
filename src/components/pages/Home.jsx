import React from "react";
import Hero from "../common/Hero";
import OurSwiper from "../common/Swiper";
import ALLProprerties from "../common/ALLProprerties";
import CustomPaging from "../common/ImagesSlider";
import Testimonials from "../common/Testimonials";
import Banner from "../common/Banner";
import Example from "../common/Test";
import NavBar from "../layout/NavBar";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="py-60  lg:px-30 lg:py-40">
        <h1 className="px-10  lg:px-0 lg:py-0 text-3xl  font-semibold">
          Discover Latest Properties
        </h1>
        <h3 className="px-10 lg:px-0 lg:py-0  text-2xl">
          {" "}
          Newest Properties Around You
        </h3>
        <OurSwiper></OurSwiper>
      </div>
      <ALLProprerties />
      <Testimonials />
      <Banner></Banner>
      <Example></Example>
    </>
  );
}
