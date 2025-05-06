import { RotateCcwIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useQuestionsStore } from '@/store/questions'

export const ResetButton = () => {
  const resetQuizz = useQuestionsStore(state => state.resetQuizz)
  return (
    <Button onClick={resetQuizz} variant='outline' className='cursor-pointer'>
      <RotateCcwIcon />
      Reiniciar
    </Button>
  )
}