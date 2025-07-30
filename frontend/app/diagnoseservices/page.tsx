import {
    Shield,
    Heart,
    Users,
    Bone,
    Baby,
    Sparkles,
    Stethoscope,
    Eye,
    Brain,
    Pill,
    Activity,
    Microscope,
    Zap,
    UserCheck,
    Headphones,
} from "lucide-react";
import Image from "next/image";
import backgroundimage from "@/assets/backgroundimage.png";
import img from '@/assets/doctor.png'

const services = [
    {
        title: "General Physician",
        location: "Consultation",
        description: "Comprehensive primary care services for common health issues, preventive checkups, and initial diagnosis. Expert general practitioners available for immediate consultation and health guidance.",
        availableServices: [
            { name: "Teleconsultation", icon: Shield },
            { name: "Diagnostics", icon: Microscope }
        ],
        status: "Available Now",
        icon: Stethoscope,
        id: "gp",
    },
    {
        title: "Cardiology",
        location: "Heart Specialist",
        description: "Advanced cardiac care including heart disease diagnosis, treatment, and prevention. Specialized care for chest pain, hypertension, and cardiovascular risk assessment by expert cardiologists.",
        availableServices: [
            { name: "ECG Testing", icon: Activity },
            { name: "Heart Checkup", icon: Heart }
        ],
        status: "Available Now",
        icon: Heart,
        id: "cardiology",
    },
    {
        title: "Orthopedics",
        location: "Bone & Joint Care",
        description: "Specialized treatment for bone, joint, and musculoskeletal disorders. Expert care for fractures, arthritis, sports injuries, and rehabilitation services by certified orthopedic specialists.",
        availableServices: [
            { name: "X-Ray Analysis", icon: Zap },
            { name: "Joint Treatment", icon: Bone }
        ],
        status: "Available Now",
        icon: Bone,
        id: "ortho",
    },
    {
        title: "Pediatrics",
        location: "Child Specialist",
        description: "Dedicated healthcare services for infants, children, and adolescents. Comprehensive care including vaccinations, growth monitoring, and treatment of childhood diseases by experienced pediatricians.",
        availableServices: [
            { name: "Vaccination", icon: Shield },
            { name: "Growth Monitoring", icon: Activity }
        ],
        status: "Available Now",
        icon: Baby,
        id: "pediatrics",
    },
    {
        title: "Ophthalmology",
        location: "Eye Care",
        description: "Comprehensive eye care services including vision testing, eye disease treatment, and surgical procedures. Expert care for cataracts, glaucoma, and vision correction by certified ophthalmologists.",
        availableServices: [
            { name: "Vision Testing", icon: Eye },
            { name: "Eye Checkup", icon: Shield }
        ],
        status: "Available Now",
        icon: Eye,
        id: "ophthalmology",
    },
    {
        title: "Psychiatry",
        location: "Mental Health",
        description: "Professional mental health services including counseling, therapy, and psychiatric treatment. Comprehensive care for depression, anxiety, and behavioral disorders by licensed mental health professionals.",
        availableServices: [
            { name: "Counseling", icon: UserCheck },
            { name: "Therapy Session", icon: Heart }
        ],
        status: "Available Now",
        icon: UserCheck,
        id: "psychiatry",
    },
    {
        title: "Gynecology",
        location: "Women's Health",
        description: "Comprehensive women's healthcare services including reproductive health, pregnancy care, and gynecological disorders. Dedicated care for all stages of women's health journey.",
        availableServices: [
            { name: "Consultation", icon: Users },
            { name: "Prenatal Care", icon: Baby }
        ],
        status: "Coming Soon",
        icon: Users,
        id: "gynecology",
    },
    {
        title: "Dermatology",
        location: "Skin & Hair Care",
        description: "Expert dermatological care for skin, hair, and nail conditions. Treatment for acne, skin allergies, hair loss, and cosmetic dermatology services by qualified dermatologists.",
        availableServices: [
            { name: "Skin Analysis", icon: Eye },
            { name: "Hair Treatment", icon: Sparkles }
        ],
        status: "Coming Soon",
        icon: Sparkles,
        id: "dermatology",
    },

    {
        title: "Neurology",
        location: "Brain & Nervous System",
        description: "Specialized care for neurological disorders including headaches, epilepsy, stroke, and memory disorders. Advanced diagnosis and treatment by experienced neurologists and neurological specialists.",
        availableServices: [
            { name: "Brain Scan", icon: Microscope },
            { name: "Consultation", icon: Brain }
        ],
        status: "Coming Soon",
        icon: Brain,
        id: "neurology",
    }
];

const DiagnoseServices = () => {
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

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
                    <img src={img.src} alt="Medical Services Logo" className="w-20 sm:w-28 lg:w-24 invert-100" data-aos="fade-up" id='DiagnoseServices' />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold py-5 tracking-wider font-body text-white" data-aos="fade-up">
                        Our Medical Services
                    </h2>
                    <p className="text-md sm:text-md font-normal text-gray-100 max-w-md md:max-w-2xl mx-auto px-5 font-body" data-aos="fade-up">
                        Comprehensive healthcare solutions including specialized consultations, advanced diagnostics, and expert medical care—delivered with precision, compassion, and commitment to your wellbeing.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl my-16 p-3">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-wider">&nbsp;Our Services&nbsp;</h2>
                    <div className="h-1 w-64 bg-[#164972] mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-5xl mx-auto">
                        At Mediisist Healthcare, we deliver trusted, patient-first medical support with a focus on transparency, affordability, and personalized care for every individual across all medical specialties.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const MainIcon = service.icon;
                        const isAvailable = service.status === "Available Now";

                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                            >
                                {/* Header with status badge */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 text-[#164972]">
                                            <MainIcon size={32} />
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${isAvailable
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {service.status}
                                    </span>
                                </div>

                                {/* Title and Location */}
                                <div className="mb-4">
                                    <h2 className="text-xl font-bold text-[#164972] mb-1">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-3">
                                        {service.location}
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Available Services */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-[#164972] mb-3">
                                        Available Services
                                    </h3>
                                    <div className="space-y-2">
                                        {service.availableServices.map((availableService, idx) => {
                                            const ServiceIcon = availableService.icon;
                                            return (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-4 h-4 text-[#164972]">
                                                        <ServiceIcon size={16} />
                                                    </div>
                                                    <span className="text-sm text-[#164972]">
                                                        {availableService.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button
                                    className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${isAvailable
                                        ? 'bg-[#164972] text-white hover:bg-[#0f3a5f] transform hover:scale-[1.02]'
                                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        }`}
                                    disabled={!isAvailable}
                                >
                                    {isAvailable ? 'Book Appointment' : 'Coming Soon'}
                                </button>
                            </div>
                        );
                    })}
                </div>

                
            </div>
        </div>
    );
};

export default DiagnoseServices;