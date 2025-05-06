export type idType = number

export interface Question{
  id: idType
  question: string
  image: string
  answers: string[]
  correctAnswer: number
  userSelectedAnswer?: number
  isCorrectUserAnswer?: boolean
}