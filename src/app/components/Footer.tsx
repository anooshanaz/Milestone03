import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center items-center m-10 mb-0'>
        <nav className='flex justify-items-center flex-wrap gap-6 text-red-600 font-medium bg-gradient-to-r from-black to-slate-900'>
          <a href="#" className='hover hover:text-red-500 text-amber-300'>Home</a>
          <a href="#" className='hover hover:text-red-500 text-amber-300'>About</a>
          <a href="#" className='hover hover:text-red-500 text-amber-300'>Delivery</a>
          <a href="#" className='hover hover:text-red-500 text-amber-300'>Contact</a>
        </nav>
        <div className='flex justify-center space-y-5 transition duration-500 ease-in-out transform scale-105'>
          <ul className='flex space-x-4 mb-4'>
            <Link href="#"><li>< FaFacebookF className='bg-blue-700 w-6 h-6 text-white pt-1 pb-1 rounded-full' /></li></Link>
            <Link href="#"><li><FaYoutube className='bg-red-600 text-white pt-1 pb-1 w-6 h-6 rounded-full ' /></li></Link>
            <Link href="#"><li><FaTwitterSquare className='bg-blue-400 text-white pt-1 pb-1 rounded-full w-6 h-6' /></li></Link>
            <Link href="#"><li><FaInstagram className='instagram bg-pink-600 text-white pt-1 pb-1 rounded-full w-6 h-6' /></li></Link>
            <Link href="#"><li><AiFillTikTok className='bg-black text-white pt-1 pb-1 rounded-full w-6 h-6' /></li></Link>
          </ul>
          </div>
        <div className='text-center text-white bg-gradient-to-r from-black to-slate-900'>
        @ Anoosha | All rights reserved 2024
    </div>
      </footer>
    </div>
  )
}

export default Footer
