import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import style from '../main.module.css'


const Score = () => {

    const {correct, wrong} = useContext(GameContext)
    
  return (
    <div className={style.scoreArea}>
        <p>True: <strong>{correct}</strong>  </p>
        <p>False: <strong>{wrong}</strong></p>
    </div>
  )
}

export default Score


