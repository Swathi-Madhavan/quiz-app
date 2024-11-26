import React from "react";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import { Box } from "@mui/material";
import BackGroundImage from "../assets/BackGroundImage";
import Languages from "../UIComponents/Languages";

console.log("Log from Main Activity");

function MainActivity() {
  return (
    <div
      style={{
        width: "411px",
        height: "869px",
        backgroundColor: QuizAppColorsProps.PaleWhiteColor,
        margin: "100px 150px 100px 400px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "411px",
          height: "445px",
          margin: "0 0 54px",
          backgroundColor: QuizAppColorsProps.PurpleColor,
          borderBottomLeftRadius: "2px",
          position: "relative",
          WebkitBorderBottomLeftRadius: "18px",
          borderBottomRightRadius: "18px",
        }}
      >
        <BackGroundImage style={{ width: "100%", height: "100%" }} />
      </Box>
      <Languages />
    </div>
  );
}

export default MainActivity;
