import React, { useEffect, useState } from 'react'
import SlideBar from '../SlideBar'
import Table2 from '../../../Components/Table2'
import { IoCreate } from 'react-icons/io5'
import { CategoriesData } from '../../../Data/CategoriesData'
import CategoryModal from '../../../Components/Modals/CategoryModal'


function Categories() {

     const [modalOpen, setModalOpen] = useState(false);
     const [category, setCategory] = useState();


     const OnEditFunction = (id) => {
          setCategory(id);
          setModalOpen(!modalOpen);
     };
     
     useEffect(() => {
          if(modalOpen === false){
               setCategory();
          }

     }, [modalOpen]
     );

     return (
          <SlideBar>
               <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} category={category} />
               <div className='flex flex-col gap-6'>
                    <div className='flex-btn gap-2'>
                         <h2 className='text-xl font-bold'>Categories</h2>
                         <button
                              onClick={() => setModalOpen(true)}
                              className='bg-subMain flex-rows font-medium gap-4 transitions hover:bg-subMain border border-subMain txet-white py-2 px-4 rounded'>
                              <IoCreate className='w-6 h-6' /> Create
                         </button>

                    </div>
                    <Table2 data={CategoriesData} users={false} OnEditFunction={OnEditFunction} />
               </div>
          </SlideBar>
     )
}

export default Categories
