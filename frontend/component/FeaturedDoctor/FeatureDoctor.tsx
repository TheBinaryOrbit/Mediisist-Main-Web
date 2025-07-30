'use client';

import React, { useState, useEffect } from 'react';
import {
    Heart,
    Brain,
    Bone,
    Eye,
    Stethoscope,
    UserX,
    ChevronLeft,
    ChevronRight,
    Star,
    MapPin,
    Clock,
    Calendar
} from 'lucide-react';
import { MoveRight, MoveLeft } from 'lucide-react';
import doctro from '@/assets/featurdoctor.jpg';
import Image from 'next/image';

interface Doctor {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    location: string;
    duration: string;
    consultationFee: number;
    image: string;
    availability: 'Available' | 'Busy' | 'Offline';
}

const FeaturedDoctor: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(4);

    // Update items per view based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 640) { // Mobile
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) { // Tablet
                setItemsPerView(2);
            } else { // Desktop
                setItemsPerView(4);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);

        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    // Reset currentIndex when itemsPerView changes to prevent out-of-bounds
    useEffect(() => {
        const maxIndex = Math.max(0, doctors.length - itemsPerView);
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [itemsPerView]);

    const doctors: Doctor[] = [
        {
            id: 'dr-michael-brown',
            name: 'Dr. Michael Brown',
            specialty: 'Psychologist',
            rating: 5.0,
            location: 'Minneapolis, MN',
            duration: '30 Min',
            consultationFee: 650,
            image: doctro.src,
            availability: 'Available'
        },
        {
            id: 'dr-nicholas-tello',
            name: 'Dr. Nicholas Tello',
            specialty: 'Pediatrician',
            rating: 4.6,
            location: 'Ogden, IA',
            duration: '60 Min',
            consultationFee: 400,
            image: doctro.src,
            availability: 'Available'
        },
        {
            id: 'dr-harold-bryant',
            name: 'Dr. Harold Bryant',
            specialty: 'Neurologist',
            rating: 4.8,
            location: 'Winona, MS',
            duration: '30 Min',
            consultationFee: 500,
            image: doctro.src,
            availability: 'Available'
        },
        {
            id: 'dr-sandra-jones',
            name: 'Dr. Sandra Jones',
            specialty: 'Cardiologist',
            rating: 4.8,
            location: 'Beckley, WV',
            duration: '30 Min',
            consultationFee: 550,
            image: doctro.src,
            availability: 'Available'
        },
        {
            id: 'dr-robert-garcia',
            name: 'Dr. Robert Garcia',
            specialty: 'Dentist',
            rating: 4.6,
            location: 'Miami, FL',
            duration: '30 Min',
            consultationFee: 450,
            image: doctro.src,
            availability: 'Available'
        },
        {
            id: 'dr-lisa-martinez',
            name: 'Dr. Lisa Martinez',
            specialty: 'Ophthalmologist',
            rating: 4.9,
            location: 'Seattle, WA',
            duration: '35 Min',
            consultationFee: 680,
            image: doctro.src,
            availability: 'Offline'
        },
        {
            id: 'dr-david-thompson',
            name: 'Dr. David Thompson',
            specialty: 'General Medicine',
            rating: 4.5,
            location: 'Phoenix, AZ',
            duration: '25 Min',
            consultationFee: 550,
            image: doctro.src,
            availability: 'Available'
        },
        {
            id: 'dr-maria-rodriguez',
            name: 'Dr. Maria Rodriguez',
            specialty: 'Surgeon',
            rating: 4.8,
            location: 'Houston, TX',
            duration: '90 Min',
            consultationFee: 1200,
            image: doctro.src,
            availability: 'Available'
        }
    ];

    const maxIndex = Math.max(0, doctors.length - itemsPerView);

    const handlePrev = (): void => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = (): void => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    const handleBookNow = (doctor: Doctor): void => {
        console.log(`Booking appointment with ${doctor.name}`);
    };

    const getAvailabilityColor = (availability: string) => {
        switch (availability) {
            case 'Available':
                return 'text-green-500';
            case 'Busy':
                return 'text-yellow-500';
            case 'Offline':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    const getAvailabilityDot = (availability: string) => {
        switch (availability) {
            case 'Available':
                return 'bg-green-500';
            case 'Busy':
                return 'bg-yellow-500';
            case 'Offline':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const visibleDoctors = doctors.slice(currentIndex, currentIndex + itemsPerView);

    return (
        <section className='bg-slate-50 py-12'>
            <div className="w-full max-w-7xl px-4 md:px-0 mx-auto">
                {/* Header */}
                <div className="mb-8 sm:mb-12 flex justify-center flex-col items-center">
                    <div className="flex justify-center items-center h-fit">
                        <p className="flex justify-center items-center border-[1px] border-slate-300 bg-white px-3 rounded-lg text-xs gap-1 py-2 text-slate-700 font-semibold shadow-sm">
                            <Stethoscope size={12} />
                            <span className="text-xs font-semibold">Featured Doctors</span>
                        </p>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-2 font-serif tracking-wider text-[#164972] transition-all duration-1000 mb-2">
                        Our Highlighted <span className="">Doctors</span>
                    </h2>
                    <div className='h-1 w-32 sm:w-48 bg-[#164972] rounded-full mb-4'></div>
                </div>

                {/* Doctors Grid - Updated grid classes for mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {visibleDoctors.map((doctor, index) => (
                        <div
                            key={`${doctor.id}-${currentIndex + index}`}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 mx-auto w-full max-w-sm sm:max-w-none"
                        >
                            {/* Doctor Image */}
                            <div className="relative">
                                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="p-4">
                                {/* Specialty with availability */}
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium" style={{ color: index === 0 ? '#6366f1' : index === 1 ? '#ec4899' : index === 2 ? '#10b981' : '#3b82f6' }}>
                                        {doctor.specialty}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <div className={`w-2 h-2 rounded-full ${getAvailabilityDot(doctor.availability)}`}></div>
                                        <span className={`text-xs font-medium ${getAvailabilityColor(doctor.availability)}`}>
                                            {doctor.availability}
                                        </span>
                                    </div>
                                </div>

                                {/* Doctor Name */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                    {doctor.name}
                                </h3>

                                {/* Location and Duration */}
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={12} />
                                        <span>{doctor.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>•</span>
                                        <span>{doctor.duration}</span>
                                    </div>
                                </div>

                                {/* Consultation Fee and Book Button */}
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-gray-600 mb-1">Consultation Fees</p>
                                        <p className="text-xl font-bold text-orange-500">₹{doctor.consultationFee}</p>
                                    </div>
                                    <button
                                        onClick={() => handleBookNow(doctor)}
                                        disabled={doctor.availability === 'Offline'}
                                        className="w-full bg-[#1e293b] hover:bg-[#1e293b]/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                                    >
                                        <Calendar size={14} />
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="w-10 h-10 rounded-full bg-[#164972] hover:bg-[#164972]/90 flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg cursor-pointer"
                        >
                            <MoveLeft size={18} className="text-white" />
                        </button>
                        
                        {/* Mobile indicator dots */}
                        <div className="flex items-center gap-1 mx-4 sm:hidden">
                            {doctors.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        index === currentIndex ? 'bg-[#164972]' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                        
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            className="w-10 h-10 rounded-full bg-[#164972] hover:bg-[#164972]/90 flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg cursor-pointer"
                        >
                            <MoveRight size={18} className="text-white" />
                        </button>
                    </div>

                    {/* Desktop page indicator - hidden on mobile */}
                    {/* <div className="ml-6 text-sm text-gray-500 hidden sm:block">
                        {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, doctors.length)} of {doctors.length} doctors
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDoctor;