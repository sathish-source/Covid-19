// import { Link } from "react-router-dom"
import logo from '../assets/primary-logo.svg'
// import './Nav.css'
import facebook from '../assets/facebook.svg'
import behance from '../assets/behance.svg'
import youtube from '../assets/youtube.svg'
import linkedin from '../assets/linkedin.svg'
import { IoCall } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { useState } from 'react'
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false);
    return (
        <div>
            <nav>
                <div className="flex justify-between px-5 bg-gray-600 text-white">
                    <ul className="flex flex-col  poppins md:flex-row py-5">
                        <li className="flex pe-10"> <IoCall className="h-5 me-3 self-center " /> + 99 00 (0) 0000 888</li>
                        <li className="flex "> <IoMdMailOpen className="h-5 me-3 self-center" /> info@yourdomain.com</li>
                    </ul>
                    <div className=" absolute top-3 end-0 z-10">
                        <a className="flex items-center text-lg font-extrabold justify-center nav-call "><IoCall className="h-5 me-3 self-center  text-white" />Call us</a>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="py-5"><img className="w-[15rem] " src={logo} /></div>
                    <div className="hidden md:flex">
                        <div className=" flex gap-5 gap-x-10  md:flex-col lg:flex-row  items-center">
                        <Link className='link' to='/'>HOME</Link>
                        <Link className='link' to='/About'>ABOUT</Link>
                        <Link className='link' to='/Contact'>CONTACT</Link>
                        <Link className='link' to='/FAQ'>FAQ</Link>
                        <Link className='link' to='/GeneralInformation'>GENARAL INFORMATION</Link>
                        <Link className='link' to='/News'>NEWS</Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                    <div className=" hidden md:block">
                        <div className=" flex items-center">
                            <img className="p-2 h-8" src={facebook} alt="facebook" />
                            <img className="p-2 h-8" src={behance} alt="behance" />
                            <img className="p-2 h-8" src={youtube} alt="youtube" />
                            <img className="p-2 h-8" src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                    </div>
                    { toggleMenu && <div className="block md:hidden mobile-nav text-white">
                        <div onClick={()=> setToggleMenu(!toggleMenu)} className=" flex flex-col text-center text-white">
                        <Link className="hover:bg-white hover:text-black" to='/About'>ABOUT</Link>
                        <Link className="hover:bg-white hover:text-black" to='/'>HOME</Link>
                        <Link className="hover:bg-white hover:text-black" to='/Contact'>CONTACT</Link>
                        <Link className="hover:bg-white hover:text-black" to='/FAQ'>FAQ</Link>
                        <Link className="hover:bg-white hover:text-black" to='/GeneralInformation'>GENARAL INFORMATION</Link>
                        <Link className="hover:bg-white hover:text-black" to='/News'>NEWS</Link>
                        </div>
                    </div>}
                <button onClick={()=> setToggleMenu(!toggleMenu)} className="block md:hidden">< HiMiniBars3 className='h-10 w-10 text-gray-600' /></button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar