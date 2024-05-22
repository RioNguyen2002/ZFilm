import React, { useState } from 'react'
import Layout from '../Layouts/Layout'
import { useParams } from 'react-router-dom'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieRates from '../Components/Single/MovieRates'
import Titles from '../Components/Titles';
import Movie from '../Components/Home/Movie'
import { Movies } from '../Data/MoviesData'
import { FaPlaystation } from "react-icons/fa";
import ShareMovieModal from '../Components/Modals/ShareModal'
function SingleMovie() {
     const [modalOpen, setModalOpen] = useState(false);
     const { id } = useParams();
     const movie = Movies.find((movie) => movie.name === id);
     const RelatedMovies = Movies.filter(
          (m) => m.category === movie.category
     );

     return (
          <Layout>
               <ShareMovieModal modalOpen={modalOpen} setModalOpen={setModalOpen} movie={movie} />
               <MovieInfo movie={movie} setModalOpen={setModalOpen} />

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

export default SingleMovie
