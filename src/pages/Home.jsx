import React from 'react'
import { Link } from 'react-router-dom'
import CardImage from '@/assets/card_image/card1.jpg'
import { FaChevronDown, FaGithub, FaGoogle } from 'react-icons/fa'
import { SiClerk } from 'react-icons/si'
import { IoMdArrowDropright } from 'react-icons/io'

const Home = () => {
  return (
    <div className='w-full py-[60px] bg-primary flex items-center justify-center flex-col gap-10 px-[30px]  '>

      <div className='w-full flex items-end justify-end '>
        <div className='w-[100%] flex items-center justify-between '>
          <div className='w-[33%]  floting_line '  >
            <div className='flex items-center justify-center flex-col'>
              <span className=' flex items-center bg-active justify-center w-[26px] h-[26px] rounded-3xl border-[1px] border-subsecondary text-[14px] text-white'> 1 </span>
              <span className='text-[14px] text-subsecondary   '> Details </span>
            </div>
          </div>

          <div className='w-[33%]  floting_line '  >
            <div className='flex items-center justify-center flex-col'>
              <span className=' flex items-center justify-center w-[26px] h-[26px] rounded-3xl border-[1px] border-subsecondary text-[14px] text-white'> 2 </span>
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

      <div className='w-[90%] flex items-center justify-center'>
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

              <div className='w-full rounded-md bg-secondary flex items-center justify-center shadow-sm flex-col gap-4 px-12 py-6'>
                <div className='w-full flex items-center justify-center flex-col gap-2'>
                  <h3 className='text-2xl font-bold text-white '> Guest Checkout </h3>
                  <p className='text-[12px] font-semibold text-subsecondary text-center '> Enter Email to receive course access details and order confirmation. You can create an account after purchase </p>
                </div>

                <div className='w-full flex items-start justify-center pb-2 flex-col gap-1' >
                <label className='text-white text-[14px] font-semibold ' htmlFor="email"> Email </label>
                <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium' type="email" name="email" id="email" />
            </div>
            <button type='submit' className='w-full bg-active hover:bg-white hover:text-active duration-200 transition-all py-1 flex items-center justify-center gap-1 rounded-lg text-[16px] font-semibold text-white '> Continue guest <IoMdArrowDropright/> </button>



              </div>
              <div className='w-full flex items-center justify-between '>
                <span className='w-[45%] bg-subsecondary h-[1px] '></span>
                <span className='text-white text-[14px] sm:text-lg'> or </span>
                <span className='w-[45%] bg-subsecondary h-[1px] '></span>

              </div>

              <div className=' w-full   flex items-center justify-center flex-col gap-6  bg-secondary rounded-md shadow-md px-12 py-6 '>

                <div className='w-full flex items-center justify-center flex-col gap-2'>
                  <h3 className='text-white text-lg font-semibold   '> Create your account </h3>
                  <p className=' text-subsecondary text-sm font-semibold '>Welcome! Please Fill in the Details to get started </p>
                </div>
                <div className=' w-full flex items-center justify-center gap-2'>

                  <a className='w-[48%]  border-[1px] flex items-center justify-center gap-4 py-1 text-subsecondary font-semibold duration-200 transition-all hover:bg-primary hover:box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05) rounded-xl border-subsecondary' href="#">
                    <span className='  rounded-full text-[14px]  '> <FaGithub /> </span> Github
                  </a>

                  <a className='w-[48%]  border-[1px] flex items-center justify-center gap-4 py-1 text-subsecondary font-semibold duration-200 transition-all hover:bg-primary hover:box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05) rounded-xl border-subsecondary' href="#">
                    <span className='  rounded-full text-[14px] '> <FaGoogle /> </span> Github
                  </a>
                </div>

                <div className='w-full flex items-center justify-between '>
                  <span className='w-[45%] bg-subsecondary h-[1px] '></span>
                  <span className='text-white text-[14px] sm:text-lg'> or </span>
                  <span className='w-[45%] bg-subsecondary h-[1px] '></span>

                </div>

                <form className='w-full flex items-center justify-center flex-col gap-4 sm:gap-6'  >
                  <div className='w-full flex items-center justify-center gap-2  '>
                    <div className='w-[50%] flex items-start justify-center flex-col gap-1'>
                      <label className='text-white text-[14px] font-semibold ' htmlFor="firstname">First Name</label>
                      <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium' type="text" name="firstname" id="firstname" />
                    </div>

                    <div className='w-[50%]  flex items-start justify-center flex-col gap-1'>
                      <label className='text-white text-[14px] font-semibold ' htmlFor="lastname"> Last Name </label>
                      <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium' type="text" name="lastname" id="lastname" />
                    </div>
                  </div>

                  <div className='w-full flex items-start justify-center flex-col gap-1' >
                    <label className='text-white text-[14px] font-semibold ' htmlFor="email"> Email Address </label>
                    <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium ' type="email" name="email" id="email" />
                  </div>

                  <div className='w-full flex items-start justify-center flex-col gap-1' >
                    <label className='text-white text-[14px] font-semibold ' htmlFor="password"> Password </label>
                    <input className='w-full bg-primary py-2 pl-2 outline-1 focus:shadow-md accent-black text-white border-0 rounded-xl text-[16px] font-medium' type="password" name="password" id="password" />
                  </div>


                  <button type='submit' className='w-full bg-active hover:bg-white hover:text-active duration-200 transition-all py-1 flex items-center justify-center gap-1 rounded-lg text-[16px] font-semibold text-white '> Continue  <IoMdArrowDropright /> </button>

                </form>

                <div className='w-full flex items-center justify-center gap-1 border-b-[1px] border-subsecondary pb-[20px] '>
                  <span className='text-subsecondary text-[14px] font-semibold'> Already have an account ?</span>
                  <Link className='text-active text-[14px] font-semibold ' to="/login">  Sign in </Link>
                </div>

                <div className='w-full flex items-center justify-center gap-1 flex-col'>
                  <Link className='flex items-center justify-center text-[14px] font-semibold text-subsecondary' to={"/"}> Secured by  &nbsp; <SiClerk />clerk  </Link>
                  <Link className='text-[#f06916] text-[16px] font-semibold  ' to={"/"}> Development Mode </Link>

                </div>
              </div>



            </div>
          </div>


        </div>



      </div>



    </div>
  )
}

export default Home