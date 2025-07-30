"use client"
import { LocateIcon, Search, ChevronRight, Phone, Heart, Shield, Clock, User, AlertCircle, Award, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { axiosClient } from "@/lib/axiosClient";
import ambulance from '@/assets/ambulance.png'

const MediisistHero = () => {
    const [name, setName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!name || !contactNo) {
            toast.error("Please fill in both name and contact number.");
            return;
        }

        if (contactNo.length != 10) {
            toast.error("Please Enter A Valid Number");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await axiosClient.post('/ride/addride', {
                name: name,
                phoneNumber: contactNo
            })

            if (response.status == 201 || response.status == 200) {
                toast.success("Submited Sucessfully");
                setSessionId(response.data.ride.sessionKey);
                setIsFormSubmitted(true);
            }
        } catch (error) {
            console.log(error);
            toast.error("Please Try Again");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section className="w-full mx-auto h-full pb-10 lg:pb-20 bg-white p-3 lg:p-5 relative">
            <div className="relative overflow-hidden rounded-2xl sm:bg-blue-100 flex flex-col lg:flex-row items-center justify-between h-full md:px-10 lg:py-16">

                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '4s' }}></div>

                <div className="flex flex-col items-center sm:items-start justify-center w-full lg:w-1/2 h-full p-4 lg:p-10 gap-2 bg-blue-100 rounded-2xl">
                    <div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-4 lg:mb-6'>
                        <Award className="w-4 h-4 text-[#164972]" />
                        <span className="text-sm font-medium text-[#164972]">Trusted by 50,000+ patients</span>
                    </div>
                    <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 text-center sm:text-left leading-tight lg:leading-tight">
                        Discover Health : Find Your{' '}
                        <span className='bg-gradient-to-r from-[#164972] via-blue-600 to-blue-800 bg-clip-text text-transparent relative'>
                            Trusted Doctors
                            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r bg-[#164972]  rounded-full opacity-60"></div>
                        </span>{' '}
                        Today
                    </h1>

                    <p className="text-md lg:text-2xl text-gray-600 mb-4 lg:mb-6 text-center sm:text-left"> Find Your Trusted Doctors Today</p>
                    <div className="flex gap-6 mb-4 lg:mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                            </div>
                            <div>
                                <div className="text-sm sm:text-md font-bold text-gray-800">100+</div>
                                <div className="text-xs sm:text-sm text-gray-600">Doctors</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Star className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-sm sm:text-md font-bold text-gray-800">4.9/5</div>
                                <div className="text-xs sm:text-sm text-gray-600">Rating</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" />
                            </div>
                            <div>
                                <div className="text-sm sm:text-md font-bold text-gray-800">24/7</div>
                                <div className="text-xs sm:text-sm text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-4 lg:mb-6 flex flex-col gap-2 lg:flex-row rounded-2xl overflow-hidden bg-white/80 shadow-lg px-3 py-2">
                        <div className='w-full flex items-center px-2 py-1'>
                            <Search className="w-4 lg:w-5 h-4 lg:h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search for doctors"
                                className="w-full focus:outline-none focus:ring-0 outline-0 px-2 lg:px-4 border-r-0  sm:border-r sm:border-b-0 border-b py-3 sm:py-1  border-gray-300 text-sm lg:text-base"
                            />
                        </div>

                        <div className='w-full flex items-center px-2 py-1'>
                            <LocateIcon className="w-4 lg:w-5 h-4 lg:h-5 text-gray-500" />
                            <select className="w-full px-2 lg:px-4 focus:outline-none focus:ring-0 outline-0 text-sm lg:text-base sm:border-b-0 border-b py-3 sm:py-1 border-gray-300">
                                <option value="city1">Patna</option>
                                <option value="city2">Delhi</option>
                                <option value="city3">Mumbai</option>
                            </select>
                        </div>
                        <button className="px-4 lg:px-6 py-2 transition duration-300 bg-[#164972] text-white font-bold hover:bg-tertiary cursor-pointer rounded-3xl text-sm lg:text-base my-3 sm:my-0">
                            Search
                        </button>
                    </div>
                </div>


                <div className="flex items-end justify-center md:justify-end w-full lg:w-1/2 h-full p-5 lg:p-10 md:pr-28 relative">
                    {/* <img src={ambulance.src} alt="" className="absolute top-[50%] left-0 translate-y-[-20%] md:flex hidden translate-x-[-10%] z-0 scale-90" /> */}
                    <div className="order-1 lg:order-2">
                        <div className="w-full lg:w-full flex justify-center lg:justify-end items-end  lg:px-5 relative ">
                            <div className="bg-transparent sm:bg-white sm:rounded-3xl sm:shadow-xl p-2 pt-10  lg:p-8 max-w-sm lg:ml-0 z-40  w-full lg:w-auto min-h-auto ">
                                {isFormSubmitted ? (
                                    <div className="text-center py-10 lg:py-12 flex flex-col justify-center h-full">
                                        <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(1, 144, 80, 0.1)' }}>
                                            <svg className="w-6 lg:w-8 h-6 lg:h-8" style={{ color: '#019050' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg lg:text-xl font-bold text-gray-800">Help is on the way!</h3>
                                        <p className="text-gray-600 mt-2 mb-4 text-sm lg:text-base">Your emergency request has been received. Our team will contact you immediately.</p>
                                        <Link href={`/getlocation/${sessionId}`}>
                                            <button className="w-1/2 mx-auto py-2 transition duration-300 bg-[#164972] text-white font-bold hover:bg-tertiary cursor-pointer rounded-3xl text-sm lg:text-base my-3 sm:my-0">
                                                Grant Location
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <div className="w-full text-white rounded-xl sm:p-3 lg:p-4 mb-6 lg:mb-8 flex items-center sm:bg-[#164972]">
                                                <AlertCircle className="mr-3 flex-shrink-0 sm:text-white text-black sm:block hidden" size={20} />
                                                <div>
                                                    <h3 className="sm:text-white text-[#164972] font-bold text-2xl font-heading sm:text-sm lg:text-base sm:mb-0 mb-2">Request an Ambulance</h3>
                                                    <p className="sm:text-white text-[#164972] font-semibold  text-xs lg:text-sm">Get a callback in 5 seconds</p>
                                                </div>
                                            </div>

                                            <div className="space-y-5 lg:space-y-6 mb-6">
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3.5" style={{ color: '#199dd1' }} size={20} />
                                                    <input
                                                        type="text"
                                                        placeholder="Your Name*"
                                                        className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3.5 bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm lg:text-base"
                                                        style={{ '--tw-ring-color': '#199dd1' } as React.CSSProperties}
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>

                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-3.5" style={{ color: '#199dd1' }} size={20} />
                                                    <input
                                                        type="tel"
                                                        placeholder="Contact Number*"
                                                        className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3.5 bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm lg:text-base"
                                                        style={{ '--tw-ring-color': '#199dd1' } as React.CSSProperties}
                                                        value={contactNo}
                                                        onChange={(e) => setContactNo(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}
                                                className="w-full text-white font-bold py-4 lg:py-5 px-4 lg:px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer bg-[#164972] mb-4"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                        <span className="text-sm lg:text-base">BOOKING...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="mr-2 text-sm lg:text-base">BOOK AMBULANCE NOW</span>
                                                        <ChevronRight size={20} />
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-gray-500 text-center text-xs lg:text-sm">
                                                *Our emergency team will contact you immediately
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediisistHero;