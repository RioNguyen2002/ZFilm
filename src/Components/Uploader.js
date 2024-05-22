import React from 'react'
import { useDropzone } from 'react-dropzone'

function Uploader() {

     const {getRootProps, getInputProps} = useDropzone({
          multiple:false,
          maxSize:100000,
          onDrop: (acceptedFiles) => {
               alert("acceptedFiles[0].name");

          },
     });
  return (
    <div className='w-full text-center'>
      <div {...getRootProps()}
      className='px-6 pt-5 pb-6 border-2 border-border border-dashed bg-main rounded-md cursor-pointer'>
          <input {...getInputProps()} />
          <span className='mx-auto flex-colo text-subMain text-3xl'>
               <p className='text-sm mt-2'>Drag your image here</p>
               <div className='text-xs text-border'>
                    (only .jpg and .png files wil be accepted)
               </div>
          </span>   
      </div>
    </div>
  )
}

export default Uploader
