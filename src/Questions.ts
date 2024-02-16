export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "What is a union type in TypeScript?",
    answer:
      "A type that represents values that can be of several different types.",
  },
  {
    id: 2,
    question: "Explain the concept of type inference in TypeScript.",
    answer:
      "TypeScript's ability to automatically determine the type of a value based on its usage.",
  },
  {
    id: 3,
    question: "How do you declare an array type in TypeScript?",
    answer: "By using the syntax 'type[]' or 'Array<type>'.",
  },
  {
    id: 4,
    question: "What is a literal type in TypeScript?",
    answer:
      "A type that represents a specific value, such as 'true', 'false', or a string literal.",
  },
  {
    id: 5,
    question: "Define the 'any' type in TypeScript.",
    answer: "A type that represents any value and disables type checking.",
  },
  {
    id: 6,
    question: "How do you define optional properties in TypeScript interfaces?",
    answer: "By adding a '?' after the property name.",
  },
  {
    id: 7,
    question: "Explain the 'readonly' modifier in TypeScript.",
    answer: "It makes properties of an object immutable after initialization.",
  },
  {
    id: 8,
    question: "What is the 'never' type in TypeScript?",
    answer: "A type representing values that never occur.",
  },
  {
    id: 9,
    question: "How do you define a type alias in TypeScript?",
    answer:
      "By using the 'type' keyword followed by the alias name and type definition.",
  },
  {
    id: 10,
    question: "What is the 'as' keyword used for in TypeScript?",
    answer:
      "It performs a type assertion, allowing you to override the type checker.",
  },
  {
    id: 11,
    question:
      "Is TypeScript the TRUE meaning of Life",
    answer:
      "YES.",
  },
  {
    id: 12,
    question: "What is an intersection type in TypeScript?",
    answer: "A type that combines multiple types into one.",
  },
  {
    id: 13,
    question: "How do you define function types in TypeScript?",
    answer:
      "By specifying the parameter types and return type of the function.",
  },
  {
    id: 14,
    question: "Explain the 'typeof' operator in TypeScript.",
    answer:
      "It returns the type of a variable, function, or property as a string.",
  },
  {
    id: 15,
    question: "What is a conditional type in TypeScript?",
    answer:
      "A type that depends on a condition expressed as a type relationship.",
  },
  {
    id: 16,
    question: "How do you create a type assertion in TypeScript?",
    answer:
      "By using the 'as' keyword or angle brackets (<>) to specify a type for a variable.",
  },
  {
    id: 17,
    question: "Explain the 'infer' keyword in TypeScript.",
    answer: "It allows the inference of types within conditional types.",
  },
  {
    id: 18,
    question: "What is the 'keyof' operator used for in TypeScript?",
    answer: "It generates a union type of all keys in an object type.",
  },
  {
    id: 19,
    question: "Define the 'never' type in TypeScript.",
    answer: "A type representing values that never occur.",
  },
  {
    id: 20,
    question: "How do you create a mapped type in TypeScript?",
    answer: "By using the 'keyof' operator and mapping over existing types.",
  },
];
