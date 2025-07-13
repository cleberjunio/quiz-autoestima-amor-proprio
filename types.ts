
export type AnswerValue = 'a' | 'b' | 'c' | 'd';

export interface Option {
  text: string;
  value: AnswerValue;
}

export interface Question {
  id: number;
  questionText: string;
  options: Option[];
}

export interface Result {
    title: string;
    text: string;
}
