import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { VscDebugStart, VscDebugRestart } from 'react-icons/vsc'
import style from '../main.module.css'

const Start = () => {
    const {setStart, correct, setCorrect, wrong, setWrong, point,setPoint} = useContext(GameContext)
  
   const playAgain = () => { 
    setStart(1)
    setCorrect(0)
    setWrong(0)
    setPoint(0)
   }

  return (
    <>
        {correct + wrong === 10 ? ( 
        <div className={style.endScreenContainer}>
            <h1>GAME OVER</h1>
            <p>Your score: <strong>{point}</strong> </p>
            <button className={style.restartBtn} onClick={playAgain}><VscDebugRestart size={45}/></button>
        </div>
        ) : (
        <div className={style.startScreenContainer}>
            <h2>➕➖ Welcome to Four Operations Game! ✖️➗</h2>
            <p>Lets try your skills, you will be subjected to a random test consisting of <strong>10 questions.</strong> <br /> Good Luck!</p>
            <button className={style.startBtn}  onClick={() => setStart(1) }><VscDebugStart size={55}/></button>
        </div>
        )}
    </>

  )
}

export default Start