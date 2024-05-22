import React from 'react'
import SlideBar from '../SlideBar'
import {UsersData} from '../../../Data/UserData'
import Table2 from '../../../Components/Table2'

function Users() {
  return (
     <SlideBar>
               <div className='flex flex-col gap-6'>
                    <div className='flex-btn gap-2'>
                         <h2 className='text-xl font-bold'>User</h2>
                       

                    </div>
                    <Table2 data={UsersData} users={true} />
               </div>
          </SlideBar>
  )
}

export default Users
