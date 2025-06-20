import React from 'react';
import img from '@/assets/staroflife.jpg'
import blsImage from '@/assets/BLS.webp'
import alsImage from '@/assets/ALS.webp'
import transportImage from '@/assets/PTA.webp'

const content = [
    {
        title1: "Basic Life Support",
        title2: "(BLS)",
        description: "Our BLS ambulances provide essential emergency medical care with trained EMTs, equipped with oxygen therapy, automated external defibrillators (AED), spinal immobilization equipment, and basic airway management tools. Perfect for stable patients requiring medical transportation and basic emergency interventions.",
        img: blsImage.src
    },
    {
        title1: "Advanced Life Support", 
        title2: "(ALS)",
        description: "ALS ambulances feature paramedics trained in advanced medical procedures, equipped with cardiac monitors, IV therapy capabilities, advanced airway management, medication administration, and life-saving equipment. Designed for critical patients requiring intensive pre-hospital care and emergency interventions.",
        img: alsImage.src
    },
    {
        title1: "Patient Transport",
        title2: "Vehicle",
        description: "Specialized non-emergency medical transport vehicles for patients who need medical supervision during transfer between healthcare facilities, routine medical appointments, or discharge transportation. Equipped with basic monitoring equipment and staffed by qualified medical personnel.",
        img: transportImage.src
    }
]

function AmbulanceServices() {
    return (
        <section className="py-10">
            <div className="md:mb-12 mb-5 text-center flex justify-center flex-col items-center" id='services'>
                <img src={img.src} alt="Ambulance Services Logo" className="w-20 sm:w-28 lg:w-24" data-aos="fade-up" id='ambulanceServices' />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold  py-5 tracking-wider font-lora" data-aos="fade-up" style={{backgroundImage: 'linear-gradient(to right, #199dd1, #019050)', WebkitBackgroundClip: 'text'}}>
                    Our Ambulance Services
                </h2>
                <p className="text-md sm:text-md font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto px-5 font-lora" data-aos="fade-up">
                    Professional emergency medical services and patient transport solutions available 24/7 with trained medical personnel and state-of-the-art equipment.
                </p>
            </div>
            <div className="mx-auto max-w-7xl">
                {
                    content.map((item, index) => (
                        <div key={index} className={`w-full h-fit flex ${(index+1)%2 == 0 ? 'md:flex-row flex-col-reverse' : 'md:flex-row-reverse flex-col-reverse'} justify-between items-start md:gap-20 relative mb-20`}>
                            <div className='md:w-1/2 p-2 sm:p-5 md:sticky top-[10vh] left-0'>
                                <h2 className="text-3xl sm:text-3xl text-gray-800 font-lora font-semibold text-left mb-2 md:mb-4" data-aos="fade-up">
                                    {item.title1}<span className="text-logocolor"> {item.title2}</span>
                                </h2>
                                <p className='text-justify text-md leading-7 sm:text-lg text-gray-500 font-lora' data-aos="fade-up">{item.description}</p>
                            </div>
                            <div className='md:w-1/2 h-fit p-5'>
                                <div className='w-full h-full bg--300 rounded-2xl overflow-hidden' data-aos="fade-up">
                                    <img src={item?.img} alt={`${item.title1} ${item.title2} ambulance`} className=' rounded-2xl' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default AmbulanceServices;