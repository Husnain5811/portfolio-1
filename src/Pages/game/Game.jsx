import React from 'react'
import Cardgame from '../../Components/Cardgame'
const Game = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center p-20 bg-yellow-400'>
        <Cardgame className='w-full h-full max-w-6xl' />
      </div>


    </>
  )
}

export default Game