import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CompareCardCell = ({ title, status, price, images }) => {
  return (
    <Card sx={{ maxWidth: 300 }} className="min-w-[220px] rounded-xl shadow-md">
      <CardMedia className="hover:cursor-pointer" component="img" height="140" image={images[0]} alt={title} />
      <CardContent>
        <Typography variant="h6" className="font-semibold hover:cursor-pointer hover:text-blue-500">{title}</Typography>
        <Typography variant="body2" className="text-blue-500" sx={{ fontWeight: 'bold' }}>{status}</Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>${price.toLocaleString()}</Typography>
      </CardContent>
    </Card>
  );
};

export default CompareCardCell;
