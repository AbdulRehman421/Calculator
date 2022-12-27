import React from 'react'
import ContactCards from "./ContactCards"

function Contact() {
    return (
        <div className=' text-center'>
            <h2 className="text-3xl py-1">
                Contacts
            </h2>
            <div className='flex flex-wrap justify-center gap-10'>
                <ContactCards contact="8369017007" description="Phone Number" />
                <ContactCards contact="rkofficia0910@gmail.com" description=" Email" />
                <ContactCards contact="Mumbai" description="Location" />


            </div>
        </div>
    )
}

export default Contact
