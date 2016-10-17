export interface QuestionModel {
    stimulus: string,
    questionStem: string,
    answerChoices: AnswerChoice[]
}

export interface AnswerChoice {
    label: string,
    text: string,
    isCorrect: boolean,
    isSelected: boolean
}