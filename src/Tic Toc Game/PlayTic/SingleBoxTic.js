import React from 'react'

const SingleBoxTic = ({value,onClick}) => {
  return (
    <>
    <div className='border-2 border-black w-[100px] flex justify-center items-center text-5xl font-semibold'
     onClick={onClick}>
      {value}
    </div>
    </>
  )
}

export default SingleBoxTic
