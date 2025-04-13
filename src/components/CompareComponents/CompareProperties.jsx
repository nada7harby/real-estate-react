import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CompareProperties = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-6">
        <div className="text-sm text-gray-600 mb-2">
          <a href="#" className="hover:text-blue-600 font-bold ">
            Home
          </a>{" "}
          <ChevronRightIcon /> 
          <span className="text-blue-600 font-bold">Compare Properties</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Compare Properties</h2>
      </div>
    </>
  );
}

export default CompareProperties;


