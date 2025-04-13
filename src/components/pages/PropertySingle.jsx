import React, { useState, useEffect } from 'react'
import ImagesSlider from '../common/ImagesSlider.jsx'
import OverviewCmp from '../common/overviewCmp.jsx'
import { useParams } from 'react-router-dom'
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";
import img6 from "../../assets/images/img-6.jpg";

export default function PropertySingle() {
  const [propertyDetails, setPropertyDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/data/properties.json')
      .then(response => response.json())
      .then(data => {
        const property = data.properties.find(p => p.id === id);
        if (property) {
          setPropertyDetails(property);
        }
      })
      .catch(error => console.error('Error loading property:', error));
  }, [id]);

  if (!propertyDetails) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className='property-single max-w-7xl mx-auto px-4 py-8'>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{propertyDetails.title}</h1>
        <p className="text-gray-600">
          <span className="text-sky-500 font-semibold">{propertyDetails.price}</span> • 
          <span className="ml-2">{propertyDetails.address}</span>
        </p>
      </div>

      <ImagesSlider details={propertyDetails} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <OverviewCmp detailsOverviews={propertyDetails} />
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{propertyDetails.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Additional Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {propertyDetails.additionalDetails.map((detail, index) => (
                <div key={index} className="border-b pb-2">
                  <h3 className="font-semibold text-gray-800">{detail.name}</h3>
                  <p className="text-gray-600">{detail.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-600 w-32">Stories:</span>
                <span className="font-semibold">{propertyDetails.features.stories}</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 w-32">Home Theater:</span>
                <span className="font-semibold">{propertyDetails.features.HomeTheater ? 'Yes' : 'No'}</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 w-32">Lawn:</span>
                <span className="font-semibold">{propertyDetails.features.Lawn ? 'Yes' : 'No'}</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 w-32">Marble Floors:</span>
                <span className="font-semibold">{propertyDetails.features.marbleFloors ? 'Yes' : 'No'}</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Property Notes</h2>
            <p className="text-gray-600">{propertyDetails.propertiesCommonNotes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
