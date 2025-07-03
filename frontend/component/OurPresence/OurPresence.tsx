import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import india from '@/assets/bihar.png'

const OurPresence = () => {

    return (
        <section className="bg-[#164972]">
            <section className='bg-white py-20 md:rounded-br-[10%]'>
                <div className="mb-0 text-center flex justify-center flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold py-5 font-lora tracking-wider text-slate-800" data-aos="fade-up">
                        Our<span className="text-[#199dd1]"> Presence</span>
                    </h2>
                    <p className="text-lg sm:text-md font-normal font-lora text-gray-500 max-w-md md:max-w-2xl mx-auto px-5 mb-16" data-aos="fade-up">
                        Book your medical services directly from your phone and get instant support when it matters most
                    </p>
                </div>
                <div className='max-w-7xl mx-auto flex md:flex-row flex-col-reverse justify-between items-center h-fit '>
                    <div className='md:w-1/2 p-5'>
                        <h2 className="md:text-3xl  text-2xl font-bold text-black  capitalize  text-left mb-1 md:mb-6 font-lora tracking-wider" data-aos="fade-up">
                            Serving Patna<span className="text-logocolor ">,Bihar</span>
                        </h2>
                        <p className='text-justify font-lora text-lg sm:text-md text-gray-500 mb-6' data-aos="fade-up">Mediists is proud to serve the vibrant city of Patna, offering fast, reliable, and affordable healthcare services at your fingertips. Whether you need emergency support, at-home checkups, or instant bookings — we’re here for you.</p>
                        <div className='flex flex-col mb-12 justify-start items-start  cursor-pointer'>
                            <div className='pr-5 py-2 border-b-2 border-[#199dd1]' data-aos="fade-up">
                                <h1 className='text-xl font-bold font-lora tracking-wider hover:scale-105  duration-300 text-[#199dd1]'>1. Patna ,Bihar</h1>
                            </div>
                            {/* <div className='pr-5 py-2 border-b-2 border-[#199dd1] cursor-pointer' data-aos="fade-up" data-aos-delay="200">
                            <h1 className='text-xl font-bold font-lora tracking-wider hover:scale-105 duration-300 text-[#199dd1]'>2. Bihar Patna</h1>
                        </div>
                        <div className='pr-5 py-2 border-b-2 border-[#199dd1] cursor-pointer' data-aos="fade-up" data-aos-delay="400">
                            <h1 className='text-xl font-bold font-lora tracking-wider hover:scale-105 duration-300 text-[#199dd1]'>3. Bihar Patna</h1>
                        </div> */}
                        </div>
                        <button
                            className="py-3 px-6 max-sm:w-fit group rounded-xl font-lora bg-logocolor text-white bg-[#164972] cursor-pointer text-sm leading-4 whitespace-nowrap transition-all duration-300 font-bold flex justify-between items-center gap-2 hover:scale-105"
                        >
                            Explore More<FaArrowRight className='text-xs translate-y-[1px] group-hover:translate-x-1 duration-300' />
                        </button>
                    </div>
                    <div className='md:w-1/2 h-fit px-5'>
                        <div className='w-full h-full rounded-2xl group overflow-hidden sm:mb-0 mb-10' >
                            <img src={india.src} alt="" className='group-hover:scale-105 group-hover:-rotate-2 duration-700' />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default OurPresence
