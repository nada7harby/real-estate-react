import React from "react";
import { Card, CardContent, Button, Chip } from "@mui/material";
import { Icon } from "@iconify/react";
import { PropertyViewer } from "./Property-viewer";
import { properties } from "../../assets/Data/properties.js";

export default function AllProperties() {
  return (
    <div className=" bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <PropertyViewer properties={properties} />
      </div>
    </div>
  );
}
