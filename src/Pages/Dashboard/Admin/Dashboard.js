import React from 'react'
import SlideBar from '../SlideBar'
import { FaUserAstronaut } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import Table from '../../../Components/Table';
import { Movies } from '../../../Data/MoviesData';


function Dashboard() {
     const DashboardData=[

          {
               bg:'bg-green-800',
               title:"Total Movie",
               icon:TbCategory2,
               total:90,
          },
          {
               bg:'bg-green-800',
               icon:MdOutlineCategory,
               title:"Total Categories",
               total:8,
          },
          {
               bg:'bg-green-800',
               icon:FaUserAstronaut,
               title:"Total Users",
               total:990,
          },
     ]

     return (
          <SlideBar>
               <h2 className='text-xl font-bold'> Dashboard</h2>
               <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
                    {
                         DashboardData.map((data, index) =>(

                              <div key={index} className='p-4 rounded bg-main border-border grid grid-cols-4 gap-2'>
                                   <div className={`col-span-1 rounded-full p-2 h-12 w-12  flex-colo ${data.bg}`}>
                                        <data.icon/>
                                   </div>
                                   <div className='col-span-3'>
                                        <h2>{data.title}</h2>
                                        <p className='text-text mt-2 font-bold'>{data.total}</p>
                                   </div>
                              </div>
                         ))
                    }


               </div>
               <h3 className='text-md font-medium mt-6'>Recent Movie  </h3>

               <Table data={Movies.slice(0, 5)} admin={true}/>

               
          </SlideBar>
     )
}

export default Dashboard
