import Start from './components/Start'
import Operation from "./components/Operation";
import Guess from './components/Guess'
import Score from './components/Score'
import { GameContext } from './context/GameContext'
import { useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './main.module.css'


function App() {

    const {start, setStart, correct,wrong} = useContext(GameContext); 

    useEffect(()=> {
      if(correct + wrong === 10){
        setStart(0)
      }
    },[correct, wrong])
    
  return (

    
      <>
      {start === 0 ? (<Start/>) : (
        <>
         <h1 id={style.title}>Four Operations Game</h1>
         <div className={style.container}>
             <div className={style.operationArea}>
               <Operation />
             </div>
             <div className={style.guessArea}>
               <Guess />
               <Score />
               <ToastContainer />
             </div>
         </div>
         </>
      )}
     
      </>   
  );
}

export default App;
