import React from 'react'
import SlideBar from './SlideBar'
import Uploader from '../../Components/Uploader'
import { Input } from '../../Components/UsedInput'

function Profile() {
     return (
          <SlideBar>
               <div className='flex flex-col gap-6'>
                    <h2 className='text-xl font-bold '>Profile</h2>
                    <Uploader />
                    <Input
                         label="Fullname"
                         placeholder={"NguyenVanA"}
                         type={"text"}
                         bg={true}
                    />
                    <Input
                         label="Email"
                         placeholder={"zfilm@gmail.com"}
                         type={"email"}
                         bg={true}
                    />
                    <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
                         <button className='bg-subMain transitions hover:bg-main border-subMain  text-white py-3 px-6 rounded w-full sm:w-auto '>
                              Delete Account
                         </button>
                         <button className='bg-main transitions hover:bg-subMain border-subMain  text-white py-3 px-6 rounded w-full sm:w-auto '>
                              Update Profile
                         </button>
                    </div>
               </div>
          </SlideBar>
     )
}

export default Profile
