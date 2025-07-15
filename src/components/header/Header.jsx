import React from 'react'
import logo from "../../assets/logo.svg"
import profile from "../../assets/profile.svg"
import cart from "../../assets/cart.svg"
import chevrondown from "../../assets/chevrondown.svg"
const Header = () => {
  return (
    <header className="header w-full h-[75px] bg-white flex items-center">
        <nav className="container flex justify-between items-center">
            <div className="">
                <img src={logo} alt="" />
            </div>
            <ul className="flex gap-7">
                <li className='flex items-center gap-1'>
                    <span>Discovery</span>
                    <img src={chevrondown} alt="" />
                </li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            <div className="flex items-center gap-5">
                <img src={profile} alt="" />
                <img src={cart} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Header