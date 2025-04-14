import React from "react";
import { Button } from "@mui/material";
import { Icon } from "@iconify/react";

function Banner() {
  return (
    <div className=" bg-[#1DB2FF]">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg" />
        {/* <div className="flex items-center gap-2 text-white">
          <Icon icon="lucide:share" className="w-5 h-5" />
          <span>(2/4)</span>
        </div> */}
      </nav>

      {/* Main Content */}
      <main className="  lg:mx-auto pl-5 py-16 my-10 relative z-10">
        <div className="w-full relative z-10 ">
          <div className="lg:flex justify-between	">
            <div>
              <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                Finding a perfect property have never been this easy earlier
              </h1>
              <p className="!text-gray-200 text-xl mb-8">
                You can find perfectly suited properties for your all needs with
                ease.
              </p>
            </div>

            <div className=" ">
              <Button
                className="!bg-white !text-[#00A7E7] font-semibold !px-10 py-6 rounded-full text-2lg"
                variant="solid"
              >
                Check Properties
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-20 space-y-8 lg:flex max-w-4xl  justify-between	">
            <div>
              <p className="!text-white/70 mb-2 text-2xl">Email</p>
              <p className="!text-white text-3xl">hello@yoursite.com</p>
            </div>
            <div>
              <p className="!text-white/70 mb-2 text-2xl">Phone Number</p>
              <p className="!text-white text-3xl">+1 800 555 4321</p>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="absolute right-0 bottom-0 z-0 w-1/3 h-auto z-0">
          <img
            src="images/CTA-background.png"
            alt="Property"
            className="object-cover w-full h-full "
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-[20%] z-0 top-1/2 transform -translate-y-1/2">
          <div className="w-32 h-32 bg-white/10 rounded-full blur-xl" />
        </div>
      </main>
    </div>
  );
}

export default Banner;
