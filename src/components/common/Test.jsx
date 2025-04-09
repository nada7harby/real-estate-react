import React from 'react';
import { Button } from "@mui/material";
import { Icon } from '@iconify/react';

function Example() {
  return (
    <div className="min-h-screen bg-[#00A7E7]">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg" />
        <div className="flex items-center gap-2 text-white">
          <Icon icon="lucide:share" className="w-5 h-5" />
          <span>(2/4)</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Finding a perfect property have never been this easy earlier
          </h1>
          <p className="text-white/90 text-xl mb-8">
            You can find perfectly suited properties for your all needs with ease.
          </p>

          <Button 
            className="bg-white text-[#00A7E7] font-semibold px-8 py-6 rounded-full text-lg"
            variant="solid"
          >
            Check Properties
          </Button>

          {/* Contact Information */}
          <div className="mt-20 space-y-8">
            <div>
              <p className="text-white/70 mb-2">Email</p>
              <p className="text-white text-2xl">hello@yoursite.com</p>
            </div>
            <div>
              <p className="text-white/70 mb-2">Phone Number</p>
              <p className="text-white text-2xl">+1 800 555 4321</p>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="absolute right-0 bottom-0 w-1/3 h-auto">
          <img 
            src="https://img.heroui.chat/image/places?w=800&h=600&u=1"
            alt="Property" 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-[20%] top-1/2 transform -translate-y-1/2">
          <div className="w-32 h-32 bg-white/10 rounded-full blur-xl" />
        </div>
      </main>
    </div>
  );
}

export default Example;