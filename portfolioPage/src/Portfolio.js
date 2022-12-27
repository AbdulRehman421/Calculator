import React from 'react'
import Project from './Project'
import Contact from './Contact'
import { useState } from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import image from './assets/image.png';
function Portfolio() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="bg-white px-10  dark:bg-gray-900 dark:text-white">


                <section className='min-h-screen'>
                    <nav className=" py-10 mb-12 flex justify-between">
                        <h1 className="text-xl font-serif  dark:text-teal-500 ">
                            Abdul Rehman
                        </h1>
                        <ul className="flex items-center" >
                            <li><BsFillMoonStarsFill className=" cursor-pointer" onClick={() => setDarkMode(!darkMode)} /></li>
                            <li><a href="main" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
                        </ul>
                    </nav>
                    <div className="text-center p-10 ">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-white">
                            Abdul Rehman
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-teal-500 ">
                            Front end Developer
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, nemo.
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
                        <AiFillTwitterCircle />
                        <AiFillLinkedin />
                    </div>
                    <div className="bg-gradient-to-b from-teal-500 rounded-full text-center w-80 h-80 mt-20 mx-auto overflow-hidden">
                        <img className=' mt-20' src={image} alt="Abdul"
                        //  layout="fill" objectFit="cover"
                        />
                    </div>
                </section>
                <Project />
                <Contact />

            </main>
        </div>
    )
}

export default Portfolio
