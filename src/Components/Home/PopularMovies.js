import React, { useState, useEffect } from 'react'
import Titles from '../Titles'
import { BsCollectionPlay } from "react-icons/bs";
import { Movies } from '../../Data/MoviesData';
import Movie from './Movie';




function PopularMovies() {
  return (
    <div className='my-16'>
      <Titles title="Popular Movies" Icon={BsCollectionPlay} />

      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {

          Movies.slice(0, 8).map((movie, index) => (

            <Movie key={index} movie={movie} />
          ))
        }
      </div>

    </div>
  )
}

export default PopularMovies
