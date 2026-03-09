import React from 'react'
import Left from '../left/Left'
import Right from '../right/Right'
import Bubbles from '../../Components/Bubble'

const Both = () => {
  return (
    <>
    <div className=' mt-16 w-[100%] sm:flex justify-center mx-auto'>
        <Left/>
        <Right/>
        {/* <Bubbles className={" absolute "}/> */}
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#15001F" fill-opacity="1" d="M0,32L57.6,256L115.2,128L172.8,288L230.4,128L288,256L345.6,0L403.2,128L460.8,96L518.4,224L576,32L633.6,64L691.2,96L748.8,64L806.4,128L864,96L921.6,96L979.2,288L1036.8,160L1094.4,128L1152,192L1209.6,224L1267.2,64L1324.8,288L1382.4,64L1440,96L1440,320L1382.4,320L1324.8,320L1267.2,320L1209.6,320L1152,320L1094.4,320L1036.8,320L979.2,320L921.6,320L864,320L806.4,320L748.8,320L691.2,320L633.6,320L576,320L518.4,320L460.8,320L403.2,320L345.6,320L288,320L230.4,320L172.8,320L115.2,320L57.6,320L0,320Z"></path></svg>
    </>
  ) 
}

export default Both