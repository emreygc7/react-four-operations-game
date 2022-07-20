import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'


const Operation = () => {
    const {firstNumber, secondNumber, operator} = useContext(GameContext)


    return (
    <>
        <p><strong>{firstNumber}</strong></p>
        <p><strong>{operator}</strong></p>
        <p><strong>{secondNumber}</strong></p>
    </>
  )
}

export default Operation