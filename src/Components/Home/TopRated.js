import React, { useState } from 'react'
import Titles from '../Titles';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MoviesData';
import { Link } from 'react-router-dom';
import { FaCaretLeft, FaCaretRight, FaHeart } from 'react-icons/fa6';
import Star from '../Star';
import {Navigation, Autoplay} from 'swiper/modules';



function TopRated() {

     const [nextEl, setNextEl] = useState(null);
     const [prevEl, setPrevEl] = useState(null);


     const className = 'hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white';
     return (
          <div className='my-16'>
               <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
               <div className='mt-10'>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{ nextEl, prevEl }}
                        slidesPerView={4}
                        spaceBetween={40}
                        autoplay={true}
                        speed={1000}
                        loop={true}
                        breakpoints={{
                         0: {
                              slidesPerView:1,
                              spaceBetween:10,

                         },
                         768: {
                              slidesPerView:2,
                              spaceBetween:20,
                         },
                         1024: {
                              slidesPerView:3,
                              spaceBetween:30,
                         },
                         1280: {
                              slidesPerView:4,
                              spaceBetween:40,
                         }
                        }}
                    >

                         {
                              Movies.map((movies, index) => (
                                   <SwiperSlide key={index}>
                                        <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                                             <img
                                                  src={`/images/movies/${movies.image}`}
                                                  alt={movies.image}
                                                  className='w-full h-full object-cover rounded-lg'
                                             />
                                             <div className='px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                                                  <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white'>
                                                       <FaHeart />
                                                  </button>
                                                  <Link
                                                       className='font-semibold text-xl trancuted line-clamp-2'
                                                       to={`/movie/${movies.name}`}

                                                  >

                                                       {movies.name}
                                                  </Link>
                                                  <div className='flex gap-2 text-star'>
                                                       <Star value={movies.rate} />
                                                  </div>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                              ))
                         }
                    </Swiper>
                    <div className='w-full px-1 flex-rows gap-6 pt-12'>
                         <button className={className} ref={(node) => setPrevEl(node)}>
                              <FaCaretLeft />
                         </button>
                         <button className={className} ref={(node) => setNextEl(node)}>
                              <FaCaretRight />
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default TopRated
