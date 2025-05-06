import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Question } from '@/types'
import confetti from 'canvas-confetti'
import data from '../mocks/data.json'


interface State{
  isPlaying: boolean
  questions: Question[]
  currentQuestion: number
  gameOverModal: boolean
  selectAnswer: (questionId: number, answerIndex: number) => void
  goPrevQuestion: () => void 
  goNextQuestion: () => void
  resetQuizz: () => void
  startGame: () => void
}

const questionsSorted = () =>  data.sort(() => Math.random() - 0.5)

export const useQuestionsStore = create<State>()(persist((set, get) => ({
  isPlaying: false,
  questions: questionsSorted(),
  currentQuestion: 0,
  gameOverModal: false,

  selectAnswer: (questionId, answerIndex) => {
    //Recuperar el estado, ya q este es inmutable
    const { questions } = get()
    const newQuestions = structuredClone(questions)
    //Encontrar indice de la pregunta para asi obtener la info de la pregunta
    const questionIndex = newQuestions.findIndex(question => question.id === questionId)
    const questionInfo = newQuestions[questionIndex]

    //checkear si la respuesta es correcta
    const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
    
    if (isCorrectUserAnswer) confetti()
      
      

    // actualizar la nueva variable que sera el estado
    newQuestions[questionIndex] = {
      ...questionInfo,
      isCorrectUserAnswer,
      userSelectedAnswer: answerIndex
    }

    //actualizar el state
    set({
      questions: newQuestions
    })

  },

  goPrevQuestion: () => {
    const { currentQuestion } = get()
    const prevQuestion = currentQuestion - 1
    if (prevQuestion >= 0) {
      set({ currentQuestion: prevQuestion })
    }
  },

  goNextQuestion: () => {
    const { currentQuestion, questions } = get()
    const nextQuestion = currentQuestion + 1
    if (nextQuestion >= questions.length) return
    set({ currentQuestion: nextQuestion })
  },

  resetQuizz: () => {
    set({
      questions: questionsSorted(),
      currentQuestion: 0,
      isPlaying: false
    })
  },

  startGame: () => {
    set({
      isPlaying: true
    })
  },

}
), {
  name: 'berserk-quizz'
}))