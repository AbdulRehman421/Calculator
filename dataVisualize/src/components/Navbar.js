import React from 'react'

function Navbar() {
    return (
        <header className=' mb-10'>
            <nav className=' flex justify-between'>
                <div className="logo_ham p-5">
                    Logo
                    <i className="fa-solid fa-bars p-5"></i>
                </div>

                <div className=' p-5'>
                    <i className="fa-solid fa-user p-5"></i>

                    <span className=' p-5'>
                        Universal Tagging Sample
                    </span>

                    <span className=' my-7 '>
                        <i className="fa-solid fa-power-off"></i>
                    </span>

                </div>
            </nav>
            <div className=' ml-5'> Universal tagging / Tagging and Data Entry Pending Count </div>
        </header>
    )
}

export default Navbar