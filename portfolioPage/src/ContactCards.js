import React from 'react'

function ContactCards(props) {
  return (
    <div className=' max-w-xs shadow-lg p-10 rounded-xl my-10 hover:scale-105 
    sm:w-1/4 
    dark:bg-white  dark:shadow  dark:bg-gradient-to-bl from-teal-500'>
      <h3 className=' py-4 text-teal-500 text-lg font-medium pt-8 pb-2 
             dark:text-black'>
        {props.contact}

      </h3>
      <h4 className="text-md py-5 leading-8 dark: text-gray-800">
        {props.description}
      </h4>
    </div>
  )
}

export default ContactCards
