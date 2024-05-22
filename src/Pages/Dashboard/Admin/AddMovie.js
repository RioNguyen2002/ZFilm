import React, { useEffect, useState } from 'react'
import SlideBar from '../SlideBar'
import { Input, Message, Select } from '../../../Components/UsedInput'
import Uploader from '../../../Components/Uploader'
import { CategoriesData } from '../../../Data/CategoriesData'
import { UsersData } from '../../../Data/UserData'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { FaUpload } from 'react-icons/fa'
import CastsModal from '../../../Components/Modals/CastsModal'

function AddMovie() {
     const [modalOpen, setModalOpen] = useState(false);
     const [cast, setCast] = useState(null);
     useEffect(() => {
          if (modalOpen === false) {
               setCast();
          }

     }, [modalOpen]
     );
     return (
          <SlideBar >
               <CastsModal modalOpen={modalOpen} setModalOpen={setModalOpen} cast={cast} />
               <div className='flex flex-col gap-6'>
                    <h2 className='text-xl font-bold '>Add Movie</h2>
                    <div className='w-full grid md:grid-cols-2 gap-6'>
                         <Input
                              label="Movie Title"
                              placeholder={"Naruto"}
                              type={"text"}
                              bg={true}
                         />
                         <Input
                              label="Hours"
                              placeholder={"2h"}
                              type={"text"}
                              bg={true}
                         />
                    </div>
                    <div className='w-full grid md:grid-cols-2 gap-6'>
                         <Input
                              label="Language Used"
                              placeholder={"Vietsub"}
                              type={"password"}
                              bg={true}
                         />
                         <Input
                              label="Language Used"
                              placeholder={"2002"}
                              type={Number}
                              bg={true}
                         />
                    </div>
                    <div className='w-full grid md:grid-cols-2 gap-6'>
                         <div className='flex flex-col gap-2'>
                              <p className='text-border font-semibold text-sm'>
                                   Image without Title
                              </p>
                              <Uploader />
                              <div className='w-32 h-32 p-1 bg-main border border-border rounded-md'>
                                   <img src='/images/movies/1.jpg' alt='' className='w-full h-full object-cover rounded' />
                              </div>
                         </div>

                         <div className='flex flex-col gap-2'>
                              <p className='text-border font-semibold text-sm'>
                                   Image without Title
                              </p>
                              <Uploader />
                              <div className='w-32 h-32 p-1 bg-main border border-border rounded-md'>
                                   <img src='/images/movies/1.jpg' alt='' className='w-full h-full object-cover rounded' />
                              </div>
                         </div>

                    </div>
                    <Message label={"Movie Description"} placeholder={"Make it short and sweet"} />
                    {/**Category */}
                    <div className='text-sm w-full'>
                         <Select label={"Movie Category"} option={CategoriesData} />
                    </div>
                    {/**Video */}
                    <div className='flex flex-col gap-2 w-full'>
                         <label className='text-border font-semibold text-sm'>
                              Upload Video
                         </label>
                         <Uploader />
                    </div>
                    {/***Add Cast */}

                    <div className='w-full grid lg:grid-cols-2 gap-6 items-start'>
                         <button onClick={() => setModalOpen(true)}
                              className='w-full py-4 bg-main border border-subMain border-dashed text-shite rounded'>
                              Add Cast
                         </button>
                         <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
                              {UsersData.map((user, i) => (
                                   <div className='p-2 italic text-xs text-text rounded flex-colo bg-main border border-border ' key={i}>
                                        <img src={`${user.image ? user.image : "/images/user.png"} `}
                                             alt={user.fullName}
                                             className='w-full h-24 rounded-full object-cover mb-4'

                                        />
                                        <p>{user.fullName}</p>
                                        <div className='flex-rows mt-2 w-full gap-2'>
                                             <button className='w-6 h-6 flex-colo bg-dry border border-border text-red-500' >
                                                  <MdDelete />
                                             </button>
                                             <button
                                                  onClick={() => {
                                                       setCast(user);
                                                       setModalOpen(true);
                                                  }
                                                  }
                                                  className='w-6 h-6 flex-colo bg-dry border border-border text-green-500' >
                                                  <CiEdit />
                                             </button>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
                    <div className='flex justify-end items-center my-4'>

                         <button className='bg-main transitions hover:bg-subMain border-subMain  text-white py-4 px-10 rounded w-full sm:w-auto '>
                              <FaUpload />
                         </button>
                    </div>
               </div>
          </SlideBar>
     )
}

export default AddMovie
