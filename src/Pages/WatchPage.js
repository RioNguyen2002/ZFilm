import React, { useState } from 'react'
import Layout from '../Layouts/Layout'
import { Link, useParams } from 'react-router-dom'
import { Movies } from '../Data/MoviesData';
import { IoIosArrowBack } from "react-icons/io";
import { FaDownload, FaHeart } from 'react-icons/fa';
import { FaPlay, FaPlaystation } from 'react-icons/fa6';
import MovieRates from '../Components/Single/MovieRates';
import Titles from '../Components/Titles';
import Movie from '../Components/Home/Movie';


function WatchPage() {

     let { id } = useParams();
     const movie = Movies.find((movie) => movie.name === id);
     const [play, setPlay] = useState(false);
     const RelatedMovies = Movies.filter(
          (m) => m.category === movie.category
     );

     return (
          <Layout>

               <div className='container mx-auto bg-dry p-6 mb-12'>
                    <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
                         <Link to={`/movie/${movie?.name}`} className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
                              <IoIosArrowBack />{movie.name}
                         </Link>

                         <div className="flex-btn sm:w-auto w-full gap-5">
                              <button className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
                                   <FaHeart />
                              </button>
                              <button className="bg-subMain flex-rows gap-2  hover:text-subMain transitions text-white rounded px-8 font-medium py-3 text-sm">
                                   <FaDownload /> Download
                              </button>

                         </div>
                    </div>

                    {/**watch video**/}
                    {

                         play ? (

                              <video controls autoPlay={play} className="w-full h-full rounded">
                                   <source src={movie.video} type="video/mp4" />
                              </video>
                         ) : (

                              <div className="w-full h-screen rounded-lg overflow-hidden relative"   >
                                   <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30 flex-colo ">
                                        <button onClick={() => setPlay(true)} className="bg-subMain hover:text-main transitions text-white border border-subMain flex-colo rounded-full w-20 h-20 font-medium  text-xl">
                                             <FaPlay />
                                        </button>
                                   </div>
                                   <img src={movie?.image
                                        ? `/images/movies/${movie.image} `
                                        : "images/user.png"
                                   }
                                        alt={movie?.name}
                                        className="w-full h-full object-fill rounded-lg"
                                   />
                              </div>
                         )
                    }
               </div>
               <div className='container mx-auto  min-h min-h-screen px-2 my-6 '>
                    <MovieRates movie={movie} />

                    <div className='my-16'>
                         <Titles title={"Related Movies"} Icon={FaPlaystation} />
                         <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                              {RelatedMovies.map((movie, index) => (
                                   <Movie key={index} movie={movie} />
                              ))}
                         </div>
                    </div>
               </div>


          </Layout>
     )
}

export default WatchPage
