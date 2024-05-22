import React from 'react'
import SlideBar from './SlideBar'
import { Input } from '../../Components/UsedInput'

function Password() {
  return (
    <SlideBar>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold '>Change Password</h2>
       
        <Input
          label="Previous Password"
          placeholder={"**********"}
          type={"password"}
          bg={true}
        />
        <Input
          label="New Password"
          placeholder={"**********"}
          type={"password"}
          bg={true}
        />
        <Input
          label="Conform Password"
          placeholder={"**********"}
          type={"password"}
          bg={true}
        />
        <div className='flex justify-end items-center my-4'>

          <button className='bg-main transitions hover:bg-subMain border-subMain  text-white py-3 px-6 rounded w-full sm:w-auto '>
            Save
          </button>
        </div>
      </div>
    </SlideBar>
  )
}

export default Password
