import React from 'react'
import ImagesSlider from '../common/ImagesSlider.jsx'
import OverviewCmp from '../common/overviewCmp.jsx'
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";
import img6 from "../../assets/images/img-6.jpg";

export default function PropertySingle() {
  let propertyDetails = {
    id: "RH-2015-06",
    title: "Home in Merrick Way",
    price: "$540,000",
    address: "Merrick Way, Miami, FL 33134, USA",
    type: "Villa",
    status: "For Sale",
    yearBuilt: 2019,
    images : [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ],
    overview : {
        bathrooms : 3,
        bedrooms : 3,
        garage : 2,
        area : 4300 ,
        lotSize : 5400 
    },
    description : `
    Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.
    `,
    additionalDetails : [
        {name : "BEDROOM FEATURES:",desc :  "Main Floor Master Bedroom, Walk-In Closet"},
         {name : "DINING AREA:", desc : "Breakfast Counter/Bar, Living/Dining Combo"},
        {name : "DOORS & WINDOWS:", desc : "Bay Window"},
        {name : "ENTRY LOCATION:", desc : "Mid Level"},
        {name : "EXTERIOR CONSTRUCTION:",desc :  "Wood"},
        {name : "FIREPLACE FUEL:", desc : "Pellet Stove"},
        {name : "FIREPLACE LOCATION:", desc : "living Room"},
        {name : "FLOORS:", desc : "Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood"}
    ],
    propertiesCommonNotes : "This is a common note that can be displayed on all properties but controlled from one simple option.",
    features : {
        stories : 2 ,
        HomeTheater : true ,
        Lawn : true ,
        marbleFloors : true ,
    },
    video : {img1},

  }
  return (
    <div className='property-single'>
         <ImagesSlider
             details={propertyDetails} 
         />
        
        <OverviewCmp
        detailsOverviews={propertyDetails}
        />
        {/* <CustomForm/> */}
    </div>
  )
}