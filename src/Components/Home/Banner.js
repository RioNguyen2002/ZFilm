import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaHeart } from "react-icons/fa6";
import { Movies } from '../../Data/MoviesData';
import FlexMovieItems from '../FlexMovieItems';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';


function Banner() {
  return (
    <div className='w-full xl:h-full relative'>
      <Swiper
        modules={[Autoplay]}
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}

        className='w-full xl:h-96 bg-dry lg:h-96 h-60 top-5'
      >
        {
          Movies.slice(0, 6).map((movie, index) => (
            <SwiperSlide key={index} className='relative rounded overflow-hidden'>
              <img
                src={`/images/movies/${movie.image}`}
                alt={movie.title}
                className='w-full h-full object-center' />
              <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                  {movie.name}
                </h1>

                <div className='flex gap-5 items-center text-dryGray'>
                  <FlexMovieItems movie={movie} />
                </div>
                <div className='flex gap-5 items-center'>
                  <Link to={`/movie/${movie.name}`} className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs">
                    Play
                  </Link>
                  <button className='bg-white hover:text-subMain transitions text-white px-8 py-3 rounded text-sm bg-opacity-30' >
                    <FaHeart className='w-5 h-5' />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Banner
