import { useCompare } from "./CompareContext";
import { useState } from "react";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from "react-router-dom";

const ComparePanel = () => {
  const { compareList, removeFromCompare } = useCompare();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-sky-500 border border-sky-300 px-4 py-2 rounded-l-full shadow-lg flex items-center gap-1 font-semibold"
        >
          <CompareArrowsOutlinedIcon />
          ({compareList.length}/4)
          {isOpen ? <ExpandMoreIcon fontSize="small" /> : <ExpandLessIcon fontSize="small" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-2 w-80 bg-white rounded-xl border border-blue-200 shadow-xl p-4 animate-slideInDown">
          <h4 className="font-semibold text-lg text-gray-800 mb-3">Select properties to compare</h4>
          <ul className="space-y-4 max-h-96 overflow-auto pr-1">
            {compareList.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-18 h-18 rounded-lg object-cover"
                  />
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <button
                  onClick={() => removeFromCompare(item.title)}
                  className="text-sky-500 hover:text-red-500 text-lg"
                >
                  <CloseOutlinedIcon />
                </button>
              </li>
            ))}
          </ul>

          {compareList.length >= 2 && (
            <Link to="/compare">
              <button className="w-full bg-sky-400 hover:bg-sky-500 text-white py-2 rounded-full mt-5 transition duration-200">
                Compare
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ComparePanel;
