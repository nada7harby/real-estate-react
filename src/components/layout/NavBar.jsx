import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, YouTube, Phone, Person, Menu, Close, Favorite } from "@mui/icons-material";
import logo from "../../assets/images/ultra-header-logo.png";
import AuthForm from "../pages/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import PersonIconWithPopover from "./PersonIconWithPopover";
import { useAuth } from "../common/AuthContext";

const NavBar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAuthForm, setShowAuthForm] = useState(false);
    const [mode, setMode] = useState("login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            setIsLoggedIn(true);
            setUserRole(currentUser.role);
        }
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

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
                            setShowAuthForm={setShowAuthForm}
                            isLoggedIn={isLoggedIn}
                            handleLogout={handleLogout}
                        />
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
                        setShowAuthForm={setShowAuthForm}
                        isLoggedIn={isLoggedIn}
                        handleLogout={handleLogout}
                    />

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
                    {isAuthenticated && user?.role === 'admin' && (
                        <li><Link to="/dashboard" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Dashboard</Link></li>
                    )}
                    <li><Link to="/properties" className="hover:bg-blue-100 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300">Real Estate</Link></li>
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
                            setShowAuthForm={setShowAuthForm}
                            isLoggedIn={isLoggedIn}
                            handleLogout={handleLogout}
                        />
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
                        {isAuthenticated && user?.role === 'admin' && (
                            <li><Link to="/dashboard" className="block py-2">Dashboard</Link></li>
                        )}
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