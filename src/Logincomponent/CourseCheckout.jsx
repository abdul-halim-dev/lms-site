import React from 'react'
import { Link } from 'react-router-dom'
import CardImage from '@/assets/card_image/card1.jpg'
import { FaChevronDown } from 'react-icons/fa'
import { LuCreditCard } from "react-icons/lu";
import Payment from '@/assets/card_image/payment.png'

const CourseCheckout = () => {
  return (
    <div className='w-full py-[60px] bg-primary flex items-center justify-center flex-col gap-10 px-[30px]  '>

      <div className='w-full flex items-end justify-end '>
        <div className='w-[100%] flex items-center justify-between '>
          <div className='w-[33%] success '  >
            <div className='flex items-center justify-center flex-col'>
              <span className=' flex items-center bg-[#22c55e] justify-center w-[26px] h-[26px] rounded-3xl border-[1px] border-subsecondary text-[14px] text-white'> 1 </span>
              <span className='text-[14px] text-subsecondary   '> Details </span>
            </div>
          </div>

          <div className='w-[33%]  floting_line '  >
            <div className='flex items-center justify-center flex-col'>
              <span className=' flex items-center justify-center w-[26px] h-[26px] bg-active rounded-3xl border-[1px] border-subsecondary text-[14px] text-white'> 2 </span>
              <span className='text-[14px] text-subsecondary   '> payment </span>
            </div>
          </div>

          <div className='w-[33%] '  >
            <div className='flex items-center justify-center flex-col'>
              <span className=' flex items-center justify-center w-[26px] h-[26px] rounded-3xl border-[1px] border-subsecondary text-[14px] text-white'> 3 </span>
              <span className='text-[14px] text-subsecondary   '> completion </span>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[90%] flex items-center justify-center flex-col gap-4'>
        <div className='w-[80%] flex items-start justify-center gap-6'>
          <div className='w-[49%] flex items-center justify-center flex-col gap-4'>
            <div className='w-full flex items-center justify-center flex-col gap-7'>

              <div className='p-6 bg-secondary w-full hover:border-[1px] border-active rounded duration-200 flex items-center justify-center flex-col gap-3 shadow-md '>
                <div className='w-full h-full'>
                  <img className='w-full h-full object-cover' src={CardImage} alt="" />
                </div>

                <div className='w-full items-start flex justify-center flex-col gap-0'>
                  <h2 className='text-white text-2xl font-bold '>Advance Machine Learning </h2>
                  <p className='text-lg text-subsecondary font-semibold  '> by Alice Jonson </p>
                  <p className='text-subsecondary text-[14px] pt-2 '> Dive deep into machine algorithms and techniques</p>
                </div>

                <div className='w-full flex items-start justify-center flex-col gap-1'>
                  <h4 className='text-lg text-white font-semibold '> Course Content </h4>
                  <div className='w-full rounded-md border-[1px] bg-primary border-subsecondary  '>
                    <div className='w-full flex items-start justify-between cursor-pointer px-4 py-2 border-b-[1px] border-subsecondary '>
                      <p className='text-[12px] font-semibold text-subsecondary '> Neural Networks</p>
                      <FaChevronDown className='text-[12px] text-subsecondary ' />
                    </div>
                    <div className='w-full flex items-start justify-between cursor-pointer px-4 py-2 border-b-[1px] border-subsecondary '>
                      <p className='text-[12px] font-semibold text-subsecondary '> Deep Learning </p>
                      <FaChevronDown className='text-[12px] text-subsecondary ' />
                    </div>
                    <div className='w-full flex items-start justify-between px-4 py-2 cursor-pointer'>
                      <p className='text-[12px] font-semibold text-subsecondary'>  Advance AI Algorithms</p>
                      <FaChevronDown className='text-[12px] text-subsecondary ' />
                    </div>


                  </div>
                </div>

              </div>

              <div className='p-6 bg-secondary w-full flex items-start justify-center flex-col gap-4  rounded-md'>
                <h2 className='text-lg font-medium text-white '> Price Details (1 item) </h2>
                <div className='w-full flex items-center justify-between border-b-[1px] border-subsecondary pb-6'>
                  <p className='text-subsecondary text-[14px] font-semibold '> 1x Advance Machine Learning </p>
                  <p className='text-subsecondary text-[16px] font-semibold '> $99.99</p>
                </div>
                <div className='w-full flex items-center justify-between '>
                  <p className='text-white text-[16px] font-semibold '> Total Amount </p>
                  <p className='text-white text-[16px] font-semibold '> $99.99</p>
                </div>
              </div>

            </div>
          </div>


          <div className='w-[49%] flex items-center justify-center flex-col gap-4'>
            <div className='w-full flex items-center justify-center flex-col gap-3'>

              <div className='w-full rounded-md bg-secondary flex items-center justify-center shadow-sm flex-col gap-4 p-6'>
                <div className='w-full flex items-center justify-center flex-col gap-2'>
                  <h3 className='text-2xl font-bold text-white '> Guest Checkout </h3>
                  <p className='text-[12px] font-semibold text-subsecondary text-center '> Enter Email to receive course access details and order confirmation. You can create an account after purchase </p>
                </div>
                <h4 className='text-white text-start w-full text-lg font-semibold '> Payment Method </h4>
                <div className=' w-full border-[1px] rounded border-subsecondary shadow flex items-start justify-center flex-col gap-1   '>
                <div className=' w-full bg-[#2e2f38] p-2 flex items-start gap-2  '>
                    <LuCreditCard className='text-white text-lg '/>
                    <p className='text-white text-sm   '>  credit/debit card</p>
                </div>
                <div className=' p-4 w-full flex items-center justify-center flex-col gap-2'>
                <div className='w-full items-start flex justify-center flex-col gap-2'>
                    <span className='text-subsecondary text-[14px] '> Card Number </span>
                    <div className='w-full items-center rounded border-[1px] border-subsecondary shadow flex justify-center px-2 bg-primary'>
                        <p className='text-subsecondary w-full text-start text-[14px] font-semibold'> 1234 1254 1455 </p>
                        <img className='w-[150px] h-[35px] object-cover cursor-pointer ' src={Payment} alt="" />
                    </div>

                    <div className='w-full flex items-center justify-center gap-3'>

                    <div className='w-[49%] items-start rounded flex-col flex justify-center '>
                    <span className='text-subsecondary text-[14px] '> Expire Date</span>
                    <p className='text-subsecondary border-[1px] border-subsecondary p-2 w-full text-start text-[14px] font-semibold bg-primary'> mm/yy/dd </p>
                    </div>
                    <div className='w-[49%] items-start rounded flex-col flex justify-center '>
                    <span className='text-subsecondary text-[14px] '> Security code</span>
                    <p className='text-subsecondary border-[1px] border-subsecondary p-2 w-full text-start text-[14px] font-semibold bg-primary'>CVC </p>
                    </div>
                    </div>

                    <div className='w-full items-start rounded flex-col flex justify-center '>
                    <span className='text-subsecondary text-[14px] '> Zip code</span>
                    <p className='text-subsecondary border-[1px] border-subsecondary p-2 w-full text-start text-[14px] font-semibold bg-primary'> 12457 </p>
                    </div>

                    <div className='w-full items-start rounded flex-col flex justify-center '>
                    <label className=' text-subsecondary text-[14px]' htmlFor="country"> Country</label>
                    <select className='text-subsecondary border-[1px] border-subsecondary rounded p-2 w-full text-start text-[14px] font-semibold bg-primary' name="" id="country">
                        <option value="bang"> Bangladesh</option>
                    </select>
                    </div>
                    

                </div>
                </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className='w-[80%] flex items-center justify-between  pt-6'>
            <button className='text-white border-[1px] border-subsecondary rounded-lg text-[12px] font-semibold  px-3 shadow-md hover:bg-active duration-300 py-1 '> Switch Account</button>
            <button className='text-white border-[1px] border-subsecondary rounded-lg text-[12px] font-semibold  px-3 shadow-md hover:bg-transparent bg-active duration-300 py-1 '> Play with credit card</button>
            
        </div>

      </div>



    </div>
  )
}

export default CourseCheckout