
"use client"
import React from "react";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import person from '@/assets/logo.png'
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Ravi Mehra",
        text: "Mediists helped us during an emergency when every second mattered. The ambulance reached in under 10 minutes — truly life-saving.",
        position: "Founder, HealthBridge Patna",
        imageSrc: person
    },
    {
        name: "Ananya Sharma",
        text: "Booking a doctor consultation for my father in a rural area was surprisingly easy with Mediists. The experience was smooth and fast.",
        position: "Digital Health Consultant",
        imageSrc: person
    },
    {
        name: "Vikram Singh",
        text: "The real-time tracking feature gave us peace of mind. We could follow the ambulance every step of the way.",
        position: "Operations Manager, SevaPlus",
        imageSrc: person
    },
    {
        name: "Neha Verma",
        text: "Reliable, fast, and user-friendly. Mediists is exactly what the Indian healthcare system needs in emergencies.",
        position: "Senior Nurse, CarePoint Clinic",
        imageSrc: person
    },
    {
        name: "Aman Tiwari",
        text: "From booking to doorstep service, everything worked flawlessly. Kudos to the team for building something truly impactful.",
        position: "Co-founder, RuralReach",
        imageSrc: person
    }
];


const Review = () => {
    return (
        <div className="w-full bg-[#164972]">
            <section className=" bg-white py-10 md:rounded-tl-[10%]">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex justify-center md:justify-start items-center h-fit">
                        <p className="flex justify-start items-center border-[1px] border-[#164972] px-3 rounded-lg text-xs  gap-1 mb-4 py-1 text-slate-700 font-semibold">
                            <FiUser size={12} /><span className="text-xs -translate-y-[1px] text-[#164972]  font-semibold">Customers</span>
                        </p>
                    </div>
                    <h1 className="text-center md:text-left text-4xl md:text-5xl/tight font-bold  capitalize mb-2 text-[#164972]">What people say</h1>
                    <p className="text-sm md:text-lg text-center md:text-left text-slate-500 mb-6 md:mb-10">Here's what some of our customers say about our platfrom.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 overflow-hidden h-[40rem] p-4">
                        <TestimonialsColumn testimonials={testimonials} duration={15} />
                        <TestimonialsColumn
                            testimonials={testimonials}
                            className="hidden md:block"
                            duration={19}
                        />
                        <TestimonialsColumn
                            testimonials={testimonials}
                            className="hidden lg:block"
                            duration={17}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}


const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonials
    duration?: number;
}) => (
    <div className={props.className}>
        <motion.div
            animate={{
                translateY: '-50%',
            }}
            transition={{
                duration: props.duration || 10,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
            }}
            className="flex flex-col gap-6 pb-6"
        >
            {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                    {props.testimonials.map(
                        ({ text, imageSrc, name, position }, index) => (
                            <div
                                key={index}
                                className="w-full h-[200px] border-[1.5px]  border-slate-400 rounded-2xl  p-5 flex flex-col justify-between gap-3 "
                                style={{
                                    boxShadow: 'rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px'
                                }}
                            >
                                <div className="flex gap-1 justify-start items-center">
                                    <FaStar className=" text-[#164972]" />
                                    <FaStar className=" text-[#164972]" />
                                    <FaStar className=" text-[#164972]" />
                                    <FaStar className=" text-[#164972]" />
                                    <FaStar className=" text-[#164972]" />
                                    <p className="text-sm text-[#164972]">4.8</p>
                                </div>
                                <p className=" font-sans italic text-sm text-slate-800">
                                    {`"${text}"`}
                                </p>
                                <div className=" flex gap-4 items-center">
                                    {/* <Image src={imageSrc} alt="" className="rounded-full h-10 w-10 overflow-hidden" /> */}
                                    <div>
                                        <h2 className="text-xs font-bold mb-1 text-black/70">{name}</h2>
                                        <p className="text-xs font-light text-black/50">{position}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </React.Fragment>
            ))}
        </motion.div>
    </div>
);

export default Review