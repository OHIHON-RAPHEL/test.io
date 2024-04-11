import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";


const TopNav = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between mb-4'>
              <h1>Dashboard</h1>
              <div className='flex items-center gap-3'>
                <h1>Nanny`s Shop</h1>
                <IoIosArrowDown />
                <IoMdNotifications />
                <div className='w-[20px]'>
                    <img src='./image/raphel.jpg' className='rounded-[8px]' alt='Profile' />
                </div>
              </div>
            </div>
            <IoHomeSharp className='' />
        </div>
        
    )
}

export default TopNav;