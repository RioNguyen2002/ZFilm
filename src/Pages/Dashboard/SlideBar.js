import React from 'react'
import { RiGridFill } from "react-icons/ri";
import { FaListAlt, FaUserAlt, FaHandHoldingHeart } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdMovieFilter, MdOutlinePassword } from "react-icons/md";
import Layout from '../../Layouts/Layout';
import { NavLink } from 'react-router-dom';

function SlideBar({ children }) {

  const SlideLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: RiGridFill
    },
    {
      name: "Movies List",
      link: "/movieslist",
      icon: FaListAlt
    },
    {
      name: "Add Movie",
      link: "/addmovie",
      icon: MdMovieFilter
    },
    {
      name: "Categories",
      link: "/categories",
      icon: HiOutlineViewGrid
    },
    {
      name: "Users",
      link: "/users",
      icon: FaUserAlt
    },
    
    {
      name: "Favorites Movies",
      link: "/favoritemovies",
      icon: FaHandHoldingHeart
    },
    {
      name: "Change Password",
      link: "/password",
      icon: MdOutlinePassword
    },

  ];


  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (

    <Layout >
      <div className='min-h-screen container mx-auto px-2'>
        <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
          <div className='col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5'>
            {
              SlideLinks.map((link, index) => (
                <NavLink to={link.link} key={index} className={Hover}>
                  <link.icon /> <p>{link.name}</p>
                </NavLink>

              ))
            }
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="100"
            className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SlideBar
