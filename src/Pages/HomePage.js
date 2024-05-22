import React from 'react'
import Layout from '../Layouts/Layout'
import Banner from '../Components/Home/Banner'
import PopularMovies from '../Components/Home/PopularMovies';
import TopRated from '../Components/Home/TopRated';



function HomePage() {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen px-5 mb-6'>
      
        <Banner />

        <PopularMovies />

        <TopRated />
      </div>
    </Layout>
  )
}

export default HomePage
