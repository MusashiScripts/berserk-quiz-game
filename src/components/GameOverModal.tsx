import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useQuestionsData } from '@/hooks/useQuestionsData'
import { useQuestionsStore } from '@/store/questions'
import {RotateCcwIcon, CircleXIcon } from 'lucide-react'
import { Badge } from './ui/badge'

interface Props{
  closeModal: () => void
}

export const GameOverModal: React.FC<Props> = ({ closeModal }) => {
  const questions = useQuestionsStore(state => state.questions)
  const resetQuizz = useQuestionsStore(state => state.resetQuizz)
  const { correct } = useQuestionsData()

  let msg
  let gifPath

  if (correct === questions.length) {
    msg = 'Felicidades, obtuvistes una puntuacion perfecta!! 😃🎉'
    gifPath = './gifs/puck-happy.gif'
  }
  else if (correct < 10 && correct >= 6) {
    msg = 'Puntuacion por encima de la media, felicitaciones!!😃🎉'
    gifPath = './gifs/puck-speed.gif'
  }
  else {
    msg = 'Vamos, se que puedes hacerlo mejor, intentalo de nuevo🧐'
    gifPath = './gifs/puck-out.gif'
  }

  return (
    <section onClick={closeModal} className='fixed inset-0 z-10 backdrop-blur flex justify-center items-center'>
      <Card className='relative' onClick={(event) => event.stopPropagation()}>
        <CircleXIcon onClick={closeModal} className='absolute top-1.5 right-1.5 size-6 cursor-pointer' />
        <Badge variant='default' className='absolute top-1.5 left-1.5 rounded-full'> {correct} / { questions.length}</Badge>
        <CardHeader className='mt-2'>
          <CardTitle>Game Over</CardTitle>
          <CardDescription className='font-semibold text-pretty text-black/85 dark:text-white/85'>{msg}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex justify-center'>
            <picture className='aspect-square size-35 md:size-40 lg:size-50 flex-none'>
              <img className='object-cover w-full h-full rounded-md' src={gifPath} alt='game-over-gif' />
            </picture>
          </div>
        </CardContent>
        <CardFooter className='flex flex-row justify-center items-center'>
          <footer>
            <Button
              className='cursor-pointer flex items-center gap-x-1' onClick={resetQuizz}>
              <RotateCcwIcon/>
              Reiniciar
            </Button>
          </footer>
        </CardFooter>
      </Card>
    </section>
  )

}