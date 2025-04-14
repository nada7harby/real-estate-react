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
import { useCompare } from "../../components/common/CompareContext";
import { useEffect } from "react";
import { useState } from "react";
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

// const features = [
//   "Type",
//   "Location",
//   "Lot Size",
//   "Property Size",
//   "Property ID",
//   "Year Built",
//   "Bedrooms",
//   "Bathrooms",
//   "Garages",
//   "2 Stories",
//   "Bike Path",
//   "Central Cooling",
//   "Central Heating",
//   "Dual Sinks",
//   "Electric Range",
//   "Emergency Exit",
//   "Fire Alarm",
//   "Fire Place",
//   "Home Theater",
//   "Jog Path",
//   "Laundry Room",
//   "Lawn",
//   "Marble Floors",
//   "Swimming Pool",
// ];

// const cards = [
//   {
//     title: "Home in Merrick Way",
//     status: "For Sale",
//     price: 540000,
//     image: img1,
//   },
//   {
//     title: "Home in Merrick Way",
//     status: "For Sale",
//     price: 540000,
//     image: img1,
//   }
// ];

// const propertyData = [
//   { type: "Villa", location: "Miami", lotSize: "5000 sqft", bedrooms: 3, bathrooms: 2, garage: "yes" },
//   { type: "Apartment", location: "LA", lotSize: "2000 sqft", bedrooms: 2, lawn: "yes", bathrooms: 1, swimmingpool: "yes", firealarm: "no" },
//   { type: "Apartment", location: "LA", lotSize: "2000 sqft", bedrooms: 2, lawn: "yes", bathrooms: 1, swimmingpool: "yes", firealarm: "no" },
// ];

export default function CompareTable() {
  const { compareList } = useCompare();
  const [filteredData, setfilteredData] = useState([]);
  let ids = compareList.map(one => one.id);
  console.log(ids);
  useEffect(() => {
    fetch('/data/properties.json').then(res => res.json()).then(
      (data) => {
        // console.log(data);
        let filtered = data.properties
  .filter(item => ids.includes(item.id))
  .sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
        setfilteredData(filtered);
        console.log(filteredData , 'filter');
      }
    )
  }, [compareList])
  console.log(filteredData , 'filter');
  // let { address , features , id , overview , price , status , type , yearBuilt} = filteredData ;

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
                {compareList.map((card, index) => (
                  <StyledTableCell key={index} align="center">
                    <CompareCardCell {...card} />
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
  {/* Address */}
  <StyledTableRow>
    <StyledTableCell align="center">Address</StyledTableCell>
    {filteredData.map((prop, idx) => (
      <StyledTableCell key={idx} align="center">{prop.address}</StyledTableCell>
    ))}
  </StyledTableRow>

  {/* Price */}
  <StyledTableRow>
    <StyledTableCell align="center">Price</StyledTableCell>
    {filteredData.map((prop, idx) => (
      <StyledTableCell key={idx} align="center">{prop.price}</StyledTableCell>
    ))}
  </StyledTableRow>

  {/* Type */}
  <StyledTableRow>
    <StyledTableCell align="center">Type</StyledTableCell>
    {filteredData.map((prop, idx) => (
      <StyledTableCell key={idx} align="center">{prop.type}</StyledTableCell>
    ))}
  </StyledTableRow>

  {/* Status */}
  <StyledTableRow>
    <StyledTableCell align="center">Status</StyledTableCell>
    {filteredData.map((prop, idx) => (
      <StyledTableCell key={idx} align="center">{prop.status}</StyledTableCell>
    ))}
  </StyledTableRow>

  {/* Year Built */}
  <StyledTableRow>
    <StyledTableCell align="center">Year Built</StyledTableCell>
    {filteredData.map((prop, idx) => (
      <StyledTableCell key={idx} align="center">{prop.yearBuilt}</StyledTableCell>
    ))}
  </StyledTableRow>

  {/* Overview */}
  {["bedrooms", "bathrooms", "garage", "area", "lotSize"].map((key) => (
    <StyledTableRow key={key}>
      <StyledTableCell align="center">{key}</StyledTableCell>
      {filteredData.map((prop, idx) => (
        <StyledTableCell key={idx} align="center">
          {prop.overview?.[key] ?? "-"}
        </StyledTableCell>
      ))}
    </StyledTableRow>
  ))}

  {/* Features */}
  {["stories", "HomeTheater", "Lawn", "marbleFloors"].map((key) => (
    <StyledTableRow key={key}>
      <StyledTableCell align="center">{key}</StyledTableCell>
      {filteredData.map((prop, idx) => (
        <StyledTableCell key={idx} align="center">
          {typeof prop.features?.[key] === "boolean"
            ? prop.features[key] ? "Yes" : "No"
            : prop.features?.[key] ?? "-"}
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
