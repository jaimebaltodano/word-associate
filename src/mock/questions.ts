export enum correctOptions {
  incorrect = 1,
  correct = 2,
}
export type quizType = {
  quiz: string[];
  options: string[];
  correct: correctOptions;
};

export type question = quizType[];

export const questions: question = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 2,
  },
  {
    quiz: ["close", "near", "next"],
    options: ["trace", "adjacent"],
    correct: 2,
  },
  {
    quiz: ["foreign", "national", "ethnic"],
    options: ["mad", "exotic"],
    correct: 2,
  },
  {
    quiz: ["assume", "insight", "weather"],
    options: ["forecast", "sustainable"],
    correct: 1,
  },
  {
    quiz: ["fast", "quick", "prompt"],
    options: ["charity", "rapid"],
    correct: 2,
  },
];
