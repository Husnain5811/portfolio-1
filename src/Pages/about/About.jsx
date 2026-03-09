import React from 'react'
import Rotateball from '../../Components/Rotateball.jsx'
import Left from '../about/Left.jsx'
import Right from '../about/Right.jsx'
import Bubbles from '../../Components/Bubble.jsx'
// #15001F
const Second = () => {
  return (
    <div className='min-h-[100vh] relative bg-[#15001F] '>

      <div className='sm:flex min-h-screen justify-around sm:items-center '>
        <Left />
        <Right />
      </div>
      <div className=' absolute top-0 left-0 w-full h-full overflow-hidden '>
        <Bubbles />
      </div>
    </div>
  )
}

export default Second;