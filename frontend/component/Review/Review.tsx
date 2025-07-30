"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jane D",
        role: "CEO",
        avatar: "https://www.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej.png",
        rating: 5,
        content: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance."
    },
    {
        id: 2,
        name: "Harsh P.",
        role: "Product Designer",
        avatar: "https://www.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej.png",
        rating: 5,
        content: "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free."
    },
    {
        id: 3,
        name: "Sarah M.",
        role: "Marketing Manager",
        avatar: "https://www.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej.png",
        rating: 5,
        content: "Outstanding customer service and incredible attention to detail. Highly recommend to anyone looking for quality."
    },
    {
        id: 4,
        name: "Mike R.",
        role: "Developer",
        avatar: "https://www.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej.png",
        rating: 5,
        content: "The documentation is comprehensive and the support team is always ready to help. Great experience overall."
    }
];

const StarIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
            fill="currentColor"
        />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg className="h-6 w-6 text-[#164972] group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="h-6 w-6 text-[#164972] group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 2; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: rating }, (_, index) => (
            <StarIcon key={index} />
        ));
    };

    return (
        <section className="bg-[#164972]">
            <div className="w-full bg-white md:rounded-tl-[13%] py-30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
                        {/* Left Section */}
                        <div className="w-full lg:w-2/5">
                            <div className="flex justify-center md:justify-start items-center h-fit">
                                <p className="flex justify-start items-center border-[1px] border-slate-300 px-3 rounded-lg text-xs  gap-1 mb-4 py-1 text-slate-700 font-semibold">
                                    <FiUser size={12} /><span className="text-xs -translate-y-[1px]  font-semibold">Customers</span>
                                </p>
                            </div>
                            <h1 className="text-center md:text-left text-4xl md:text-5xl/tight font-bold  capitalize mb-2 md:mb-1 text-[#164972]">What people say</h1>
                            <div className="h-1 w-32  bg-[#164972] md:mx-0 mx-auto mb-4"></div>
                            <p className="text-sm md:text-lg text-center md:text-left text-slate-500 mb-6 md:mb-10">Here's what some of our customers say about our platfrom.</p>

                            {/* Slider controls */}
                            <div className="hidden lg:flex items-center justify-center lg:justify-start gap-10">
                                <button
                                    onClick={prevSlide}
                                    className="group flex justify-center items-center border border-solid border-[#164972] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#164972] cursor-pointer"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeftIcon />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="group flex justify-center items-center border border-solid border-[#164972] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#164972] cursor-pointer"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRightIcon />
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Testimonials */}
                        <div className="w-full lg:w-3/5 overflow-hidden">
                            <div className="flex gap-8 transition-all duration-500 ease-in-out">
                                {getVisibleTestimonials().map((testimonial, index) => (
                                    <div
                                        key={`${testimonial.id}-${currentIndex}-${index}`}
                                        className="group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-[#164972] flex-shrink-0 w-full md:w-1/2"
                                    >
                                        {/* Avatar and Info */}
                                        <div className="flex items-center gap-5 mb-2 sm:mb-5">
                                            <div className="grid gap-1">
                                                <h5 className="text-gray-900 transition-all duration-500 font-bold font-body">
                                                    {testimonial.name}
                                                </h5>
                                                <span className="text-sm font-medium leading-6 text-gray-500">
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Rating Stars */}
                                        <div className="flex items-center mb-2 sm:mb-5 gap-2 text-amber-500 transition-all duration-500">
                                            {renderStars(testimonial.rating)}
                                        </div>

                                        {/* Testimonial Content */}
                                        <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                                            {testimonial.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center lg:hidden lg:justify-start gap-10">
                            <button
                                onClick={prevSlide}
                                className="group flex justify-center items-center border border-solid border-[#164972] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#164972] cursor-pointer"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeftIcon />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="group flex justify-center items-center border border-solid border-[#164972] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#164972] cursor-pointer"
                                aria-label="Next testimonial"
                            >
                                <ChevronRightIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;