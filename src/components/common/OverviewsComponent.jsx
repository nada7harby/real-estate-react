import React from "react";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BathroomIcon from "@mui/icons-material/Bathroom";
import GarageIcon from "@mui/icons-material/Garage";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AreaChartIcon from "@mui/icons-material/AreaChart";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
export default function OverviewsComponent({details}) {
    // console.log(details);
    let overviews = [
        {
          name: "Bedrooms",
          icon: <SingleBedIcon />,
          number: details.overview.bedrooms,
          sqft: false,
        },
        {
          name: "Bathrooms",
          icon: <BathroomIcon />,
          number: details.overview.bathrooms,
          sqft: false,
        },
        {
          name: "Garage",
          icon: <GarageIcon />,
          number: details.overview.garage,
          sqft: false,
        },
        {
          name: "Year Built",
          icon: <DateRangeIcon />,
          number: details.yearBuilt,
          sqft: false,
        },
        {
          name: "Area",
          icon: <AreaChartIcon />,
          number: details.overview.area,
          sqft: true,
        },
        {
          name: "Lot Size",
          icon: <AspectRatioIcon />,
          number: details.overview.lotSize,
          sqft: true,
        },
      ];
  return (
    <>
    
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
          Property ID : {details.id}
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
    </>
  );
}
