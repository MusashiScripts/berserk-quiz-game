import { Badge } from './ui/badge'
import { useQuestionsData } from '@/hooks/useQuestionsData'


export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData()

  return (
    <footer className='flex justify-center items-center gap-x-2 w-full'>

        <Badge className='bg-green-600 text-white' >{correct} ✅</Badge>
        <Badge className='bg-red-600 text-white' > { incorrect } ❌</Badge>
        <Badge>{ unanswered } ❔</Badge>

    </footer>
  )
}