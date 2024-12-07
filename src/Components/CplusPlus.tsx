import { Box } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import CplusBackGroundImage from "../assets/CplusBackGroundImage";
import { useState } from "react";
import Questions from "../UIComponents/Questions";
import { CplusPlusData } from "../data";

function CplusPlus() {
  const [nextClickCount, setNextClickCount] = useState<number>(0);

  function handleNextClickCount() {
    let CountNumber = nextClickCount + 1;
    if( CplusPlusData.length > CountNumber)
    {
      setNextClickCount(CountNumber);
    }
    
  }

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
        <CplusBackGroundImage style={{ width: "100%", height: "100%" }} />
      </Box>
      <Questions
        NextClickCount={nextClickCount}
        onhandleNextClickChange={handleNextClickCount}
        Questiondata={CplusPlusData}
      />
    </div>
  );
}

export default CplusPlus;
