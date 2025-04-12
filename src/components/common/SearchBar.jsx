import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    onSearch({ keyword, location, status, type });
  };
  return (
    <div className="bg-sky-100 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
      <input
        type="text"
        placeholder="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="bg-white px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 w-full"
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-2 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-300 w-full"
      >
        <option value="">All Main Locations</option>
        <option value="Coral Gables">Coral Gables</option>
        <option value="Doral">Doral</option>
        <option value="Little Havana">Little Havana</option>
        <option value="Miami">Miami</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-2 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-300 w-full"
      >
        <option value="">All Status</option>
        <option value="For Rent">Rent</option>
        <option value="For Sale">Sale</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-2 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-300 w-full"
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Apartment Building">Apartment Building</option>
        <option value="Office">Office</option>
        <option value="Shop">Shop</option>
        <option value="Single Family">Single Family</option>
        <option value="Villa">Villa</option>
      </select>

      <button
        onClick={handleSearch}
        className="bg-sky-500 text-white px-6 py-2 rounded-xl hover:bg-sky-600 transition w-full font-semibold"
      >
        Search 
        <SearchOutlinedIcon style={{color:'white'}}/>
      </button>
    </div>
  );
};

export default SearchBar;
