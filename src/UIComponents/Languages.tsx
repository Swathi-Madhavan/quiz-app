import { Box, Typography } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import { useNavigate } from "react-router-dom";
import { LanguagesItems } from "../model";



function Languages({ data }:Readonly<LanguagesItems>) {
    const navigate = useNavigate();

  function handleClick(lan : string) {
    if( lan === "C++")
    {
        navigate("/C++");
    }
    else if( lan === "Java")
    {
      navigate("/java")
    }
    else
    {
      navigate("/python");
    }
}

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
      {data.map((item, index) => (
        <button
          onClick={() => handleClick(item.name)}
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
            justifyContent: "space-evenly",
            cursor: "pointer",
            border: "none"
          }}
        >
          <div style={{
            width: "90px",
            height: "90px"
          }} >
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
        </button>
      ))}
    </Box>
  );
}

export default Languages;
