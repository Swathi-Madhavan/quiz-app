import { Button, Typography } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";



function NextButton() {
    return (
        <Button style={{
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
                fontStyle: "normal"
        }}>
            
               Next
            
        </Button>
    );
}

export default NextButton;