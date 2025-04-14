import React from "react";
import CompareProperties from "../CompareComponents/CompareProperties";
import CompareTable from "../CompareComponents/CompareTable";
import { useCompare } from "../common/CompareContext";
import ComparePanel from "../common/ComparePanal";
const Compare = () => {
  console.log(useCompare());
  const {compareList} = useCompare();
  console.log(compareList);
  return (
    <>
      <CompareProperties />
      <CompareTable
       />
       <ComparePanel />
    </>
  );
};

export default Compare;
