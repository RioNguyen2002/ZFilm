import React from 'react'
import Layout from '../Layouts/Layout'
import { Input } from '../Components/UsedInput'

export default function ChangePassword() {
  return (
    <Layout>
      <div className='container mx-auto px-2 my-24 flex-colo'>
        <div className='flex flex-col gap-7'>
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
      </div>
    </Layout>
  )
}
