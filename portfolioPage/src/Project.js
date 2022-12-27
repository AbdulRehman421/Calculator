

import React from 'react';
import form_builder from './assets/form_builder.png';
import netflix from './assets/netflix.png';
import Tesla_Motors from './assets/tesla_logo.jpg';
import landing from './assets/landing-page.png';
import calculator from './assets/calculator.png';
import cv from './assets/cv.png';


function Cards(props) {
    return (
        <div className="card text-center shadow-lg p-10 rounded-xl my-10 max-w-xs hover:scale-105
         dark:bg-white  dark:shadow  dark:bg-gradient-to-tr from-teal-500" >
            <img src={props.src} alt="" width={80} height={80} className='m-auto' />
            <h3 className=' py-4 text-teal-500 text-lg font-medium pt-8 pb-2 
             dark:text-black'>{props.title}</h3>
            <p className=' text-xs text-gray-800 py-1'>
                {props.detail}
            </p>
        </div>
    )
}

function Project() {

    return (

        <section>
            <div className=' text-center'>
                <h3 className=' text-3xl py-1'>
                    Projects
                </h3>
                <p className=' text-md py-2 leading-8 text-grey-80'>
                    Presenting you all my <span className=' text-teal-500'> Frontend </span>Projects <span className=' text-cyan-500'>Click </span>to View it
                </p>
            </div>

            <section className="cards flex flex-wrap justify-center gap-10">


                <Cards
                    title='Netflix Clone React'
                    src={netflix}
                    detail='Using React Js Components,Props, useState, useEffect built the Frontend Clone of Netflix.'
                />
                <Cards
                    src={form_builder}
                    title="Form Builder"
                    detail="A form builder which allows you to Upload Logo, Banner, Input fields. User can save form and also access the form response."

                />
                <Cards
                    src={Tesla_Motors}
                    title="Tesla Product Page"
                    detail='Using Basic HTML, CSS, JavaScript Built the product page of Tesla, revealing the feature of its car called Roadster.'

                />

                <Cards
                    src={landing}
                    title="Landing Page"
                    detail='Built Sign up, Sign in, Forget Password and Save Profile Pages. Added Validation to all the pages Using JavaScript.'

                />
                <Cards
                    src={cv}
                    title="Personal Website"
                    detail="Built my own website showcasing my frontend skills, my Educational, skills,and personal information."
                />
                <Cards
                    src={calculator}
                    title="Calculator"
                    detail='Started my Frontend Journey with Building the Calculator which allows user to do Math calculations.

                '
                />
            </section>
        </section>

    )
}

export default Project
