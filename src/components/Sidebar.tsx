import React from 'react';
import { TbCategoryFilled } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { FiFolderMinus } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";
import { BsGift } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import {Link} from 'react-router-dom'


const Sidebar = () => {

    return (
      <div className='flex justify-center w-full md:w-[296px]'>
        <div className=''>
          <div className='mb-10 w-[100px]'>
            <img src='./image/Logo.png' alt='Logo' />
          </div>
          <div className='flex flex-col gap-5 mb-96'>
            <div className='bg-[#5570F1] p-[16px_20px_16px_20px] rounded-[12px] w-[233px]'>
              <div className='flex items-center gap-3'>
                <TbCategoryFilled />
                <h1>Dashboard</h1>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <IoBagOutline />
              <h4>Orders</h4>
            </div>
            <div className='flex items-center gap-3'>
              <LuUsers2 />
              <h4>Customers</h4>
            </div>
            <div className='flex items-center gap-3'>
              <FiFolderMinus />
              <h4>Inventory</h4>
            </div>
            <Link to="./messages" className='flex items-center gap-3 cursor-pointer'>
              <IoChatbubbleEllipsesOutline />
              <h4>Conversations</h4>
            </Link>
            <div className='flex items-center gap-3'>
              <IoSettingsOutline />
              <h4>Settings just been the individual that just have to do thye things thatv is beeen beeen nedde to cover uponthe the expenses</h4>
            </div>
          </div>

          <div className='bg-[#5E6366] w-full sm:w-[232px] rounded-[16px] p-[11px_16px_11px_16px] mb-3'>
            <div className='flex items-center gap-3'>
              <MdOutlineHeadphones />
              <h4>Contact Support</h4>
            </div>
          </div>

          <div className='bg-[#FFCC91] w-full sm:w-[233px] rounded-[16px] p-[11px_16px_11px_16px] mb-8'>
            <div className='flex items-center gap-3'>
              <BsGift />
              <h4>Free Gift Awaits You!</h4>
            </div>
            <h4>Upgrade your account</h4>
          </div>

          <div className='flex items-center gap-3 text-[#CC5F5F]'>
            <IoLogOut />
            <h4>Log out</h4>
          </div>
        </div>
      </div>
    )
}

export default Sidebar;