import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import CardImage from '@/assets/card_image/card1.jpg'


const SearchBook = () => {

    const [cards, setcards] = useState([])
    const productCards = [

        {
            id: 1,
            title: "Advance Machine Learning ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Laravel"
        },

        {
            id: 2,
            title: "Advance Machine Learning ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Javascript"
        },

        {
            id: 3,
            title: "Advance Machine Learning ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Enterprise IT"
        },

        {
            id: 4,
            title: "Advance Machine Learning ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Web development"
        },

        {
            id: 5,
            title: "Advance Machine Learning ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Enterprise IT"
        },

        {
            id: 6,
            title: "Advance Machine Learning ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Web development"
        },

        {
            id: 7,
            title: "Advance Machine Learning ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Javascript"
        },

        {
            id: 8,
            title: "Advance Machine Learning ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "React js"
        },

        {
            id: 9,
            title: "Mobile app development with react native",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Laravel"
        },

        {
            id: 10,
            title: "Introduction to programming",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque? Voluptatem ab ducimus alias libero quis laudantium exercitationem, corporis numquam?",
            author: "Alice Jonson",
            price: 99.99,
            enroll: 22,
            image: "https://i.ibb.co.com/P5kBft6/image1.jpg",
            category: "Javascript"

        },

    ]


    useEffect(() => {
        const cardFilter = () => {
            let allCategory = productCards.filter((item) => item.category)
            setcards(allCategory)
        }
        cardFilter()
    }, [])
    console.log(cards)


    return (
        <section className='w-full flex items-center flex-col justify-center gap-3 bg-primary '>



            <div className='w-full flex items-center justify-center flex-col px-[20px] md:px-[30px] py-3 '>

                <div className='w-full flex flex-col-reverse md:flex-row items-center justify-center' >
                    <div className=' w-full md:w-[50%] pl-4 md:pl-6 lg:pl-10 h-[320px] sm:h-[410px] flex items-start justify-center flex-col gap-5 bg-secondary rounded-full-lg rounded-full-lg '>
                        <h3 className='text-2xl font-bold text-white'>Courses</h3>
                        <p className='text-sm text-subsecondary w-[70%]'> This is the list of the courses you have enroulled in, Courses when you need them and want them</p>
                        <input className=' shadow-md  text-secondary text-lg font-medium rounded-full py-2 px-4  border-none outline-[1px]  accent-black' type="search" name="search" id="search" placeholder='Search courses' />
                    </div>

                    <div className=' w-full md:w-[50%] h-[320px] sm:h-[410px] '>
                        <div className='w-[100%] h-full rounded-full-lg rounded-full-lg '>
                            <img className=' w-full h-full object-cover rounded-full-lg rounded-full-lg ' src="https://i.ibb.co.com/k5jH6Zg/office.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center pt-10'>
                    <div className='w-full flex items-start justify-center flex-col gap-3'>
                        <h3 className='text-2xl font-bold text-white '> Featured Courses </h3>
                        <p className='text-sm text-subsecondary' > From beginner to advanced, in all industries, we have the right courses just for you and preparing your entire journey for learning and making the most </p>
                    </div>
                </div>

                <div className='w-full flex items-start justify-start gap-3 py-6  overflow-auto md:overflow-x-hidden '>
                    <Link className='px-4 py-1 bg-[#25262f] hover:bg-active duration-300   shadow-lg text-white rounded-full ' to={"/"}> Web development </Link>
                    <Link className='px-4 py-1 bg-[#25262f] hover:bg-active duration-300   shadow-lg text-white rounded-full ' to={"/"}> Enterprise IT  </Link>
                    <Link className='px-4 py-1 bg-[#25262f] hover:bg-active duration-300   shadow-lg text-white rounded-full ' to={"/"}> React Next JS </Link>
                    <Link className='px-4 py-1 bg-[#25262f] hover:bg-active duration-300   shadow-lg text-white rounded-full ' to={"/"}> Javascript  </Link>
                    <Link className='px-4 py-1 bg-[#25262f] hover:bg-active duration-300   shadow-lg text-white rounded-full ' to={"/"}> Laravel </Link>
                </div>

                <div className='w-full flex flex-wrap items-center justify-center gap-4 py-6'>
                    <Link to={"/availableCourse"} className=' w-full hover:border-[1px] border-active rounded duration-200  sm:w-[48%] md:w-[31%] lg:w-[24%] flex items-center justify-center flex-col gap-0  '>
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
                    </Link>

                    <Link to={"/availableCourse"} className=' w-full hover:border-[1px] border-active rounded duration-200  sm:w-[48%] md:w-[31%] lg:w-[24%] flex items-center justify-center flex-col gap-0  '>
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
                    </Link>

                    <Link to={"/availableCourse"} className=' w-full hover:border-[1px] border-active rounded duration-200  sm:w-[48%] md:w-[31%] lg:w-[24%] flex items-center justify-center flex-col gap-0  '>
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
                    </Link>

                    <Link to={"/availableCourse"} className=' w-full hover:border-[1px] border-active rounded duration-200  sm:w-[48%] md:w-[31%] lg:w-[24%] flex items-center justify-center flex-col gap-0  '>
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
                    </Link>

                    <Link to={"/availableCourse"} className=' w-full hover:border-[1px] border-active rounded duration-200  sm:w-[48%] md:w-[31%] lg:w-[24%] flex items-center justify-center flex-col gap-0  '>
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
                    </Link>

                    <Link to={"/availableCourse"} className=' w-full hover:border-[1px] border-active rounded duration-200  sm:w-[48%] md:w-[31%] lg:w-[24%] flex items-center justify-center flex-col gap-0  '>
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
                    </Link>

                    <Link to={"/availableCourse"} className=' w-full hover:border-[1px] border-active rounded duration-200  sm:w-[48%] md:w-[31%] lg:w-[24%] flex items-center justify-center flex-col gap-0  '>
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
                    </Link>

                    <Link to={"/availableCourse"} className=' w-full hover:border-[1px] border-active rounded duration-200  sm:w-[48%] md:w-[31%] lg:w-[24%] flex items-center justify-center flex-col gap-0  '>
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
                    </Link>




                </div>

            </div>







        </section>
    )
}

export default SearchBook