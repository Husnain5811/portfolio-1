import React from 'react'
import Button from '../../Components/Button'


const Right = () => {
  return (
    <div className='sm:w-[50%]  p-20'>
      <div>
        <h1 className=' text-white text-3xl share-tech'>ABOUT ME</h1>

        <p className='text-white mt-3 share-tech'>
          I am a MERN Stack Developer with experience in building modern and scalable web applications. I work with MongoDB, Express.js, React, and Node.js to develop full-stack solutions. I focus on creating responsive user interfaces and efficient backend APIs. I am passionate about learning new technologies and improving my development skills.
        </p>
      </div>
      <div className='w-30 mt-10'>
        <img src="/hand.png" alt="" />
      </div>
    </div>
  )
}

export default Right