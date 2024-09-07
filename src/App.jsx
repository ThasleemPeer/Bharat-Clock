import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockMsg from './components/ClockMsg'
import CurrentTime from './components/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css' 
function App() {

  return (
    <center>
     <ClockHeading></ClockHeading>
     <ClockMsg></ClockMsg>
     <CurrentTime></CurrentTime>

    </center>
  )
}

export default App
