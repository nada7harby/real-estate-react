import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImagesSlider from '../common/ImagesSlider.jsx';
import OverviewCmp from '../common/overviewCmp.jsx';
import { useProperties } from '../common/PropertiesContext';
import LoadingSpinner from '../common/LoadingSpinner';
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";
import img6 from "../../assets/images/img-6.jpg";

const imageMap = {
  "/images/blog-post-1.jpg": img1,
  "/images/blog-post-2.jpg": img2,
  "/images/blog-post-3.jpg": img3,
  "/images/blog-post-4.jpg": img4,
  "/images/blog-post-5.jpg": img5,
  "/images/blog-post-6.jpg": img6
};

export default function PropertySingle() {
  const { id } = useParams();
  const { properties } = useProperties();
  // console.log(properties);
  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id);
    
    console.log(foundProperty);
    if (foundProperty) {
      setProperty(foundProperty);
    }
    setLoading(false);
  }, [id, properties]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!property) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-red-500">Property not found</h1>
      </div>
    );
  }

  const propertyDetails = {
    id: property.id,
    title: property.title,
    price: property.price,
    address: property.address,
    type: property.type,
    status: property.status,
    yearBuilt: property.yearBuilt,
    images: property.images.map(imgPath => imageMap[imgPath] || img1),
    overview: {
      bathrooms: property.overview.bathrooms,
      bedrooms: property.overview.bedrooms,
      garage: property.overview.garage,
      area: property.overview.area,
      lotSize: property.overview.lotSize
    },
    description: property.description,
    additionalDetails: property.additionalDetails,
    propertiesCommonNotes: property.propertiesCommonNotes,
    features: {
      stories: property.features.stories,
      HomeTheater: property.features.HomeTheater,
      Lawn: property.features.Lawn,
      marbleFloors: property.features.marbleFloors
    },
    video: imageMap[property.video] || img1
  };

  console.log(propertyDetails);
  
  return (
    <div className='property-single'>
      <ImagesSlider details={propertyDetails} />
      <OverviewCmp detailsOverviews={propertyDetails} />
    </div>
  );
}