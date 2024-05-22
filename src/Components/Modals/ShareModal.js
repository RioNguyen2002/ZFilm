import React from 'react'
import MainModal from './MainModal'
import { FaFacebook } from 'react-icons/fa'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import {  BsTwitterX } from 'react-icons/bs'



function ShareMovieModal({ modalOpen, setModalOpen, movie }) {

     const ShareData = [
          {
               icon: FaFacebook,
               shareButon: FacebookShareButton,
               
          },
          {
               icon: BsTwitterX,
               shareButon: TwitterShareButton
          },
     ];


     const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`;

     return (
          <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
               <div className='inline-block sm:w-4/5 border border-blue-500 md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full  bg-main text-white rounded-2xl'>
                    <h2 className='text-3xl font-bold '>Share <span className='text-xl font-bold'>{movie?.name}</span> </h2>
                    <form className='flex-rows flex-wrap gap-6 mt-6'>
                         {
                              ShareData.map((data, index) => (
                                   <data.shareButon key={index} url={url} quote="Z Film">
                                        <div className='w-12 transitions bg-blue-500 hover:bg-subMain flex-colo text-lg h-12  rounded bg-opacity-30'>
                                             <data.icon className='text-white' />
                                        </div>
                                   </data.shareButon>

                              ))
                         }
                    </form>
               </div>
          </MainModal>
     )
}

export default ShareMovieModal
