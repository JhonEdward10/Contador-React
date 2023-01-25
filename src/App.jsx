import LogoAcademlo from "./imagenes/logoacademlo.png"
import './App.css'
import Button from './components/Boton'
import Counter from './components/Contador'
import { useState } from 'react'

function App() {

  const [numberClicks, setNumberClicks] = useState(0)
  
  const handleClick = () => {
    setNumberClicks(numberClicks + 1);
  }

  const resetCounter = () => {
    setNumberClicks(0);
  }

  return (
    <div className="App">
      <div className='academlo-contenedor'>
        <img 
        className='academlo-logo' 
        src={LogoAcademlo} 
        alt ="logo-de-academlo" />
      </div>
      <div className='contenedor-del-contador'>
        <Counter 
        numberClicks={numberClicks}
        />
        <Button
        text="Click"
        isButtonClick={true}
        handleClick={handleClick} 
        />
        <Button 
        text="Reset"
        sButtonClick={false}
        handleClick={resetCounter} />
      </div>
    </div>
  )
}

export default App
