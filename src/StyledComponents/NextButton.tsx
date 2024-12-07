import { Button } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import { useState } from "react";

interface NextButtonProps {
    onhandleNextClickChange: () => void;
}



function NextButton({onhandleNextClickChange}:Readonly<NextButtonProps>) {

  function handleClick() {
    onhandleNextClickChange();
  }
  return (
    <Button
      onClick={handleClick}
      style={{
        width: "196px",
        height: "64px",
        borderRadius: "50px",
        boxShadow: "0 2px 13px 4px rgba(157, 87, 227, 0.25)",
        backgroundColor: QuizAppColorsProps.PurpleColor,
        position: "absolute",
        top: "758px",
        right: "105px",
        left: "110px",
        fontFamily: "Poppins",
        fontSize: "25px",
        fontWeight: "500",
        color: "#000",
        fontStyle: "normal",
        textTransform: "none",
      }}
    >
      Next
    </Button>
  );
}

export default NextButton;
