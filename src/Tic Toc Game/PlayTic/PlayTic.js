import React, { useState } from 'react'
import SingleBoxTic from './SingleBoxTic'

const PlayTic = () => {
    const[state,setState]=useState(Array(9).fill(null))
    const[isXturn,setIsXturn]=useState(true)
    
    const checkWinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of winnerLogic){
            const [a,b,c]=logic;
            if(state[a] === state[b] && state[a] === state[c] && state[a] !== null){
                return state[a]
            }
        }
        return false;
    }
   const isWinner = checkWinner();
   console.log("isWinner" ,isWinner);

    const handlerClick=(index)=>{
        if(state[index] !== null){
            return ;
        }
        const copyState = [...state]
        copyState[index] = isXturn ? "x" : "o"
        setState(copyState)
        setIsXturn(!isXturn)

    }
    console.log("state",state);

    function handlerReset(){
        setState(Array(9).fill(null))
    }
  return (
    <>
    <div className='w-[85rem] h-[100vh] flex justify-center items-center'>
        <div className='w-[300px] h-[300px] border-black flex flex-col'>
            {
                isWinner ? (<><h1 className='text-4xl'>{isWinner} won the game</h1>
                <button onClick={handlerReset} className='border-2 border-black w-[100px] bg-black text-white'>Play Again</button>
                </>):
                (<>
                <h3>Player {isXturn ? "x" : "o"} please move</h3>
            <div className='w-[300px] h-[100px] flex flex-row border-black'>
                 <SingleBoxTic onClick={()=>handlerClick(0)} value={state[0]}/>      
                 <SingleBoxTic onClick={()=>handlerClick(1)} value={state[1]}/> 
                 <SingleBoxTic onClick={()=>handlerClick(2)} value={state[2]}/>                            
            </div>
            <div className='w-[300px] h-[100px] flex flex-row border-black'>
                 <SingleBoxTic onClick={()=>handlerClick(3)} value={state[3]}/>      
                 <SingleBoxTic onClick={()=>handlerClick(4)} value={state[4]}/>
                 <SingleBoxTic onClick={()=>handlerClick(5)} value={state[5]}/>
            </div>
            <div className='w-[300px] h-[100px] flex flex-row border-black'>
                 <SingleBoxTic onClick={()=>handlerClick(6)} value={state[6]}/>       
                 <SingleBoxTic onClick={()=>handlerClick(7)} value={state[7]}/> 
                 <SingleBoxTic onClick={()=>handlerClick(8)} value={state[8]}/>
            </div>
                </>)
            }
            
        </div>
    </div>
    </>
  )
}

export default PlayTic
