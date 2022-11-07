import React, {useState} from 'react';
import logo from '../assets/mblogo.png';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Navbar = () => {
    const {nav, setNav}=useState(false)
    const handelClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-400 bg-[#4d74af] text-gray-300'>
        <div>   
            <img src={logo} alt="mblogo" style={{width:'50px'}} />
        </div>

        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link></li>
            </ul>
        

        {/* menuIcon */}
        <div onClick={handelClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobileIcons */}
        <ul className={!nav ? 'hidden': "absolute top-0 left-0 w-full h-screen bg-[#4d74af] flex flex-col justify-center items-center"}>
            <li className='py-6 text 4xl'>Home</li>
            <li className='py-6 text 4xl'>About</li>
            <li className='py-6 text 4xl'>Experience</li>
            <li className='py-6 text 4xl'>Skills</li>
        </ul>

        {/* Social Menu */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://www.linkedin.com/in/michael-botha-9b38011a4/" target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/Spoegie" target="_blank">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com" target="_blank" >
                        Mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://spoegie.github.io/" target="_blank">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar