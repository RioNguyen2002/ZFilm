import React from 'react'
import { FaCalendar } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa6";

function FlexMovieItems({movie}) {
  return (
    <>
          <div className='flex items-center gap-2'>
               <span className='text-sm font-medium'>{movie.category}</span>
          </div>
          <div className='flex items-center gap-2'>
               <FaCalendar   className="text-subMain w-5 h-5"/>
               <span className='text-sm font-medium'>{movie.year}</span>
          </div>
          <div className='flex items-center gap-2'>
               <IoTimeSharp   className="text-subMain w-5 h-5"/>
               <span className='text-sm font-medium'>{movie.time}</span>
          </div>
          <div className='flex items-center gap-2'>
          <FaLanguage  className="text-subMain w-5 h-5"/>
          <span className='text-sm font-medium'>Language: {' '} {movie.language}</span>
     </div>
    </>
  )
}

export default FlexMovieItems
