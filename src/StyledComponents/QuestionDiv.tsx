import { Typography } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import { CplusPlusQuestionsProps } from "../model";
import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";

interface QuestionDivProps {
  NextClickCount: number;
  onhandleNextClickChange: () => void;
  QuestionDivData: CplusPlusQuestionsProps;
}

function QuestionDiv({
  QuestionDivData,
  NextClickCount,
  onhandleNextClickChange,
}: Readonly<QuestionDivProps>) {
  return (
    <div
      style={{
        width: "316px",
        height: "138px",
        borderRadius: "14px",
        backgroundColor: "#FFFFFF",
        position: "absolute",
        top: "265px",
        right: "44px",
        left: "51px",
      }}
    >
      {QuestionDivData?.map(
        (item, index: number) => (
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "35px",
              fontWeight: "500",
              fontStretch: "normal",
              textAlign: "center",
              color: QuizAppColorsProps.VioletColor,
            }}
            key={item.question}
          >
            {NextClickCount === index ? item.question : null}
          </Typography>
        )
      )}
    </div>
  );
}

export default QuestionDiv;
