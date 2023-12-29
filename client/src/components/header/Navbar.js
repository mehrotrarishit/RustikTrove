import React from 'react'
import "./navbaar.css"

const Navbar = () => {
  return (
    <header>
       <nav>
            <div className="left">
                <div className="brandname">
                    RustikTrove
                </div>
            </div>
            <div className="right">
                <div className="tagline">
                   Chic. Unique. You.
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar