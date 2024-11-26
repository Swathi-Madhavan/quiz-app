import { Box, Typography } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import CplusplusImage from "../assets/CplusplusImage";
import JavaImage from "../assets/JavaImage";
import PythonImage from "../assets/PythonImage";

const languages = [
  {
    name: "C++",
    Image: <CplusplusImage style={{ width: "100%", height: "100%"}}/>
  },
  {
    name: "Java",
    Image: <JavaImage style={{ width: "100%", height: "100%"}}/>
  },
  {
    name: "Python",
    Image: <PythonImage style={{ width: "100%", height: "100%"}}/>
  }
];

function Languages() {
  return (
    <Box
      sx={{
        width: "316px",
        // height: "456px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: QuizAppColorsProps.PaleWhiteColor,
        gap: "26px",
        position: "absolute",
        top: "335px",
        left: "50px",
        right: "45px",
        borderRadius: "15px",
      }}
    >
      {languages.map((item, id) => (
        <div
          key={item.name}
          style={{
            width: "316px",
            height: "138px",
            flexGrow: "0",
            borderRadius: "15px",
            boxShadow: "0 2px 13px 4px rgba(157, 87, 227, 0.25)",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
          <div style={{
            width: "90px",
            height: "90px"
          }}>
          {item.Image}
          </div>
          <Typography sx={{
            fontFamily: "Poppins",
            fontSize: "35px",
            fontWeight: "500",
            fontStretch: "normal",
            textAlign: "center",
            color: QuizAppColorsProps.VioletColor
          }}>
          {item.name}
          </Typography>
        </div>
      ))}
    </Box>
  );
}

export default Languages;
