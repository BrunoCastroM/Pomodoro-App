import './index.css'
import { PomodoroTimer } from './components/pomodoro-time'


function App() {

  return (
    <>
      <PomodoroTimer defaultPomodoroTime={1500}/>
    </>
  )
}

export default App
