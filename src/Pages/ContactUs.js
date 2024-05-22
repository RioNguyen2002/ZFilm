import React from 'react'
import Layout from '../Layouts/Layout'
import Head from '../Components/Head'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";


function ContactUs() {

  const ContactData = [

    {
      id: 1,
      title: "Email Us",
      info: "Interactively grow backend ideas for cross-platform models",
      icon: IoIosMail,
      contact: 'info@xyz.com',
    },
    {
      id: 2,
      title: "Call Us",
      info: "Distinctively, exploit optimal alignments for intuitive bandwidth",
      icon: FaPhoneAlt,
      contact: '+84 0987654321',
    },
    {
      id: 3,
      title: "Location",
      info: "Number 6, TranVanOn street, Phu Hoa - ThuDauMot - BinhDuong - VietNam",
      icon: FaLocationArrow,
      contact: 'This is Thu Dau Mot University',
    },
  ]


  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title={"Contact Us"} />
        <div className='grid mg:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8'>
          {
            ContactData.map((item) => (

              <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center '>
                <span className='flex-colo w-20 h-20 rounded-full bg-main text-subMain text-2xl '>
                  <item.icon />
                </span>

                <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
                <p className='mb-0 text-sm text-text leading-7'>
                  <a className='text-blue-600' href={`mailto:${item.contact}`}>
                    {item.contact}
                  </a>{' '}
                  {item.info}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
