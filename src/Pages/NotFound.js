import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";
function NotFound() {
  return (
    <div className='flex-colo gap-6 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6 '>
      <img
        className='w-full h-96 object-contain'
        src='/images/404.gif' />
      <Link to={"/"} className='bg-subMain transitions gap-4 text-white flex-rows font-medium py-3 hover:text-main px-6 rounded-md'>
        Back Home {" "} <RiArrowGoBackLine />
      </Link>
    </div>
  )
}

export default NotFound
