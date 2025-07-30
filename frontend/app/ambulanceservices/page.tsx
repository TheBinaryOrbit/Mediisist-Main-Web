import { Shield } from "lucide-react";
import Image from "next/image";
import backgroundimage from "@/assets/backgroundimage.png";
import blsImage from '@/assets/BLS.webp'
import alsImage from '@/assets/ALS.webp'
import transportImage from '@/assets/PTA.webp'
import img from '@/assets/staroflife.png'

const content = [
    {
        title1: "Basic Life Support",
        title2: "(BLS)",
        description: "Our BLS ambulances provide essential emergency medical care with trained EMTs, equipped with oxygen therapy, automated external defibrillators (AED), spinal immobilization equipment, and basic airway management tools. Perfect for stable patients requiring medical transportation and basic emergency interventions.",
        img: blsImage.src,
        id: "bls"
    },
    {
        title1: "Advanced Life Support",
        title2: "(ALS)",
        description: "ALS ambulances feature paramedics trained in advanced medical procedures, equipped with cardiac monitors, IV therapy capabilities, advanced airway management, medication administration, and life-saving equipment. Designed for critical patients requiring intensive pre-hospital care and emergency interventions.",
        img: alsImage.src,
        id: "als"
    },
    {
        title1: "Patient Transport",
        title2: "Vehicle",
        description: "Specialized non-emergency medical transport vehicles for patients who need medical supervision during transfer between healthcare facilities, routine medical appointments, or discharge transportation. Equipped with basic monitoring equipment and staffed by qualified medical personnel.",
        img: transportImage.src,
        id: "pt"
    }
]


const AmbulanceServices = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header with background image covering 1/3 screen height */}
            <div className="relative min-h-[66vh]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundimage}
                        alt="Background"
                        fill
                        className="object-cover w-full h-full"
                        quality={100}
                    />
                </div>

                {/* <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
                    <button className="mb-6 px-6 py-2 bg-blue-300 text-slate-800 font-medium rounded-full shadow transition border-2 border-blue-500 ">
                        Ambulance Services
                    </button>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-body text-white">
                        Mediisist Ambulance Services<br />
                        <span className="text-teal-300">Fee Structure</span>
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
                        Professional emergency medical services with rapid response times and advanced life support equipment. Your health emergency is our priority.
                    </p>
                </div> */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
                    <img src={img.src} alt="Ambulance Services Logo" className="w-20 sm:w-28 lg:w-24 invert-100" data-aos="fade-up" id='ambulanceServices' />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold  py-5 tracking-wider font-body text-white" data-aos="fade-up" >
                        Our Ambulance Services
                    </h2>
                    <p className="text-md sm:text-md font-normal text-gray-100 max-w-md md:max-w-2xl mx-auto px-5 font-body" data-aos="fade-up">
                        Professional emergency medical services and patient transport solutions available 24/7 with trained medical personnel and state-of-the-art equipment.
                    </p>
                </div>
            </div>



            {/* Main Content */}
            <div className="mx-auto max-w-7xl my-16 p-3">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-wider">&nbsp;Introduction&nbsp;</h2>
                    <div className="h-1 w-64 bg-[#164972] mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-5xl mx-auto">
                        Welcome to Mediisist Healthcare Services. We are committed to providing reliable and accessible medical support, prioritizing transparency, affordability, and patient-centered care. Our mission is to ensure quality healthcare solutions tailored to every need.
                    </p>

                </div>
                {
                    content.map((item, index) => (
                        <div key={index} className={`w-full h-fit flex ${(index + 1) % 2 == 0 ? 'md:flex-row flex-col-reverse' : 'md:flex-row-reverse flex-col-reverse'} justify-between items-start md:gap-20 relative mb-20`} id={item.id}>
                            <div className='md:w-1/2 p-2 sm:p-5 top-[10vh] left-0'>
                                <h2 className="text-3xl sm:text-3xl text-[#164972] font-semibold text-left mb-2 md:mb-4" data-aos="fade-up">
                                    {item.title1}<span className="text-logocolor"> {item.title2}</span>
                                </h2>
                                <p className='text-justify text-md leading-7 sm:text-lg text-gray-500' data-aos="fade-up">{item.description}</p>
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
        </div>
    );
};

export default AmbulanceServices;
