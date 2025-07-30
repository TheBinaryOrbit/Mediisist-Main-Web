"use client"
import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaMapMarkerAlt, FaPhone, FaStethoscope, FaAmbulance, FaHospital, FaClock, FaCheckCircle } from 'react-icons/fa'
import { MdHealthAndSafety, MdLocalPharmacy } from 'react-icons/md'
import biharMapUrl from '@/assets/bihar.png' // Assuming you have a local SVG file for the map
// Using a placeholder for the Bihar map image
// const biharMapUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-family='Arial' font-size='16' fill='%23374151'%3EBihar Map%3C/text%3E%3C/svg%3E"

interface ServiceType {
    icon: React.ReactNode;
    name: string;
    description: string;
    available: boolean;
}

interface LocationData {
    id: number;
    city: string;
    state: string;
    status: 'active' | 'coming-soon' | 'planned';
    services: ServiceType[];
    stats: {
        patients: string;
        doctors: string;
        rating: string;
    };
}

const OurPresence = () => {
    const [activeLocation, setActiveLocation] = useState<number>(1)
    const [isVisible, setIsVisible] = useState(false)
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setCurrentServiceIndex(prev => (prev + 1) % services.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const locations: LocationData[] = [
        {
            id: 1,
            city: 'Patna',
            state: 'Bihar',
            status: 'active',
            stats: {
                patients: '10,000+',
                doctors: '150+',
                rating: '4.8'
            },
            services: [
                {
                    icon: <FaStethoscope className="text-[#199dd1] text-lg sm:text-xl" />,
                    name: 'Teleconsultation',
                    description: '24/7 online doctor consultations',
                    available: true
                },
                {
                    icon: <FaAmbulance className="text-[#199dd1] text-lg sm:text-xl" />,
                    name: 'Emergency Services',
                    description: 'Immediate medical response',
                    available: true
                },
            ]
        },
        {
            id: 2,
            city: 'Muzaffarpur',
            state: 'Bihar',
            status: 'coming-soon',
            stats: {
                patients: 'Coming Soon',
                doctors: '50+',
                rating: 'N/A'
            },
            services: [
                {
                    icon: <FaStethoscope className="text-gray-400 text-lg sm:text-xl" />,
                    name: 'Teleconsultation',
                    description: 'Available from Q4 2025',
                    available: false
                },
                {
                    icon: <MdLocalPharmacy className="text-gray-400 text-lg sm:text-xl" />,
                    name: 'Medicine Delivery',
                    description: 'Available from Q4 2025',
                    available: false
                }
            ]
        },
    ]

    const services: ServiceType[] = [
        {
            icon: <FaStethoscope className="text-white text-xl sm:text-2xl" />,
            name: 'Teleconsultation',
            description: '24/7 Expert Care',
            available: true
        },
        {
            icon: <FaAmbulance className="text-white text-xl sm:text-2xl" />,
            name: 'Emergency',
            description: 'Instant Response',
            available: true
        },
    ]

    const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0]

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800 border-green-200'
            case 'coming-soon': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
            case 'planned': return 'bg-gray-100 text-gray-600 border-gray-200'
            default: return 'bg-gray-100 text-gray-600 border-gray-200'
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case 'active': return 'Now Available'
            case 'coming-soon': return 'Coming Soon'
            case 'planned': return 'Planned'
            default: return 'Planned'
        }
    }

    return (
        <section className="bg-[#164972] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border-2 border-white rounded-full"></div>
                <div className="absolute top-20 right-8 sm:top-32 sm:right-20 w-12 h-12 sm:w-20 sm:h-20 border border-white rounded-full"></div>
                <div className="absolute bottom-10 left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-white rounded-full"></div>
            </div>

            <section className='bg-white py-12 sm:py-16 lg:py-20 md:rounded-br-[10%] relative z-10'>
                <div className="mb-4 sm:mb-6 text-center flex justify-center flex-col items-center px-4">
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-4xl text-center font-bold py-2 font-serif tracking-wider text-[#164972] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Our<span className=""> Presence</span>
                    </h2>
                    <div className='h-1 w-32 sm:w-48 mx-auto bg-[#164972] rounded-full mb-4'></div>
                    <p className={`text-sm sm:text-base lg:text-lg font-normal  text-gray-500 max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-4 mb-8 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Bringing trusted healthcare services to your doorstep across Bihar. Experience seamless medical care with instant support when it matters most.
                    </p>
                </div>

                {/* Stats Section */}
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                        <div className="text-center bg-gradient-to-br from-[#199dd1]/10 to-[#164972]/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-lg sm:text-2xl font-bold text-[#164972] mb-1 sm:mb-2">{currentLocation.stats.patients}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 font-serif">Patients Served</p>
                        </div>
                        <div className="text-center bg-gradient-to-br from-[#199dd1]/10 to-[#164972]/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-lg sm:text-2xl font-bold text-[#164972] mb-1 sm:mb-2">{currentLocation.stats.doctors}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 font-serif">Expert Doctors</p>
                        </div>
                        <div className="text-center bg-gradient-to-br from-[#199dd1]/10 to-[#164972]/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-lg sm:text-2xl font-bold text-[#164972] mb-1 sm:mb-2">{currentLocation.stats.rating}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 font-serif">Average Rating</p>
                        </div>
                        <div className="text-center bg-gradient-to-br from-[#199dd1]/10 to-[#164972]/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-lg sm:text-2xl font-bold text-[#164972] mb-1 sm:mb-2">24/7</h3>
                            <p className="text-xs sm:text-sm text-gray-600 font-serif">Support Available</p>
                        </div>
                    </div>
                </div>

                <div className='max-w-7xl mx-auto flex lg:flex-row flex-col-reverse justify-between items-center h-fit'>
                    <div className='lg:w-1/2 px-4 sm:px-6'>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black capitalize text-left font-serif tracking-wider leading-tight">
                                Serving {currentLocation.city}<span className="text-[#164972]">, {currentLocation.state}</span>
                            </h2>
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(currentLocation.status)} self-start sm:self-auto`}>
                                {getStatusText(currentLocation.status)}
                            </span>
                        </div>
                        
                        <p className='text-sm sm:text-base lg:text-lg text-justify text-gray-500 mb-6 sm:mb-8 leading-relaxed'>
                            Mediisist is proud to serve the vibrant city of {currentLocation.city}, offering fast, reliable, and affordable healthcare services at your fingertips. Whether you need emergency support, at-home checkups, or instant bookings — we're here for you.
                        </p>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                            {currentLocation.services.map((service, index) => (
                                <div key={index} className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${service.available ? 'border-[#199dd1]/20 bg-[#199dd1]/5 hover:border-[#199dd1]/40' : 'border-gray-200 bg-gray-50'}`}>
                                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                        {service.icon}
                                        <h4 className={`font-semibold text-sm sm:text-base ${service.available ? 'text-[#164972]' : 'text-gray-400'} flex-1`}>
                                            {service.name}
                                        </h4>
                                        {service.available && <FaCheckCircle className="text-green-500 text-xs sm:text-sm" />}
                                    </div>
                                    <p className={`text-xs sm:text-sm ${service.available ? 'text-gray-600' : 'text-gray-400'} leading-relaxed`}>
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Location Selector */}
                        <div className='flex flex-col mb-8 sm:mb-12 justify-start items-start'>
                            <h3 className="text-base sm:text-lg font-bold text-[#164972] mb-3 sm:mb-4 font-serif">Our Locations:</h3>
                            {locations.map((location, index) => (
                                <div 
                                    key={location.id}
                                    className={`w-full py-2 sm:py-3 mb-2 border-b-2 cursor-pointer transition-all duration-300 touch-manipulation ${activeLocation === location.id ? 'border-[#199dd1] bg-[#199dd1]/5' : 'border-gray-200 hover:border-[#199dd1]/50 active:bg-[#199dd1]/5'}`}
                                    onClick={() => setActiveLocation(location.id)}
                                >
                                    <div className="flex items-center justify-between px-2 sm:px-4">
                                        <h1 className={`text-sm sm:text-base lg:text-lg font-bold font-serif tracking-wider transition-all duration-300 ${activeLocation === location.id ? 'text-[#199dd1] scale-105' : 'text-gray-600 hover:text-[#199dd1]'}`}>
                                            {index + 1}. {location.city}, {location.state}
                                        </h1>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(location.status)}`}>
                                            {getStatusText(location.status)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <button className="w-full sm:w-auto py-3 px-6 group rounded-lg sm:rounded-xl font-serif bg-[#164972] text-white cursor-pointer text-sm sm:text-base leading-4 whitespace-nowrap transition-all duration-300 font-bold flex justify-center items-center gap-2 hover:scale-105 hover:shadow-lg active:scale-95 touch-manipulation">
                                 <FaPhone className='text-xs rotate-90' /> Book Appointment 
                            </button>
                        </div>
                    </div>
                    
                    <div className='lg:w-1/2 h-fit px-4 sm:px-6 relative mb-8 lg:mb-0'>
                        <div className='w-full h-64 sm:h-80 lg:h-full rounded-xl sm:rounded-2xl group overflow-hidden relative'>
                            <img 
                                src={biharMapUrl.src} 
                                alt="Bihar Map showing Mediisist presence" 
                                className='w-full h-full object-cover group-hover:scale-105 group-hover:-rotate-1 duration-700 rounded-xl sm:rounded-2xl' 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default OurPresence