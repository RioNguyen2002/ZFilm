import React from 'react'
import MainModal from './MainModal'
import { Input } from '../UsedInput'
import Uploader from '../Uploader'



function CastsModal({ modalOpen, setModalOpen, cast }) {
     return (
          <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
               <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full  bg-main text-white rounded-2xl'>
                    <h2 className='text-3xl font-bold '>{cast ? "Update Cast" : "Create Cast"} </h2>
                    <form className='flex flex-col gap-6 text-left mt-6'>
                         <Input
                              label={"Cast Name"}
                              placeholder={cast ? cast.title : "Nguyễn An"}
                              type="text"
                              bg={false}/>
                              <div className='flex flex-col gap-2'>
                              <p className='text-border font-semibold text-sm'>
                                   Cast Modal
                              </p>
                              <Uploader />
                              <div className='w-32 h-32 p-1 bg-main border border-border rounded-md'>
                                   <img src={`/images/${cast ? cast.image : "meo.jpg"}`} 
                                   alt=""
                                   className='w-full h-full object-cover rounded' />
                              </div>
                         </div>
                              <button 
                                   onClick={() => setModalOpen(false)}
                                   className='w-full flex-rows py-3 gap-4 transitions text-lg  rounded bg-subMain hover:bg-dry bg-transparent border-2 border-subMain text-white'>
                                   { cast ? "Update" : "Add" }
                                  
                              </button>
                    </form>
               </div>
          </MainModal>
     )
}

export default CastsModal
