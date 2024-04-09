import React from 'react';
import { GrGraphQl } from "react-icons/gr";
import { LuUsers2 } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import MainContent from '../components/MainContent'

const Container = () => {
    return(
        <div className='bg-[#5e6366] p-3'>
            <div className='sm:flex flex-col gap-3'>    
              <div className='flex flex-col gap-5 sm:flex-row mb-3 md:mb-0'>
                <div className='bg-[#FFFFFF] p-[11px_15px_11px_15px] rounded-[12px] w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33333333%-10px)] h-[145px]'>
                      <div className='flex flex-col gap-8'>
                        <div className='flex items-center justify-between'>
                          <div className='bg-[#5570F1] p-1 rounded-[8px]'>
                            <GrGraphQl className='' />
                          </div>
                          <div className='flex items-center gap-3'>
                            <h1>This Week</h1>
                            <IoIosArrowDown />
                          </div>
                        </div>
       
                        <div className='flex justify-between'>
                          <div className='flex flex-col gap-3'>
                             <h1>Sales</h1>
                             <h1>$4,000,000.00</h1>
                          </div>
                          <div className='flex flex-col gap-3'>
                            <h1>Volume</h1>
                            <h1>450</h1>
                          </div>
                        </div>

                      </div>
                </div>

                <div className='bg-[#FFFFFF] p-[11px_15px_11px_15px] rounded-[12px] w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33333333%-10px)] h-[145px]'>
                  <div className='flex flex-col gap-8'>
                    <div className='flex items-center justify-between'>
                      <div className='bg-[#FFCC91] p-1 rounded-[8px]'>
                        <LuUsers2 />
                      </div>
                      <div className='flex items-center gap-3'>
                        <h1>This Week</h1>
                        <IoIosArrowDown />
                      </div>
                    </div>

                    <div className='flex justify-between'>
                      <div className='flex flex-col gap-3'>
                        <h1>Customers</h1>
                        <h1>$1,250</h1>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <h1>Active</h1>
                        <h1>1,180</h1>
                      </div>
                    </div>

                  </div>   
                </div>

                <div className='bg-[#FFFFFF] p-[11px_15px_11px_15px] rounded-[12px] w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33333333%-10px)] h-[145px]'>
                  <div className='flex flex-col gap-8'>
                    <div className='flex items-center justify-between'>
                      <div className='bg-[#FFCC91] p-1 rounded-[8px]'>
                        <IoBagOutline />
                      </div>
                      <div className='flex items-center gap-3'>
                        <h1>This Week</h1>
                        <IoIosArrowDown />
                      </div>
                    </div>

                    <div className='flex justify-between'>
                      <div className='flex flex-col gap-3'>
                        <h1>All Orders</h1>
                        <h1>450</h1>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <h1>Pending</h1>
                        <h1>5</h1>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <h1>Completed</h1>
                        <h1>445</h1>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
                <MainContent />
            </div>
          </div>
    )
}

export default Container;
