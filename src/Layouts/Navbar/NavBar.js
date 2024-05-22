import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { IoLogIn } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { RiHeartFill, RiLoginBoxFill, RiUserFill } from 'react-icons/ri';
function NavBar() {


  const hover = 'hover:text-subMain transitions text-white';
  const Hover = ({ isActive }) => (isActive ? 'text-subMain' : hover);
  return (
    <>
      <div className='bg-dry shadow-md sticky top-0 z-20'>
        <div className='container mx-auto py-5 px-10 lg:grid gap-12 grid-cols-7 justify-between items-center'>
          <div className='col-span-1 lg:block hidden'>
            <Link to={"/"}>
              <img src='/images/logo.png' alt='logo' className='w-full h-12 object-contain' />
            </Link>
          </div>

          {/**search form */}
          <div className='col-span-3 '>
            <form className=' w-full text-sm bg-dryGray rounded flex-btn gap-3'>
              <button type='submit' className='bg-subMain text-white w-12 flex-colo rounded h-12'>
                <LuSearch className='w-5 h-5' />
              </button>
              <input type='text' placeholder='Search...' className='w-full font-medium placeholder:text-border text-sm w11/12 h-12 bg-transparent border-none px-2 text-black' />
            </form>
          </div>


          {/**menu  */}

          <div className='col-span-3 font-medium text-sm hidden xl:gap-10 2xl:gap-14 justify-between lg:flex xl:justify-end items-center'>
            <NavLink to={"/movie-us"} className={Hover}>Movies</NavLink>
            <NavLink to={"/about-us"} className={Hover}>About Us</NavLink>
            <NavLink to={"/contact-us"} className={Hover}>Contact Us</NavLink>
            <NavLink to={"/favorite"} className={`${Hover} relative`}>
              <RiHeartFill className='w-7 h-7' />
              <div className='w-5 h-5  flex-colo rounded-full text-xs bg-subMain text-white absolute -top-2 -right-1'>2</div>
            </NavLink>
            
            <NavLink to={"/login"} className={Hover}>
              <RiLoginBoxFill className='w-7 h-7' />
            </NavLink>

          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
