export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building UIs.",
  },
  {
    id: 2,
    question: "What is TypeScript?",
    answer: "A superset of JavaScript adding static types.",
  },
  {
    id: 3,
    question: "Explain JSX.",
    answer: "Syntax extension for writing HTML in JavaScript.",
  },
  {
    id: 4,
    question: "What are React props?",
    answer: "Inputs to components, immutable.",
  },
  {
    id: 5,
    question: "What is the useEffect hook?",
    answer: "Performs side effects in functional components.",
  },
  {
    id: 6,
    question: "Difference between class & functional components?",
    answer: "State & lifecycle in class, props in functional.",
  },
  {
    id: 7,
    question: "Define a higher-order component (HOC).",
    answer: "A function that enhances component functionality.",
  },
  {
    id: 8,
    question: "How do you define interfaces in TypeScript?",
    answer: "Specifies object structure.",
  },
  {
    id: 9,
    question: "What is a type assertion in TypeScript?",
    answer: "Typecasting, used to override inferred types.",
  },
  {
    id: 10,
    question: "What is the keyof keyword in TypeScript?",
    answer: "Generates union type of object keys.",
  },
  {
    id: 11,
    question:
      "What is the difference between interface and type in TypeScript?",
    answer: "Interface is open for extension, type alias is a name for a type.",
  },
  {
    id: 12,
    question: "What is a generic type in TypeScript?",
    answer: "A type that is parameterized over other types.",
  },
  {
    id: 13,
    question: "What is a type guard in TypeScript?",
    answer: "A runtime check to ensure a type in a conditional block.",
  },
  {
    id: 14,
    question:
      "What is the key difference between 'null' and 'undefined' in TypeScript?",
    answer:
      "'undefined' represents a variable that has been declared but not assigned, 'null' is assigned but empty.",
  },
  {
    id: 15,
    question: "What is a tuple in TypeScript?",
    answer: "An array with fixed number of elements, each with specific type.",
  },
];
