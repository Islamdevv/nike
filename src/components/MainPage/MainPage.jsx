import React from "react";
import SideBar from "../SideBar/SideBar";
import ProductCard from "../product/ProductCard";
import { Box } from "@mui/material";

const MainPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "30px",
      }}
    >
      <SideBar />
      <ProductCard />
    </Box>
  );
};

export default MainPage;
