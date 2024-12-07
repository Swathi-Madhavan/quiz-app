import { Box } from "@mui/material";
import { QuizAppColorsProps } from "../Themes/ColorPallets";
import QuestionDiv from "../StyledComponents/QuestionDiv";
import Options from "../StyledComponents/Options";
import NextButton from "../StyledComponents/NextButton";
import { CplusPlusQuestionsItems, CplusPlusQuestionsProps } from "../model";
import { data } from "react-router-dom";
interface QuestionsProps {
  NextClickCount: number;
  onhandleNextClickChange: () => void;
  Questiondata: CplusPlusQuestionsProps;
}

function Questions({
  NextClickCount,
  onhandleNextClickChange,
  Questiondata,
}: Readonly<QuestionsProps>) {
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
      ></Box>
      <QuestionDiv
        NextClickCount={NextClickCount}
        onhandleNextClickChange={onhandleNextClickChange}
        QuestionDivData={Questiondata}
      />
      <Options />
      <NextButton onhandleNextClickChange={onhandleNextClickChange} />
    </div>
  );
}

export default Questions;
