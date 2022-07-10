import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer class="footer mt-28 flex justify-start items-center py-10 lg:px-20 p-5 bg-neutral text-neutral-content  overflow-hidden ">
            <div className=' h-full w-2/3'>
               <p className='flex justify-center items-center h-full'>Copyright © {(new Date().getFullYear())} - All right reserved</p>
            </div> 
            <div className='flex flex-col justify-center items-center w-1/3'>
                <span class="footer-title text-center">Social</span> 
                <div className='flex gap-1 '>
                            <div class="divider divider-horizontal  m-0 p-0 w-0"></div>

                            <div className='w-12 h-12 flex justify-center items-center hover:bg-primary rounded-lg'><Link to='/'><FaFacebookF className='w-6 h-6'/></Link></div>

                            <div class="divider divider-horizontal  m-0 p-0 w-0"></div>

                            <div className='w-12 h-12 flex justify-center items-center hover:bg-primary rounded-lg'><Link to='/'><FaLinkedinIn className='w-6 h-6' /></Link></div>

                            <div class="divider divider-horizontal  m-0 p-0 w-0"></div>

                            <div className='w-12 h-12 flex justify-center items-center hover:bg-primary rounded-lg'><Link to='/'><AiOutlineYoutube className='w-6 h-6' /></Link></div> 

                            <div class="divider m-0 p-0 w-0 divider-horizontal"></div>                      
                 </div>
            </div>
        </footer>
    );
};

export default Footer;