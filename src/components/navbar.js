import React from 'react'
import icon from '../images/icon.svg'
function NavBar() {
    return(
        <div>
            <nav>
                <div className="logo">
                    <img src={icon} alt="icon"></img>
                </div>
                <ul className="nav-links">
                    <li><a>About Us</a></li>
                    <li><a>Devpost</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar