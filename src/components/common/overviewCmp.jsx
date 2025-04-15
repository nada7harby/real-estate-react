import React from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BathroomIcon from "@mui/icons-material/Bathroom";
import GarageIcon from "@mui/icons-material/Garage";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AreaChartIcon from "@mui/icons-material/AreaChart";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
// import overviewStyles from "../../styles/components/overviewStyles.module.css";
import Avatar from "@mui/material/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/components/overviewStyles.css";
import CheckIcon from '@mui/icons-material/Check';
import ReactPlayer from 'react-player'
import ScheduleTour from '../../components/common/ScheduleTour'
import Comments from "./CommentsComponent";
import Agent from "./Agent";
import img1 from "../../../public/avatars/avatar_1.jpg"
import img2 from "../../../public/avatars/avatar_2.jpg"
import OverviewsComponent from "./OverviewsComponent";

export default function overviewCmp({ detailsOverviews }) {
  console.log(detailsOverviews);

  const agentInfo = [
    { name: "Office", icon: <PhoneIcon />, socialContact: "1-222-333-4444" },
    { name: "Mobile", icon: <PhoneIcon />, socialContact: "1-234-456-7892" },
    { name: "Fax", icon: <FaxIcon />, socialContact: "1-333-444-5555" },
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon />,
      socialContact: "1-222-333-4422",
    },
    {
      name: "Email",
      icon: <EmailIcon />,
      socialContact: "robot@inspirythemes.com",
    },
  ];

  const features = [
    { name: `${detailsOverviews.features.stories} Stories` },
    { name: detailsOverviews.features.HomeTheater ? "Home Theater" : null },
    { name: detailsOverviews.features.Lawn ? "Lawn" : null },
    { name: detailsOverviews.features.marbleFloors ? "Marble Floors" : null }
  ].filter(feature => feature.name !== null);

  const agentsDetails = [
    {
      status: "Agent",
      name: "Melissa Williams",
      social_media: [
        { name: "Office", icon: <PhoneIcon />, socialContact: "1-222-333-4444" },
        { name: "Mobile", icon: <PhoneIcon />, socialContact: "1-234-456-7892" },
        { name: "Fax", icon: <FaxIcon />, socialContact: "1-333-444-5555" },
      ],
      img: img1
    },
    {
      status: "Agent",
      name: "John David",
      social_media: [
        { name: "Office", icon: <PhoneIcon />, socialContact: "1-222-333-4444" },
        { name: "Mobile", icon: <PhoneIcon />, socialContact: "1-234-456-7892" },
        { name: "Fax", icon: <FaxIcon />, socialContact: "1-333-444-5555" },
      ],
      img: img2
    }
  ];

  return (
    <>
      <Container maxWidth="xl">
        <div className="flex align-center">
          <div className="w-2/3">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">{detailsOverviews.title}</h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-blue-600 font-semibold">{detailsOverviews.price}</span>
                <span className="text-gray-600">{detailsOverviews.address}</span>
              </div>
            </div>

            <OverviewsComponent details={detailsOverviews} />
           
            <div className="content__wrapper">
              <div className="text-xl font-bold mt-10 mb-5">Description</div>
              <p className="text-lg">
                {detailsOverviews.description}
              </p>
            </div>
            {/* addition details */}
            <div className="additional__details__wrapper">
              <div className="text-xl font-bold mt-10 mb-5">
                Additional Details
              </div>
              <table className="min-w-full text-sm text-left mb-10">
                <tbody>
                  {detailsOverviews.additionalDetails.map((detail, index) => (
                    <tr key={index} className="odd:bg-white even:bg-gray-200">
                      <td className="px-4 py-2 text-base font-medium">
                        {detail.name}
                      </td>
                      <td className="px-4 py-2 font-normal text-base text__gry">
                        {detail.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* properties common note */}
            <div className="common__note">
              <div className="text-xl font-bold mt-10 mb-5">
                Properties Common Note
              </div>
              <p>
                {detailsOverviews.propertiesCommonNotes}
              </p>
            </div>
            {/* property features */}
            <div className="features__wrap">
              <div className="text-xl font-bold mt-10 mb-5">
                Features
              </div>
              <ul className="features-bullet-list flex">
                {features.map((feature, index) => (
                  <li key={index} className="flex-1 font-medium items-center flex gap-2 mb-4">
                    <CheckIcon
                      sx={{
                        color: "var(--global-color-primary)",
                        width: "22px",
                        height: "22px"
                      }}
                    />
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* property video */}
            {/* {detailsOverviews.video && (
              <div className="property__video my-10">
                <div className="text-xl font-bold mt-10 mb-5">
                  Property Video
                </div>
                <div className="aspect-video w-full">
                  <img 
                    src={detailsOverviews.video} 
                    alt="Property Video Thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            )} */}
            <ScheduleTour />
            <Comments />
          </div>
          <div className="w-1/3">
            <Agent agentsDetails={agentsDetails} />
          </div>
        </div>
      </Container>
    </>
  );
}
