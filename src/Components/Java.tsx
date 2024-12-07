import { Box } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import QuestionDiv from "../StyledComponents/QuestionDiv";
import Options from "../StyledComponents/Options";
import NextButton from "../StyledComponents/NextButton";
import JavaBackGroundImage from "../assets/JavaBackGroundImage";

function Java() {
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
       <JavaBackGroundImage style={{ width: "100%", height: "100%"}}/> 
      </Box>
      {/* <QuestionDiv /> */}
      <Options />
      {/* <NextButton /> */}
      
    </div>
  );
}


export default Java;
