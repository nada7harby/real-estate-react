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

export default function overviewCmp() {
  let overviews = [
    {
      name: "Bedrooms",
      icon: <SingleBedIcon />,
      number: 3,
      sqft: false,
    },
    {
      name: "Bathrooms",
      icon: <BathroomIcon />,
      number: 3,
      sqft: false,
    },
    {
      name: "Garage",
      icon: <GarageIcon />,
      number: 2,
      sqft: false,
    },
    {
      name: "Year Built",
      icon: <DateRangeIcon />,
      number: 2018,
      sqft: false,
    },
    {
      name: "Area",
      icon: <AreaChartIcon />,
      number: 4300,
      sqft: true,
    },
    {
      name: "Lot Size",
      icon: <AspectRatioIcon />,
      number: 5400,
      sqft: true,
    },
  ];
  let agentInfo = [
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
  let additionalDetails = [
    {
      name: "BEDROOM FEATURES:",
      desc: "Main Floor Master Bedroom, Walk-In Closet",
    },
    {
      name: "DINING AREA:",
      desc: "Breakfast Counter/Bar, Living/Dining Combo",
    },
    { name: "DOORS & WINDOWS:", desc: "Bay Window" },
    { name: "ENTRY LOCATION:", desc: "Mid Level" },
    { name: "EXTERIOR CONSTRUCTION:", desc: "Wood" },
    { name: "FIREPLACE FUEL:", desc: "Pellet Stove" },
    { name: "FIREPLACE LOCATION:", desc: "Living Room" },
    {
      name: "FLOORS:",
      desc: "Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood",
    },
  ];
  let features = [{name : "2 Stories"} , {name : "Home Theater"} , {name : "Lawn"} , {name : "Marble Floors"}];
  return (
    <>
      <Container maxWidth="xl">
        <div className="flex align-center">
          <div className="w-2/3">
            <div
              className="overview flex gap-4 py-2 "
              style={{ alignItems: "anchor-center" }}
            >
              <p className="font-bold text-xl">Overview</p>
              <Divider
                className=""
                sx={{ borderColor: "#9e9e9e" }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <p className="font-bold  text-lg text-gray-400">
                Property ID : RH-2015-06
              </p>
              <Chip
                label="Featured"
                component="a"
                href="#basic-chip"
                size="small"
                clickable
                sx={{
                  backgroundColor: "#1db2ff !important",
                  color: "white",
                }}
              />
            </div>
            <Stack direction="row" spacing={2} className="my-5">
              {overviews.map((i) => {
                return (
                  <Box key={i.number} className="overview__box">
                    <Typography variant="subtitle2" className="title">
                      {i.name}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      sx={{
                        alignItems: "baseline",
                        display: "flex",
                      }}
                    >
                      <Typography
                        style={{
                          color: "var(--global-color-primary)",
                          width: "24px",
                          height: "24px",
                        }}
                        variant="h5"
                      >
                        {i.icon}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: "15px",
                          color: "var(--global-color-headings)",
                          fontWeight: "500",
                        }}
                      >
                        {i.number}
                        {i.sqft && (
                          <span
                            style={{ color: "var(--global-color-text)" }}
                            className="pl-2"
                          >
                            sq ft
                          </span>
                        )}
                      </Typography>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
            <div className="content__wrapper">
              <div className="text-xl font-bold mt-10 mb-5">Description</div>
              <p className="text-lg">
                Enchanting three bedroom, three bath home with spacious one
                bedroom, one bath cabana, in-laws quarters. Charming living area
                features fireplace and fabulous art deco details. Formal dining
                room. Remodeled kitchen with granite countertops, white
                cabinetry and stainless appliances. Lovely master bedroom has
                updated bath, beautiful view of the pool. Guest bedrooms have
                walk-in, cedar closets. Delightful backyard; majestic oaks
                surround the free form pool and expansive patio, wet bar and
                grill.
              </p>
            </div>
            {/* addition details */}
            <div className="additional__details__wrapper">
              <div className="text-xl font-bold mt-10 mb-5">
                Additional Details
              </div>
              <table className="min-w-full text-sm text-left mb-10">
                <tbody>
                  {additionalDetails.map((detail) => (
                    <tr className="odd:bg-white even:bg-gray-200">
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
            This is a common note that can be displayed on all properties but controlled from one simple option.
            </p>
            </div>
            {/* property features */}
            <div className="features__wrap">
              <div className="text-xl font-bold mt-10 mb-5">
                Features
              </div>
              <ul className="features-bullet-list">
                
                  {features.map((feature)=>{
                    return(
                      <li key={feature.name} className="flex-1 font-medium items-center flex gap-2 mb-4">
                  <CheckIcon
                  sx={{
                    color : "var(--global-color-primary)",
                    width : "22px",
                    height : "22px"
                  }}
                  />
                     <a href="#">
                      {feature.name}
                     </a>
                </li>
                    )
                  })}
              </ul>
            </div>
            {/* property video  */}
            <div className="property__video my-10">
            <div className="text-xl font-bold mt-10 mb-5">
                Property Video
            </div>
            <div className="aspect-video w-full">
  <ReactPlayer 
    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    width="100%" 
    height="100%"
    controls
    style={{ borderRadius: '12px', overflow: 'hidden' }}
  />
            </div>
            
            </div>
            <ScheduleTour
            />
            <Comments/>
          </div>
          <div className="w-1/3">
            <Stack direction="row" spacing={2} sx={{ marginBottom: "20px" }}>
              <Avatar
                src="../../../public/avatars/avatar_1.jpg"
                sx={{ width: 120, height: 120 }}
              />
              <Stack direction="column" spacing={2}>
                <Typography
                  className="title"
                  variant="subtitle2"
                  style={{ fontWeight: "bold" }}
                >
                  Agent
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ marginTop: "0px !important", fontWeight: "bold" }}
                >
                  Melissa William
                </Typography>
                <Typography
                  variant="body1"
                  component="a"
                  sx={{
                    color: "var(--global-color-primary)",
                    fontWeight: "bold",
                    cursor: "pointer",
                    "&:hover": {
                      color: "var(--global-color-headings)",
                    },
                  }}
                >
                  View My Listings
                </Typography>
              </Stack>
            </Stack>
            <Box>
              {agentInfo.map((info) => {
                return (
                  <Stack
                    direction="row"
                    spacing={5}
                    className="contact__office"
                  >
                    <Typography>{info.name}</Typography>
                    <Stack direction="row" spacing={4}>
                      <span
                        style={{
                          color: "var(--global-color-primary)",
                        }}
                      >
                        {info.icon}
                      </span>
                      <a href="#">{info.socialContact}</a>
                    </Stack>
                  </Stack>
                );
              })}
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
}
