import { Typography } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";


function QuestionDiv() {
    return (
        <div style={{
            width: "316px",
            height: "138px",
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
            position: "absolute",
            top: "265px",
            right: "44px",
            left: "51px"
        }}>
            <Typography sx={{
                fontFamily: "Poppins",
                fontSize: "35px",
                fontWeight: "500",
                fontStretch: "normal",
                textAlign: "center",
                color: QuizAppColorsProps.VioletColor
            }}>
                Questions
            </Typography>
        </div>
    );
}


export default QuestionDiv;