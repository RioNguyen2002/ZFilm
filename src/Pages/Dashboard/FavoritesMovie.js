import React from 'react'
import SlideBar from './SlideBar'
import { Movies } from '../../Data/MoviesData'
import Table from '../../Components/Table'
function FavoritesMovie() {
  return (
   <SlideBar>
     <div className='flex flex-col gap-6'>
          <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'>Favorites Movie</h2>
                    <button className='bg-subMain font-medium transitions hover:bg-subMain border border-subMain txet-white py-3 px-6 rounded'>
                         Delete All
                    </button>
               
          </div>
          <Table data={Movies} admin={true}/>
     </div>
   </SlideBar>
  )
}

export default FavoritesMovie
