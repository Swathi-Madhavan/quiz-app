export interface QuizAppColors {
  PaleWhiteColor: string;
  VioletColor: string;
  RedColor: string;
  PurpleColor: string;
}

export interface LanguagesInfo {
  name: string;
  Image: React.ReactNode;
}

export interface LanguagesItems 
{
  data: Array<LanguagesInfo>;
}

export type LanguagesProps = Array<LanguagesInfo>;

export interface CplusPlusQuestionsInfo {
  question: string;
  Ans: string;
}

export interface CplusPlusQuestionsItems {
  data: Array<CplusPlusQuestionsInfo>;
}

export type CplusPlusQuestionsProps = Array<CplusPlusQuestionsInfo>;

export interface OptionsInfo {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface OptionsItems {
  data: Array<OptionsInfo>;
}

export type OptionsProps = Array<OptionsInfo>;
