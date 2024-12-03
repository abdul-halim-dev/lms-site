import React from 'react'
 
import CardImage from '@/assets/card_image/card1.jpg'


const AvailableCourse = () => {
    return (
        <div className='w-full bg-primary flex-col  flex items-center gap-4 justify-center px-[25px] py-[50px] '>

            <div className='w-full flex items-start justify-center flex-col gap-0'>
                <h2 className='text-white text-[18px] font-semibold '> List of availabe courses</h2>
                <p className='text-subsecondary text-[14px] '>six courses available</p>
            </div>

            <div className='w-full flex items-start justify-center gap-4'>
                <div className='w-[64%] flex items-center gap-4 justify-center flex-wrap'>


                    <div className=' w-[48%] hover:border-[1px] border-active rounded duration-200 flex items-center justify-center flex-col gap-0  '>
                        <div className='w-full h-[200px] '>
                            <img className='w-full h-full object-cover rounded-tl rounded-tr' src={CardImage} alt="" />
                        </div>
                        <div className='w-full shadow bg-secondary flex items-center justify-center flex-col rounded-bl rounded-br gap-3 p-3'>
                            <h3 className='text-[14px] text-white font-semibold '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quas.</h3>

                            <div className='w-full flex items-center justify-between '>
                                <div className='flex flex-col  '>
                                    <span className='text-[12px] text-semibold text-slate-300'>By Alice Jonson </span>
                                    <span className='text-[14px] text-semibold text-active'> $99.99</span>
                                </div>
                                <span className='text-[12px] text-semibold text-slate-300'> 2 Enrolled </span>
                            </div>
                        </div>
                    </div>

                    <div className=' w-[48%] hover:border-[1px] border-active rounded duration-200 flex items-center justify-center flex-col gap-0  '>
                        <div className='w-full h-[200px] '>
                            <img className='w-full h-full object-cover rounded-tl rounded-tr' src={CardImage} alt="" />
                        </div>
                        <div className='w-full shadow bg-secondary flex items-center justify-center flex-col rounded-bl rounded-br gap-3 p-3'>
                            <h3 className='text-[14px] text-white font-semibold '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quas.</h3>

                            <div className='w-full flex items-center justify-between '>
                                <div className='flex flex-col  '>
                                    <span className='text-[12px] text-semibold text-slate-300'>By Alice Jonson </span>
                                    <span className='text-[14px] text-semibold text-active'> $99.99</span>
                                </div>
                                <span className='text-[12px] text-semibold text-slate-300'> 2 Enrolled </span>
                            </div>
                        </div>
                    </div>

                    <div className=' w-[48%] hover:border-[1px] border-active rounded duration-200 flex items-center justify-center flex-col gap-0  '>
                        <div className='w-full h-[200px] '>
                            <img className='w-full h-full object-cover rounded-tl rounded-tr' src={CardImage} alt="" />
                        </div>
                        <div className='w-full shadow bg-secondary flex items-center justify-center flex-col rounded-bl rounded-br gap-3 p-3'>
                            <h3 className='text-[14px] text-white font-semibold '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quas.</h3>

                            <div className='w-full flex items-center justify-between '>
                                <div className='flex flex-col  '>
                                    <span className='text-[12px] text-semibold text-slate-300'>By Alice Jonson </span>
                                    <span className='text-[14px] text-semibold text-active'> $99.99</span>
                                </div>
                                <span className='text-[12px] text-semibold text-slate-300'> 2 Enrolled </span>
                            </div>
                        </div>
                    </div>

                    <div className=' w-[48%] hover:border-[1px] border-active rounded duration-200 flex items-center justify-center flex-col gap-0  '>
                        <div className='w-full h-[200px] '>
                            <img className='w-full h-full object-cover rounded-tl rounded-tr' src={CardImage} alt="" />
                        </div>
                        <div className='w-full shadow bg-secondary flex items-center justify-center flex-col rounded-bl rounded-br gap-3 p-3'>
                            <h3 className='text-[14px] text-white font-semibold '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quas.</h3>

                            <div className='w-full flex items-center justify-between '>
                                <div className='flex flex-col  '>
                                    <span className='text-[12px] text-semibold text-slate-300'>By Alice Jonson </span>
                                    <span className='text-[14px] text-semibold text-active'> $99.99</span>
                                </div>
                                <span className='text-[12px] text-semibold text-slate-300'> 2 Enrolled </span>
                            </div>
                        </div>
                    </div>

                    <div className=' w-[48%] hover:border-[1px] border-active rounded duration-200 flex items-center justify-center flex-col gap-0  '>
                        <div className='w-full h-[200px] '>
                            <img className='w-full h-full object-cover rounded-tl rounded-tr' src={CardImage} alt="" />
                        </div>
                        <div className='w-full shadow bg-secondary flex items-center justify-center flex-col rounded-bl rounded-br gap-3 p-3'>
                            <h3 className='text-[14px] text-white font-semibold '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quas.</h3>

                            <div className='w-full flex items-center justify-between '>
                                <div className='flex flex-col  '>
                                    <span className='text-[12px] text-semibold text-slate-300'>By Alice Jonson </span>
                                    <span className='text-[14px] text-semibold text-active'> $99.99</span>
                                </div>
                                <span className='text-[12px] text-semibold text-slate-300'> 2 Enrolled </span>
                            </div>
                        </div>
                    </div>

                    <div className=' w-[48%] hover:border-[1px] border-active rounded duration-200 flex items-center justify-center flex-col gap-0  '>
                        <div className='w-full h-[200px] '>
                            <img className='w-full h-full object-cover rounded-tl rounded-tr' src={CardImage} alt="" />
                        </div>
                        <div className='w-full shadow bg-secondary flex items-center justify-center flex-col rounded-bl rounded-br gap-3 p-3'>
                            <h3 className='text-[14px] text-white font-semibold '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quas.</h3>

                            <div className='w-full flex items-center justify-between '>
                                <div className='flex flex-col  '>
                                    <span className='text-[12px] text-semibold text-slate-300'>By Alice Jonson </span>
                                    <span className='text-[14px] text-semibold text-active'> $99.99</span>
                                </div>
                                <span className='text-[12px] text-semibold text-slate-300'> 2 Enrolled </span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className='w-[36%] flex items-center justify-center border-[1px] border-active rounded p-4 '>

                    <div className='w-full flex items-start justify-center flex-col gap-3'>
                        <h2 className='text-white text-xl font-semibold'>Advance Machine Learning</h2>
                        <p className='text-subsecondary '>By Alice jonson | <span>2 </span> enrolled</p>
                        <p className='text-subsecondary '>Dive deep into machine learning and technologies</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AvailableCourse