import React from 'react'
import { Link } from 'react-router-dom'
import Rotateball from '../../Components/Rotateball'
import Saquer from '../../Components/Saquer'
import Loder from '../../Components/Loder'
import Slider from '../../Components/Slider'
import Bubble from '../../Components/Bubble'
const Footer = () => {
  return (
    <>
      <div className='bg-[#15001F]'>
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex justify-between p-5 md:text-left text-center -mb-10 -mx-4">
            <div className='w-100'>
              <div className='text-white flex  font-bold text-5xl leading-relaxed'>
                <div className=' align-center '>
                  <span className='text-green-800 text-8xl'>M</span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <span className=' text-8xl'>E</span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <span className='text-sky-300 text-8xl'>R</span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <span className='text-green-400 text-8xl'>N</span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    className="w-12 h-12"
                  />
                </div>
              </div>

            </div>

            <div className=' w-100 '>
              <Rotateball />
              <div className='w-35 h-full flex justify-center items-center '>
                <img src="/hand.png" alt="" />
              </div>
            </div>

            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/category/first'} className="text-gray-600 hover:text-gray-800">Home</Link>
                </li>
                <li>
                  <Link to={'/category/first'} className="text-gray-600 hover:text-gray-800">About</Link>
                </li>
                <li>
                  <Link to={'/category/first'} className="text-gray-600 hover:text-gray-800">Projects</Link>
                </li>
                <li>
                  <Link to={'/category/first'} className="text-gray-600 hover:text-gray-800">Contact</Link>
                </li>
              </nav>
            </div>


          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-6 mx-auto flex flex-wrap items-center">

            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              {/* <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label for="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
              <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center"> if you want to contact me, you can find me on social media or send me an email.
                <br className="lg:block hidden" />Naino Code is always open to new opportunities and collaborations.
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a href='https://x.com/Nainocode' className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinejoin="round" strokelinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href='https://www.linkedin.com/in/husnain-raza-138320305/' className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokelinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/account"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.25 1.85 1.25 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.68.24 2.93.12 3.24.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 NainoCode —
              <a href="https://twitter.com/Nainocode" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Nainocode</a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Created with 💕</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer