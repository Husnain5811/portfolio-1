import React from 'react'
import Saquer from '../../Components/Saquer'

const Left = () => {
  return (
    <div className='sm:w-[50%] flex justify-center items-center relative'> 
    {/* <Saquer/> */}
    
    <video className='h-[500px] rounded-4xl border-2 border-white' muted autoPlay loop src="https://videos.pexels.com/video-files/5377283/5377283-sd_360_640_25fps.mp4"></video>
    <video className='h-[300px] border-2 border-white  absolute right-20 bottom-0 rounded-4xl' muted autoPlay loop src="https://videos.pexels.com/video-files/5377278/5377278-sd_360_640_25fps.mp4"></video>
    </div>
  )
}

export default Left