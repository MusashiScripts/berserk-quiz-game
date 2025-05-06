import './App.css'
import { Button } from './components/ui/button'
import { Game } from './components/Game'
import { ModeToggle } from './components/ModeToggle'
import { ResetButton } from './components/ResetButton'
import { ThemeProvider } from './components/ThemeProvider'
import { Title } from './components/Title'
import { useQuestionsStore } from './store/questions'

function App() {
  const isPlaying = useQuestionsStore(state => state.isPlaying)
  const startGame = useQuestionsStore(state => state.startGame)


  return (
    <ThemeProvider>
      <main className='min-h-screen flex flex-col justify-center items-center gap-3 pb-10'>
        <Title />
      {
          isPlaying
            ? <Game />
            : <Button className='cursor-pointer' variant='outline'
              onClick={startGame}>Start Game</Button>
      }
        {
          isPlaying && <ResetButton />
        } 
      </main>
      <div className='fixed top-5 right-5 cursor-pointer z-50'>
        <ModeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
