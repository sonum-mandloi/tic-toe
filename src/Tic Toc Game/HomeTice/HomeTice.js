import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeTice = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='w-[85rem] h-[100vh]'>
        <img 
             className='w-[85rem] h-[100vh] opacity-70'
            src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/curious/uploads/pictures/1590854519-1.jpg" 
            alt=""
         />
        <button
               className='absolute border-2 bg-white bottom-[110px] left-[40rem] p-1 px-5 font-bold text-xl hover:bg-black hover:text-white transition-all text-black'
               onClick={()=>navigate('/PlayTic')}
         >PLAY
        </button>
        {/* <img className='w-[85rem] h-[100vh] absolute' src="https://tse4.mm.bing.net/th?id=OIP.od5neF1COpwS6Nizg-DuYwHaFF&pid=Api&P=0&h=180" alt="" /> */}
        
    </div>
    </>
  )
}

export default HomeTice
