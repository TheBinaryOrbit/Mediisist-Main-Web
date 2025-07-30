'use client';

import React, { useState } from 'react';
import {
    Heart,
    Brain,
    Bone,
    Eye,
    Stethoscope,
    UserX,
    ChevronLeft,
    ChevronRight,
    Plus,
    Activity,
    Scissors
} from 'lucide-react';

interface Specialty {
    id: string;
    name: string;
    icon: React.ReactNode;
    bgColor: string;
    iconColor: string;
}

const MedicalSpecialtiesCard: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const specialties: Specialty[] = [
        {
            id: 'cardiology',
            name: 'Cardiology',
            icon: <Heart size={28} strokeWidth={1.5} />,
            bgColor: 'bg-slate-50',
            iconColor: 'text-[#164972]'
        },
        {
            id: 'neurology',
            name: 'Neurology',
            icon: <Brain size={28} strokeWidth={1.5} />,
            bgColor: 'bg-blue-50',
            iconColor: 'text-[#164972]'
        },
        {
            id: 'urology',
            name: 'Urology',
            icon: <UserX size={28} strokeWidth={1.5} />,
            bgColor: 'bg-blue-50',
            iconColor: 'text-[#164972]'
        },
        {
            id: 'orthopedic',
            name: 'Orthopedic',
            icon: <Bone size={28} strokeWidth={1.5} />,
            bgColor: 'bg-blue-50',
            iconColor: 'text-[#164972]'
        },
        {
            id: 'dentist',
            name: 'Dentist',
            icon: <Stethoscope size={28} strokeWidth={1.5} />,
            bgColor: 'bg-blue-50',
            iconColor: 'text-[#164972]'
        },
        {
            id: 'ophthalmology',
            name: 'Ophthalmology',
            icon: <Eye size={28} strokeWidth={1.5} />,
            bgColor: 'bg-blue-50',
            iconColor: 'text-[#164972]'
        },
        {
            id: 'general-medicine',
            name: 'General Medicine',
            icon: <Activity size={28} strokeWidth={1.5} />,
            bgColor: 'bg-blue-50',
            iconColor: 'text-[#164972]'
        },
        {
            id: 'surgery',
            name: 'Surgery',
            icon: <Scissors size={28} strokeWidth={1.5} />,
            bgColor: 'bg-blue-50',
            iconColor: 'text-[#164972]'
        }
    ];

    const itemsPerView = 6;
    const maxIndex = Math.max(0, specialties.length - itemsPerView);

    const handlePrev = (): void => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = (): void => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    const handleSpecialtyClick = (specialty: Specialty): void => {
        console.log(`Selected specialty: ${specialty.name}`);
    };

    const visibleSpecialties = specialties.slice(currentIndex, currentIndex + itemsPerView);

    return (
        <div className="w-full max-w-7xl p-4 md:p-0 mx-auto bg-white">
            {/* Header */}
            <div className="mb-4 sm:mb-6 flex justify-center flex-col items-start">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-3xl text-center font-bold py-2 font-serif tracking-wider text-[#164972] transition-all duration-1000">
                    Our Medical<span className=""> Services</span>
                </h2>
                <div className='h-1 w-32 sm:w-48 bg-[#164972] rounded-full mb-4'></div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-sm sm:max-w-md lg:max-w-3xl transition-all duration-1000 delay-200 text-left">
                    Bringing trusted healthcare services to your doorstep across Bihar
                </p>
            </div>

            {/* Debug info - remove in production */}
            {/* <div className="mb-4 text-xs text-gray-400">
                Current index: {currentIndex} | Total items: {specialties.length} | Max index: {maxIndex} | Showing: {currentIndex + 1}-{Math.min(currentIndex + itemsPerView, specialties.length)} of {specialties.length}
            </div> */}
            
            {/* Specialties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                {visibleSpecialties.map((specialty, index) => (
                    <div
                        key={`${specialty.id}-${currentIndex + index}`}
                        onClick={() => handleSpecialtyClick(specialty)}
                        className="cursor-pointer"
                    >
                        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-xl hover:border-[#164972] transition-all duration-200 group shadow-sm">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-full flex items-center group justify-center mx-auto mb-3 bg-blue-50 group-hover:bg-[#164972] transition-colors duration-300 ${specialty.bgColor}`}>
                                <div className="flip w-full h-full flex items-center justify-center rounded-full text-[#164972] group-hover:text-white">
                                    {specialty.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-medium text-gray-700">
                                {specialty.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center mb-6">
                {/* Navigation */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="w-10 h-10 rounded-full bg-[#164972] hover:bg-[#164972]/90 flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={16} className="text-white" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="w-10 h-10 rounded-full bg-[#164972] hover:bg-[#164972]/90 flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <ChevronRight size={16} className="text-white" />
                    </button>
                </div>
                
                {/* Page indicator */}
                {/* <div className="ml-4 text-sm text-gray-500">
                    Page {Math.floor(currentIndex / itemsPerView) + 1} of {Math.ceil(specialties.length / itemsPerView)}
                </div> */}
            </div>
        </div>
    );
};

export default MedicalSpecialtiesCard;