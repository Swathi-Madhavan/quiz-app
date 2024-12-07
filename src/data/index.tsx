import CplusplusImage from "../assets/CplusplusImage";
import JavaImage from "../assets/JavaImage";
import PythonImage from "../assets/PythonImage";
import { CplusPlusQuestionsProps, LanguagesProps, OptionsProps } from "../model";

export const LanguagesData: LanguagesProps = [
  {
    name: "C++",
    Image: <CplusplusImage style={{ width: "100%", height: "100%" }} />,
  },
  {
    name: "Java",
    Image: <JavaImage style={{ width: "100%", height: "100%" }} />,
  },
  {
    name: "Python",
    Image: <PythonImage style={{ width: "100%", height: "100%" }} />,
  },
];

export const CplusPlusData: CplusPlusQuestionsProps = [
  {
    question: "1.What is the size of int in C++?",
    Ans: "4 bytes",
  },
  {
    question: "2.Which operator is used to allocate memory dynamically in C++?",
    Ans: "new",
  },
  {
    question:
      "3.Which of the following keywords is used to define a function that does not return a value in C++?",
    Ans: "void",
  },
  {
    question: "4.Which function is used to get the length of a string in C++?",
    Ans: "Both A and B",
  },
  {
    question:
      "5.Which of the following is the correct way to declare a pointer to an integer in C++?",
    Ans: "int* ptr",
  },
  {
    question: "6.What is the purpose of the break statement in a loop?",
    Ans: "To exit the loop and continue with the next statement after the loop.",
  },
  {
    question: "7.Which operator is used for logical AND in C++?",
    Ans: "&&",
  },
  {
    question: "8.What does the sizeof operator return?",
    Ans: "Both A and B",
  },
  {
    question: "9. Which of the following is not a type of Constructor in C++?",
    Ans: "Friend constructor",
  },
  {
    question: "10.Which of the following correctly declares an array in C++?",
    Ans: "int array[10]",
  },
];

export const OptionsData : OptionsProps = [
    {
        A : "2 bytes",
        B : "4 bytes",
        C : "8 bytes",
        D : "Depends on the compiler"
    },
    {
        A : "new",
        B : "malloc",
        C : "alloc",
        D : "calloc"
    },
    {
        A : "void",
        B : "empty",
        C : "null",
        D : "nothing"
    },
    {
        A : "length()",
        B : "size()",
        C : "get_length()",
        D : "Both A and B"
    },
    {
        A : "int* ptr",
        B : "pointer int* ptr",
        C : "ptr int*",
        D : "int ptr*"
    },
    {
        A : "To exit the loop and continue with the next iteration.",
        B : "4 bytes",
        C : "8 bytes",
        D : "Depends on the compiler"
    },
    {
        A : "&&",
        B : "&",
        C : "||",
        D : "!"
    },
    {
        A : "The size of the object in memory.",
        B : "The size of the data type.",
        C : "The number of elements in an array.",
        D : "Both A and B."
    },
    {
        A : "Default constructor",
        B : "Parameterized constructor",
        C : "Copy constructor",
        D : "Friend constructor"
    },
    {
        A : "array{10};",
        B : "array array[10];",
        C : "int array;",
        D : "int array[10];"
    },

]
