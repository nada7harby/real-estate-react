import React, { useState } from "react";
import { Facebook, Twitter, Instagram, YouTube, Phone, Person, Menu, Close, Favorite } from "@mui/icons-material";
import logo from "../../assets/images/ultra-header-logo.png";
// import AuthForm from "../pages/AuthForm";
import { useNavigate, Link } from "react-router-dom";
import PersonIconWithPopover from "./PersonIconWithPopover";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAuthForm, setShowAuthForm] = useState(false);
    const [mode, setMode] = useState("login");
    // const [showPopover, setShowPopover] = useState(false);
    // const navigate = useNavigate();

    return (
        <nav className="bg-white shadow-md py-4 px-6">
            {/* Mobile Layout Only */}
            <div className="block sm:hidden mt-4">
                <div className="flex justify-center mb-2">
                    <img src={logo} alt="Real Homes Logo" className="h-10" />
                </div>
                <div className="flex justify-center">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center text-gray-600 cursor-pointer">
                            <Phone fontSize="small" className="mr-1" /> 1-800-555-4321
                        </span>
                        <PersonIconWithPopover
                            setMode={setMode}
                            setShowAuthForm={setShowAuthForm}/>
                        <Menu
                            fontSize="large"
                            className="text-orange-400 cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}/>
                    </div>
                </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden sm:flex lg:hidden items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Real Homes Logo" className="h-10" />
                </div>

                {/* Icons */}
                <div className="flex items-center ml-auto space-x-4">
                    <span className="flex items-center text-gray-600 cursor-pointer">
                        <Phone fontSize="small" className="mr-1" /> 1-800-555-4321
                    </span>
                    <PersonIconWithPopover
                        setMode={setMode}
                        setShowAuthForm={setShowAuthForm}/>

                    <Menu
                        fontSize="large"
                        className="text-orange-400 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}/>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center md:w-auto w-full justify-start">
                    <img src={logo} alt="Real Homes Logo" className="h-10" />
                </div>

                {/* Menu Links */}
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li><Link to="/" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Home</Link></li>
                    <li><Link to="/dashboard" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Dashboard</Link></li>
                    <li><Link to="/properties" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Real Estate</Link></li>
                    {/* <li><Link to="/property-single" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Property Single</Link></li> */}
                    <li><Link to="/contact" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Contact</Link></li>
                </ul>

                {/* Icons Section */}
                <div className="flex items-center space-x-4">
                    <div className="flex space-x-3 text-gray-500">
                        <a href="#" className="text-blue-400 p-2 rounded-lg hover:bg-blue-100 transition duration-300"><Facebook fontSize="small" /></a>
                        <a href="#" className="text-blue-400 p-2 rounded-lg hover:bg-blue-100 transition duration-300"><Twitter fontSize="small" /></a>
                        <a href="#" className="text-blue-400 p-2 rounded-lg hover:bg-blue-100 transition duration-300"><Instagram fontSize="small" /></a>
                        <a href="#" className="text-blue-400 p-2 rounded-lg hover:bg-blue-100 transition duration-300"><YouTube fontSize="small" /></a>
                    </div>
                    <div className="flex items-center text-gray-600 space-x-2">
                        <div className="w-px h-6 bg-gray-300"></div>
                        <span className="flex items-center hover:text-blue-500 cursor-pointer transition">
                            <Phone fontSize="small" className="mr-1" /> 1-800-555-4321
                        </span>
                        <div className="w-px h-6 bg-gray-300"></div>
                        <PersonIconWithPopover
                            setMode={setMode}
                            setShowAuthForm={setShowAuthForm}/>
                    </div>
                </div>
            </div>
            {/* Side Menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-64 h-full bg-blue-300 text-white shadow-lg z-50 transition-transform">
                    <div className="flex justify-end p-4">
                        <Close
                            fontSize="large"
                            className="cursor-pointer"
                            onClick={() => setMenuOpen(false)}/>
                    </div>
                    <ul className="space-y-4 px-6 text-lg">
                        <li><Link to="/" className="block py-2">Home</Link></li>
                        <li><Link to="/dashboard" className="block py-2">Dashboard</Link></li>
                        <li><Link to="/real-estate" className="block py-2">Real Estate</Link></li>
                        <li><Link to="/property-single" className="block py-2">Property Single</Link></li>
                        <li><Link to="/blog" className="block py-2">Blog</Link></li>
                        <li><Link to="/contact" className="block py-2">Contact</Link></li>
                    </ul>
                </div>
            )}
            {/* Auth Modal */}
            {showAuthForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <AuthForm
                        mode={mode}
                        setMode={setMode}
                        onClose={() => setShowAuthForm(false)}
                    />
                </div>
            )}
        </nav>
    );
};
export default NavBar;




/*import React, { useState } from "react";
import { Facebook, Twitter, Instagram, YouTube, Phone, Person, Menu, Close, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/ultra-header-logo.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
            <div className="flex items-center md:w-auto w-full justify-center md:justify-start">
                <img src={logo} alt="Real Homes Logo" className="h-10" />
            </div>

            <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
                <li><a href="#" className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md">Home</a></li>
                <li><a href="#" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Real Estate</a></li>
                <li><a href="#" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Property Single</a></li>
                <li><a href="#" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Contact</a></li>
            </ul>

            <div className="hidden lg:flex items-center space-x-4">
                <div className="flex space-x-3 text-gray-500">
                    <a href="#" className="text-blue-400 p-2 rounded-lg hover:bg-blue-100 transition duration-300"><Facebook fontSize="small" /></a>
                    <a href="#" className="text-blue-400 p-2 rounded-lg hover:bg-blue-100 transition duration-300"><Twitter fontSize="small" /></a>
                    <a href="#" className="text-blue-400 p-2 rounded-lg hover:bg-blue-100 transition duration-300"><Instagram fontSize="small" /></a>
                    <a href="#" className="text-blue-400 p-2 rounded-lg hover:bg-blue-100 transition duration-300"><YouTube fontSize="small" /></a>
                </div>

                <div className="flex items-center text-gray-600 space-x-2 relative">
                    <div className="w-px h-6 bg-gray-300"></div>
                    <span className="flex items-center hover:text-blue-500 cursor-pointer transition">
                        <Phone fontSize="small" className="mr-1" /> 1-800-555-4321
                    </span>
                    <div className="w-px h-6 bg-gray-300"></div>

                    <div
                        className="relative"
                        onMouseEnter={() => setShowFavorites(true)}
                        onMouseLeave={() => setShowFavorites(false)}
                    >
                        <Person
                            fontSize="small"
                            className="text-blue-500 cursor-pointer"
                            onClick={() => navigate("/Signup")}
                        />

                        {showFavorites && (
                            <div
                                className="absolute right-0 top-8 bg-white shadow-lg rounded-xl px-4 py-2 flex items-center space-x-2 border border-gray-200 transition-opacity duration-300"
                                style={{ minWidth: "160px" }}
                                onClick={() => navigate("/MyFavorites")}
                            >
                                <Favorite fontSize="small" className="text-blue-400" />
                                <span className="text-sm text-gray-700 cursor-pointer">My Favorites</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="fixed top-0 left-0 w-64 h-full bg-blue-300 text-white shadow-lg z-50 transition-transform">
                    <div className="flex justify-end p-4">
                        <Close fontSize="large" className="cursor-pointer" onClick={() => setMenuOpen(false)} />
                    </div>
                    <ul className="space-y-4 px-6 text-lg">
                        <li><a href="#" className="block py-2">Home</a></li>
                        <li><a href="#" className="block py-2">Real Estate</a></li>
                        <li><a href="#" className="block py-2">Property Single</a></li>
                        <li><a href="#" className="block py-2">Blog</a></li>
                        <li><a href="#" className="block py-2">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;*/