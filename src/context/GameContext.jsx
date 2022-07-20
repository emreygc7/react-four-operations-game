import { createContext, useState } from "react";

export const GameContext = createContext(); 

const GameContextProvider = ({children}) => {

   let operatorInitialState, firstNumberInitialState, secondNumberInitialState; 

     operatorInitialState = Math.floor(Math.random()*4 + 1 ) 

    switch(operatorInitialState){
        case 1: operatorInitialState =  "+"; 
        break; 
        case 2: operatorInitialState = "-"; 
        break; 
        case 3: operatorInitialState = "*"; 
        break; 
        case 4: operatorInitialState =  "/"; 
    }
   
    
     firstNumberInitialState =  Math.floor(Math.random() * 100 + 1) 
     secondNumberInitialState =  Math.floor(Math.random() * 50 + 1)
    
    
    //necessary controls
    
    //the result should not be negative when doing subtraction
    if(operatorInitialState == "-" && firstNumberInitialState < secondNumberInitialState){
        secondNumberInitialState = Math.floor(Math.random() * firstNumberInitialState + 1)
    }

    //the result of division must be an integer
    if(operatorInitialState == "/"){
        while(true){
            secondNumberInitialState = Math.floor(Math.random() * firstNumberInitialState + 1)
            if(firstNumberInitialState % secondNumberInitialState == 0){
                break; 
            }
        }
    }

  
    const [start, setStart] = useState(0)
    const [firstNumber, setFirstNumber] = useState(firstNumberInitialState)
    const [secondNumber, setSecondNumber] = useState(secondNumberInitialState) 
    const [operator, setOperator] = useState(operatorInitialState) 
    const [guess, setGuess] = useState("") 
    const [result, setResult] = useState(null)
    const [correct, setCorrect ] =  useState(0)
    const [wrong, setWrong] = useState(0) 
    const [point, setPoint] = useState(0) 

    const data = {
        start,
        setStart,
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        operator,
        setOperator,
        guess,
        setGuess,
        result,
        setResult,
        correct,
        setCorrect,
        wrong,
        setWrong,
        point,
        setPoint,
        operatorInitialState,
        firstNumberInitialState,
        secondNumberInitialState
    }

    
    return(
        <GameContext.Provider value={data}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider 