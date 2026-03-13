import { div } from 'motion/react-m'
import React from 'react'
import { Link } from 'react-router-dom'
import Hovercard from '../../Components/Hovercard'

const Projects = () => {
    return (
        <>

            <div className='w-full  pb-25 bg-[#15001F] p-10'>
                <h1 className="text-2xl w-[150px] p-2 mx-auto rounded-bl-4xl rounded-tr-4xl  text-white block text-center share-tech bg-gradient-to-r from-[#15001F] shadow-[#2e0043] shadow-xl via-[#2e0043] to-[black] ...">My Projects</h1>
                <div className="w-full h-full relative">
                    <Hovercard />

                </div>
            </div>

        </>

    )
}

export default Projects