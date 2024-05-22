import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';


const Head = "text-xs text-left bg-main text-white font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";


//rows
const Rows = (data, i, users, OnEditFunction) => {


     return (
          <tr key={i}>
               {/**Users */}
               {
                    users ? (
                         <>
                              <td className={`${Text}`}>
                                   <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                                        <img
                                             src={`/images/${data.image ? data.image : "meo.jpg"}`}
                                             className='h-full w-full  object-cover'
                                             alt={data?.fullName}
                                        />
                                   </div>

                              </td>
                              <td className={`${Text}`}>{data?._id ? data._id : "2R75T8"} </td>
                              <td className={`${Text}`}>{data.createAt ? data.createAt : "12, Jan 2023"}</td>
                              <td className={`${Text}`}>{data.fullName}</td>
                              <td className={`${Text}`}>{data.email}</td>
                              <td className={`${Text} float-right flex-rows gap-2`}>
                                   <button className='border border-main bg-main flex-rows gap-2 text-main rounded py-1 px-2'>
                                        <MdDelete className='text-red-500 ' />
                                   </button>
                              </td>
                         </>
                    )
                         :
                         (
                              //add categories for admin
                              <>
                                   <td className={`${Text} font-bold`}>{data?._id ? data._id : "2R75T8"} </td>
                                   <td className={`${Text}`}>{data.createAt ? data.createAt : "12, Jan 2023"}</td>
                                   <td className={`${Text}`}>{data.title}</td>
                                   <td className={`${Text} float-right flex-rows gap-2`}>
                                        <button
                                             onClick={() => OnEditFunction(data)}
                                             className='border border-green-500 bg-main flex-rows gap-2 text-border rounded py-1 px-2'>
                                             Edit <FaEdit className='text-green-500' />
                                        </button>
                                        <button className='border border-main bg-main flex-rows gap-2 text-main rounded py-1 px-2'>
                                             <MdDelete className='text-red-500 ' />
                                        </button>
                                   </td>
                              </>
                         )
               }

          </tr>

     )
}

//table

function Table2({ data, users, OnEditFunction }) {




     return (
          <div className='overflow-x-scroll overflow-hidden relative w-full'>
               <table className='w-full table-auto border border-border divide-y divide-border'>
                    <thead>
                         <tr className='bg-dryGray'>
                              {
                                   users ? (
                                        <>
                                             <th scope='col' className={`${Head}`}>
                                                  Image
                                             </th>
                                             <th scope='col' className={`${Head}`}>
                                                  ID
                                             </th>
                                             <th scope='col' className={`${Head}`}>
                                                  Date
                                             </th>
                                             <th scope='col' className={`${Head}`}>
                                                  Full Name
                                             </th>
                                             <th scope='col' className={`${Head}`}>
                                                  Email
                                             </th>
                                        </>
                                   )
                                        :
                                        (
                                             <>
                                                  <th scope='col' className={`${Head}`}>
                                                       Id
                                                  </th>
                                                  <th scope='col' className={`${Head}`}>
                                                       Date
                                                  </th>
                                                  <th scope='col' className={`${Head}`}>
                                                       Title
                                                  </th>

                                             </>
                                        )

                              }


                              <th scope='col' className={`${Head} text-end`}>
                                   Actions
                              </th>
                         </tr>
                    </thead>
                    <tbody className='bg-main divide-y divide-gray-800'>
                         {
                              data.map((movie, i) => Rows(movie, i, users, OnEditFunction))
                         }
                    </tbody>
               </table>

          </div>
     );
}

export default Table2
