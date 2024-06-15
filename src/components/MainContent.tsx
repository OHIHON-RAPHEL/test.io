import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FiFolderMinus } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";


const RecentItem = ({title} : {title: any}) => {
    return ( <div className='flex gap-3 text-[13px] text-gray-500  mb-[5px] p-[5px]'>
       <div className='w-[30px]'>
         <img src='./image/2phone.png' />
       </div>
       <div className='flex flex-col gap-2.5'>
        <div className='flex justify-between'>
          <p>iphone 13</p>
          <small>12 sept 2022</small>
        </div>
        <div className='flex justify-between'>
          <p>$730,000.00 * 1</p>
          <small className='bg-[#F57EE7] rounded-[8px] p-1'>{title}</small>
        </div>
       </div>
     </div>)
   };



const MainContent = () => {
    return (
        <div className='w-full flex flex-col gap-5 md:flex-row'>

          <div className='w-full md:w-2/3'>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-4">
            {/* Left Box */}
              <div className="bg-white w-full rounded-[12px] p-[21px_20px_21px_20px]">
                <div>
                  <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                    <h1>Marketing</h1>
                    <div className='flex items-center'>
                        <h1>This Week</h1>
                        <IoIosArrowDown />
                    </div>
                    </div>
                    <div className='flex justify-between'>
                       <small>Acquisition</small>
                       <small>Purchase</small>
                       <small>Retention</small>
                    </div>
                    <div className='mx-auto mt-5'>
                    <img src='./image/circle.png' />
                    </div>
                  </div>
                </div>
              </div>

            {/* Right Boxes */}
              <div className="col-span-1 w-full">
                <div className="bg-[#5570F1] w-full p-[21px_20px_21px_20px] rounded-[12px] text-white">
                <div className='flex flex-col gap-8'>
                    <div className='bg p-1 rounded-[8px]'>
                    <FiFolderMinus />
                    </div>
                    <div className='flex justify-between'>
                      <div className='flex flex-col gap-3'>
                        <h1>All Products</h1>
                        <h1>45</h1>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <h1>Active</h1>
                        <h1>32</h1>
                      </div>
                    </div>
                </div>
                </div>
                <div className="bg-white w-full p-[21px_20px_21px_20px] rounded-[12px] mt-4">
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center justify-between'>
                    <div className='bg-[#FFCC91] p-1 rounded-[8px]'>
                        <IoCartOutline />
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1>This Week</h1>
                        <IoIosArrowDown />
                    </div>
                    </div>

                    <div className='flex justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h1>Abandoned Cart</h1>
                        <h1>20%</h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1>Customers</h1>
                        <h1>30</h1>
                    </div>
                    </div>

                </div>
                </div>
              </div>

            </div>
            
            <div className='bg-white w-full p-[15px_20px_15px_20px] rounded-[12px] '>
              <div>
                <div className='flex justify-between mb-5'>
                  <div className='flex gap-4'>
                    <h1>Summary</h1>
                    <div className='flex items-center bg-[#5570F1]'>
                      <h1>Sales</h1>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <h1>Last 7 Days</h1>
                    <IoIosArrowDown />
                  </div>
                </div>

                <div className='flex justify-between'>
                  <div className='flex flex-col gap-5'>
                    <h4>100k</h4>
                    <h4>80k</h4>
                    <h4>60k</h4>
                    <h4>40k</h4>
                    <h4>20k</h4>
                  </div>
                  <div>
                    <img src='./image/bar.png' className='mx-auto' />
                    <span >Sept10</span>
                  </div>
                  <div>
                    <img src='./image/bar2.png' className='mx-auto' />
                    <small>Sept11</small>
                  </div>
                  <div>
                    <img src='./image/bar3.png' className='mx-auto' />
                    <small>Sept12</small>
                  </div>
                  <div>
                    <img src='./image/bar 4.png' className='mx-auto' />
                    <small>Sept13</small>
                  </div>
                  <div>
                    <img src='./image/bar 5.png' className='mx-auto' />
                    <small>Sept14</small>
                  </div>
                  <div>
                    <img src='./image/bar 6.png' className='mx-auto' />
                    <small>Sept15</small>
                  </div>
                  <div>
                    <img src='./image/bar 7.png' className='mx-auto' />
                    <small>Sept16</small>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='bg-white rounded-[12px] p-[20px] w-full md:w-1/3'>
            <p className='mb-5'>Recent Orders</p>
            <RecentItem title={"pending"} />
            <RecentItem title={"completed"} />
            <RecentItem title={"pending"} />
            <RecentItem title={"completed"} />
            <RecentItem title={"completed"} />
            <RecentItem title={"completed"} />
            <RecentItem title={"pending"} />
            <RecentItem title={"pending"} />
            <RecentItem title={"pending"} />
          </div>
        </div>

    )
}

export default MainContent;