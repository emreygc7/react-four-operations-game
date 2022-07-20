import React, { useContext, useEffect } from 'react'
import { GameContext } from '../context/GameContext'
import { toast } from 'react-toastify'
import style from '../main.module.css'

const Guess = () => {

  const {
    firstNumber, firstNumberInitialState, setFirstNumber, 
    secondNumber, secondNumberInitialState, setSecondNumber,  
    operator, operatorInitialState, setOperator,  
    guess, setGuess, 
    result, setResult, 
    correct, setCorrect, 
    wrong, setWrong, 
    point, setPoint
  } = useContext(GameContext)

  const calculateResult = () => {
    
    if(guess === "") {
        toast.error("Answer cannot be empty.")
    } else if(isNaN(guess)){
      toast.error("You can only enter numbers!")
    } else {
          if(result == guess) {
            setCorrect(correct + 1 )
            setPoint(point + 15 )
        } else {
            setWrong(wrong + 1 )
            setPoint(point - 7)
        }
        setFirstNumber(firstNumberInitialState)
        setSecondNumber(secondNumberInitialState)
        setOperator(operatorInitialState)
        setGuess("")
    }
    
  }
 
  useEffect(() => {
    switch(operator){
      case "+": setResult(firstNumber + secondNumber); break;
      case "-": setResult(firstNumber - secondNumber); break; 
      case "*": setResult(firstNumber * secondNumber); break; 
      case "/": setResult(firstNumber / secondNumber); break;  
    }
  },[operatorInitialState, firstNumber, secondNumber])

 
  return (
    <>
        <input className={style.guessInput} onChange={(e) => setGuess(e.target.value)} value={guess} type="text" placeholder='Please enter your guess.' />
        <button className={style.guessBtn}onClick={calculateResult}>Check Result</button>
    </>
  )
}

export default Guess