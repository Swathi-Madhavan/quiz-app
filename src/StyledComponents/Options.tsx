import { Typography } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";

const options = ["A", "B", "C", "D"];

function Options() {
  return (
    <div
      style={{
        width: "316px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "25px",
        backgroundColor: QuizAppColorsProps.PaleWhiteColor,
        position: "absolute",
        top: "437px",
        right: "47px",
        left: "48px",
        borderRadius: "12px"
      }}
    >
      {options.map((item, id) => (
        <div key={item} style={{
            width: "100%",
            height: "55px",
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
            boxShadow: "0 2px 13px 4px rgba(157, 87, 227, 0.25)"
        }}>
            <Typography style={{
                width: "43px",
                height: "20px",
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: "500",
                textAlign: "center",
                color: QuizAppColorsProps.VioletColor,
                margin: "17px 256px 18px 17px"
            }}>
            {item}
            </Typography>
            </div>
      ))}
    </div>
  );
}

export default Options;
