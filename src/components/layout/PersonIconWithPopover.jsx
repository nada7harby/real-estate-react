import React, { useState } from "react";
import { Person, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PersonIconWithPopover = ({ setMode, setShowAuthForm }) => {
  const [showPopover, setShowPopover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowPopover(true)}
      onMouseLeave={() => setShowPopover(false)}
    >
      <Person
        fontSize="small"
        className="text-blue-500 cursor-pointer"
        onClick={() => {
          setMode("login");
          setShowAuthForm(true);
          navigate("/login");
        }}
      />
      {showPopover && (
        <div
          className="absolute top-6 right-0 bg-white shadow-md p-2 rounded-xl flex items-center space-x-2 cursor-pointer hover:bg-gray-100 w-[140px] transition"
          onClick={() => navigate("/MyFavorites")}
        >
          <Favorite style={{ color: "#60a5fa" }} />
          <span className="text-sm text-gray-700">My Favorites</span>
        </div>
      )}
    </div>
  );
};

export default PersonIconWithPopover;
