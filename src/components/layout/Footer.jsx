import { Facebook, Twitter, Instagram, YouTube, Call, Email, WhatsApp } from "@mui/icons-material";
import footerBg from "../../assets/images/ultra-footer.png";
import logo from "../../assets/images/ultra-header-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#E6F4FF] text-gray-700 py-10 mt-20">
      <div
        className="absolute top-0 right-0 w-full h-full bg-right-bottom bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <img src={logo} alt="Real Homes Logo" className="h-12" />
          <div className="flex space-x-4 text-blue-400">
            <Facebook className="cursor-pointer" />
            <Twitter className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <YouTube className="cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center mb-10">
          
          <div className="text-center md:text-left">
            <p className="text-sm">
              Experience the epitome of flexibility and empower your real estate ventures with our feature-rich theme.
            </p>
            <p className="text-sm mt-2">
              Effortlessly adapt to various property types and market demands with our comprehensive solution.
            </p>
          </div>

          <div className="flex flex-col space-y-2 text-center md:text-left">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Properties Listing</a>
            <a href="#" className="hover:text-blue-500">Blog</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="flex items-center border border-gray-300 rounded-full w-full md:w-64 overflow-hidden">
              <input type="text" placeholder="Search" className="px-4 py-2 w-full focus:outline-none" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer">Search</button>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 shadow-md rounded-full py-6 px-6 flex flex-col items-center text-center space-y-4">
          <p className="text-lg font-semibold">Need Help?</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <Call className="text-blue-500" />
              <span>1-800-555-4321</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <WhatsApp className="text-blue-500" />
              <span>1-800-555-4321</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <Email className="text-blue-500" />
              <span>hello@yoursite.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-center md:text-left">
          <p className="text-sm">&copy; 2025. All rights reserved.</p>
          <p className="text-sm">
            Designed by <a href="#" className="text-blue-500">Inspiry Themes</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;