import { ArrowBigLeftIcon, ArrowBigRightIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useQuestionsStore } from '@/store/questions'

export const Header = () => {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const goPrevQuestion = useQuestionsStore(state => state.goPrevQuestion)
  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  
  return (
    <header className='flex flex-row justify-center items-center gap-5'>
        <Button onClick={goPrevQuestion} disabled={currentQuestion === 0}  className='cursor-pointer' variant='ghost'>
          <ArrowBigLeftIcon/>
        </Button>
        <span className='text-sm sm:text-base md:text-lg lg:text-xl'> {currentQuestion + 1} / {questions.length}</span>
        <Button onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}
          className='cursor-pointer' variant='ghost'>
          <ArrowBigRightIcon />
        </Button>
      </header>
  )
}