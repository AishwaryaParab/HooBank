import {React, useState} from 'react';
import {close, logo, menu} from '../assets';
import './Navbar.css';
import { navLinks } from '../constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-nav">
        <img src={logo} className="logo"></img>

        <div className="navLinks">
            <ul>
                {navLinks.map((item, index) => {
                    return <li><a href={item.id}>{item.title}</a></li>
                })}
            </ul>
        </div>

        {/* Making the Navbar mobile responsive */}
        <div className="hamburger-icon">
            <img src={toggle ? close : menu} onClick={() => {
                setToggle((prev) => !prev); 
                console.log("Clicked" + toggle);
            }}>
            </img>
            {/* <ul className="mobile-menu" style={toggle ? {display: 'block'} : {display: 'none'}}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Solution</a></li>
            </ul> */}

            {toggle ? <ul className="mobile-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Solution</a></li>
            </ul> : null}
        </div>

    </nav>
  )
}

export default Navbar