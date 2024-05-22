import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa6";
import Star from '../Star';


function Movie({ movie }) {




     //const classNames = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";

     return (
          <>

               <div className='border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden'>
                    <Link to={`/movie/${movie?.name}`} className='w-full'>
                         <img
                              src={`/images/movies/${movie?.image}`}
                              alt={movie?.image}
                              className='w-full h-96 object-fill'
                         />
                    </Link>

                    <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-50 text-white px-4 py-3'>

                         <h3 className='font-semibold truncate'>{movie.name}</h3>
                         <div className='flex gap-2 text-star'>
                              <Star value={movie.rate} />
                         </div>
                         <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
                              <FaHeart />
                         </button>
                    </div>

               </div>


          </>

     );
}

export default Movie;
