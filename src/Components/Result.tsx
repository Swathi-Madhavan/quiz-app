import { Box } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import ResultImage from "../assets/ResultImage";
import CompletedImage from "../assets/CompletedImage";




function Result() {
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
      <ResultImage style={{ width: "100%", height: "100%"}}/>
      <div style={{
        width: "300px",
        height: "300px",
        position: "absolute",
        top:"569px",
        right: "56px",
        left: "55px"
      }}>
        <CompletedImage style={{ width: "100%", height: "100%"}} />
      </div>
      
    </div>
    );
}



export default Result;