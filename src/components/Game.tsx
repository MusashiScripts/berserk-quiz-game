import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Footer } from './Footer'
import { GameOverModal } from './GameOverModal'
import { Header } from './Header'
import { type Question } from '@/types'
import { useEffect, useState } from 'react'
import { useQuestionsData } from '@/hooks/useQuestionsData'
import { useQuestionsStore } from '@/store/questions'

const getBackgroundColor = (info: Question, index: number) => {
  const { correctAnswer, userSelectedAnswer } = info
  // Aun no ha seleccionado ninguna pq la key no existe
  if (userSelectedAnswer == null) return
  // Las que el usuario no selecciono y no son la respuesta correcta para q mantengan su estilo
  if (index !== userSelectedAnswer && index !== correctAnswer) return
  // Selecciono la correcta
  if (index === correctAnswer) {
    return 'green'
  }
  //Selecciono la incorrecta
  if(index === userSelectedAnswer ) return 'red'
}

export function Game() {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)
  const [isOpenGameOverModal, setIsOpenGameOverModal] = useState(false)
  const { unanswered } = useQuestionsData()
  const firstQuestion = questions[currentQuestion]

  useEffect(() => {
    if(unanswered === 0) setIsOpenGameOverModal(true)
  }, [unanswered])
  
  const closeModal = () => {
    setIsOpenGameOverModal(false)
  }

  //Funcion q devuelve una funcion
  const createHandleClick = (index: number) => () => {
      selectAnswer(firstQuestion.id, index)
  }


  return (
    <>
      <Card id='game' className='h-full w-80 sm:w-[480px] md:w-[540px] lg:w-[620px]'>
        <Header />
        <CardHeader className='gap-3'>
          <CardTitle>{ firstQuestion.question }</CardTitle>
          <CardDescription>
            <div className='flex justify-center'>
              <picture className='aspect-square size-35 md:size-40 lg:size-50 flex-none'>
                <img
                  className='object-cover w-full h-full rounded-md'
                  src={firstQuestion.image}
                  alt={firstQuestion.question} />
              </picture>
            </div>
          </CardDescription>
        
        </CardHeader>
        <CardContent className='flex flex-col gap-2' >
          {
            firstQuestion.answers.map((answer, index) => (
              <Button
                disabled={firstQuestion.userSelectedAnswer != null}
                style={{ backgroundColor: getBackgroundColor(firstQuestion, index) }}
                onClick={createHandleClick(index)} key={index}
                className='cursor-pointer'>{answer}</Button>
            ))
          }
        </CardContent>
        <CardFooter>
          <Footer />
        </CardFooter>
      </Card>

      {
        isOpenGameOverModal && <GameOverModal closeModal={closeModal } />
      }
    </>
  )
}