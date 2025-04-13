import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CompareCardCell from "./CompareCardCell";
import img1 from "../../assets/images/myFav/1.jpg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.common.black,
    position: "sticky",
    top: 0,
    zIndex: 1,
    padding: 8,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": { border: 0 },
}));

const features = [
  "Type",
  "Location",
  "Lot Size",
  "Property Size",
  "Property ID",
  "Year Built",
  "Bedrooms",
  "Bathrooms",
  "Garages",
  "2 Stories",
  "Bike Path",
  "Central Cooling",
  "Central Heating",
  "Dual Sinks",
  "Electric Range",
  "Emergency Exit",
  "Fire Alarm",
  "Fire Place",
  "Home Theater",
  "Jog Path",
  "Laundry Room",
  "Lawn",
  "Marble Floors",
  "Swimming Pool",
];

const cards = [
  {
    title: "Home in Merrick Way",
    status: "For Sale",
    price: 540000,
    image: img1,
  },
  {
    title: "Home in Merrick Way",
    status: "For Sale",
    price: 540000,
    image: img1,
  },
  {
    title: "Home in Merrick Way",
    status: "For Sale",
    price: 540000,
    image: img1,
  },
  {
    title: "Home in Merrick Way",
    status: "For Sale",
    price: 540000,
    image: img1,
  },

];

const propertyData = [
  { type: "Villa", location: "Miami", lotSize: "5000 sqft", bedrooms: 3, bathrooms: 2, garage: "yes" },
  { type: "Apartment", location: "LA", lotSize: "2000 sqft", bedrooms: 2, lawn: "yes", bathrooms: 1, swimmingpool: "yes", firealarm: "no" },
  { type: "Apartment", location: "LA", lotSize: "2000 sqft", bedrooms: 2, lawn: "yes", bathrooms: 1, swimmingpool: "yes", firealarm: "no" },
];

export default function CompareTable() {
  return (
    <div className="m-8 rounded-xl border-12 border-sky-200">
      <div className="overflow-x-auto">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800}} aria-label="compare table">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <StyledTableCell align="center ">
                  <button className="font-bold m-5 bg-blue-500 text-white border-2 border-blue-500 px-10 py-2 rounded-4xl transition duration-300 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:cursor-pointer">
                    Share
                  </button>
                </StyledTableCell>
                {cards.map((card, index) => (
                  <StyledTableCell key={index} align="center">
                    <CompareCardCell {...card} />
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {features.map((feature, idx) => (
                <StyledTableRow key={idx}>
                  <StyledTableCell component="th" scope="row">
                    {feature}
                  </StyledTableCell>
                  {cards.map((card, cIdx) => (
                    <StyledTableCell key={cIdx} align="left">
                      {/* هنا تحط الداتا المناسبة من propertyData أو props */}
                      {/* كمثال: */}
                      {propertyData[cIdx]?.[
                        feature.toLowerCase().replace(/\s+/g, "")
                      ] || "-"}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
