import React from 'react';
import { TbCategory } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { FiFolderMinus } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";

const RecentItem = () => {
  return ( <div className='flex gap-4 hover:bg-gray-200'>
     <div>
       <img src='./image/Group 11.png' />
     </div>
     <div>
       <div className='flex justify-between'>
         <p>Jane Doe</p>
         <p>New</p>
       </div>
       <p>Hi, i want to make enquiries about yo......</p>
     </div>
   </div>)
 };



const Message = () => {
    return (
        <div className='flex '>
          
          <div className=''>
            <div className='w-[30px] mb-10'>
              <img src='./image/Logo2.png' />
            </div>
            <div className='flex flex-col gap-5 mb-40'>
              
              <TbCategory />
              <IoBagOutline />
              <LuUsers2 />
              <FiFolderMinus />
              <IoChatbubbleEllipsesOutline />
              <IoSettingsOutline />
              
            </div>
            <div className='bg-[#5E6366] rounded-[16px] p-2  mb-3'>
              <MdOutlineHeadphones />
            </div>
            <div className='bg-[#FFCC91] rounded-[16px] p-2  mb-10'>
              <FiGift />
            </div>
            <div>
              <IoLogOut />
            </div>
          </div>

          <div className='bg-gray-400 p-3 w-full'>
            <div className=' flex justify-between text-white '>
              <div>
                <h1>Conversations with Customers</h1>
              </div>
              <div className='bg-[#5570F1] p-2 rounded-[12px]'>
                <p>New Message</p>
              </div>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='bg-white rounded-[12px] p-4 w-full'>
                <div>
                  <div className='flex justify-between'>
                    <h1>Contacts</h1>
                    <h1>34</h1>
                  </div>
                  <div>
                    <input type='text' placeholder='search' className='border-2 border-black rounded w-[363px]' />
                  </div>
                  <div className='bg mt-5 flex flex-col gap-4'>
                    <RecentItem  />
                    <RecentItem  />
                    <RecentItem  />
                    <RecentItem  />
                    <RecentItem  />
                    <RecentItem  />
                    <RecentItem  />
                    <RecentItem  />
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-[12px] p-4 w-full'>
                <div className='flex gap-4 mb-4'>
                  <div>
                    <img src='./image/Group 11.png' />
                  </div>
                  <div>
                    <div className='flex justify-between'>
                      <h1>Jane Doe</h1>
                      <div className='flex'>
                        <h1>New Customers</h1>
                        <h1>View Profile</h1>
                      </div>
                    </div>
                    <div className='flex'>
                      <h1>online 12:55amhhhdhdjnjnnbhjhfjyvernjnfklkjhfuilfhufjnnjn</h1>
                      <h1>0 Orders</h1>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex justify-center bg-[#F4F5FA] '>
                    <h1>12 August 2022</h1>
                  </div>
                  <div>

                    <div className='flex'>
                      <div>
                        <img src='./image/2phone.png' />
                      </div>
                      <div>
                        <h1>iphone 13</h1>
                        <h1>$730,000.00</h1>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

    )
}


export default Message;