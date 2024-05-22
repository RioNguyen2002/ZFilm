import React from 'react'
import FlexMovieItems from './../FlexMovieItems';
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaGooglePlay } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { BsHeartFill } from 'react-icons/bs';


function MovieInfo({ movie, setModalOpen }) {
  return (
    <div className='w-full xl:h-full relative text-white'>
      <img
        src={`/images/SlideImage/${movie?.titleImage}`}
        alt={movie.name}
        className='w-full h-full hidden xl:inline-block object-fill' />

      <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img src={`/images/movies/${movie?.image}`} alt={movie?.name} className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-5 flex flex-col gap-10">
              {/***Title*/}
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie?.name}
              </h1>
              {/***flex items***/}
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <div className="flex-colo bg-subMain text-xs px-2 py-1">
                  HD 4K
                </div>
                <FlexMovieItems movie={movie && movie} />
              </div>

              {/***Description***/}
              <p className="text-text text-lg text-justify leading-7 ">{movie?.desc}</p>
              <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                {/**Share*/}
                <div className="col-span-1 flex-colo border-r border-border">
                  <button onClick={() => setModalOpen(true)} className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                    <FaShare />
                  </button>
                </div>
                {/**watch button**/}
                <div className="sm:col-span-1 col-span-1 flex justify-end font-medium text-sm">
                  <Link to={"#"} className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3">
                    <BsHeartFill className="w-5 h-5 fill-red-500" /> 
                  </Link>
                </div>
                <div className="sm:col-span-2 col-span-1 flex justify-end font-medium text-sm">
                  <Link to={`/watch/${movie?.name}`} className="bg-red-700 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3">
                    <FaGooglePlay className="w-5 h-5" /> Watch
                  </Link>
                </div>
                <div className="sm:col-span-1 col-span-1 flex justify-end font-medium text-sm">
                  <Link to={"#"} className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3">
                    <IoMdDownload className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>

    </div>
  )
}

export default MovieInfo
