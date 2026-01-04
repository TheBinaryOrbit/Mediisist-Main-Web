import React from 'react';
import {
    Users,
    UserCheck,
    Bed,
    Heart,
    Clock,
    Activity,
    Shield,
    Stethoscope,
    Building2,
    Phone,
    MapPin,
    Calendar
} from "lucide-react";

const hospitalStats = [
    {
        title: "Total Doctors",
        value: "45",
        description: "Experienced medical professionals across all specialties providing comprehensive healthcare services",
        icon: Users,
        color: "bg-blue-100 text-blue-800",
        iconColor: "text-blue-600"
    },
    {
        title: "Available Doctors",
        value: "38",
        description: "Currently available doctors ready for consultation and emergency services",
        icon: UserCheck,
        color: "bg-green-100 text-green-800",
        iconColor: "text-green-600"
    },
    {
        title: "Total Beds",
        value: "120",
        description: "Well-equipped hospital beds with modern amenities for patient comfort and care",
        icon: Bed,
        color: "bg-purple-100 text-purple-800",
        iconColor: "text-purple-600"
    },
    {
        title: "Available Beds",
        value: "23",
        description: "Currently available beds for immediate admission and patient care",
        icon: Activity,
        color: "bg-orange-100 text-orange-800",
        iconColor: "text-orange-600"
    },
    {
        title: "ICU Available",
        value: "8",
        description: "Intensive Care Units with advanced life support systems and 24/7 monitoring",
        icon: Heart,
        color: "bg-red-100 text-red-800",
        iconColor: "text-red-600"
    },
    {
        title: "Emergency Services",
        value: "24/7",
        description: "Round-the-clock emergency medical services with immediate response capability",
        icon: Shield,
        color: "bg-teal-100 text-teal-800",
        iconColor: "text-teal-600"
    }
];

const doctorTimings = [
    {
        department: "General Medicine",
        timing: "8:00 AM - 8:00 PM",
        doctors: "Dr. Sharma, Dr. Patel, Dr. Kumar",
        icon: Stethoscope
    },
    {
        department: "Cardiology",
        timing: "9:00 AM - 6:00 PM",
        doctors: "Dr. Gupta, Dr. Singh",
        icon: Heart
    },
    {
        department: "Orthopedics",
        timing: "10:00 AM - 7:00 PM",
        doctors: "Dr. Mehta, Dr. Joshi",
        icon: Activity
    },
    {
        department: "Pediatrics",
        timing: "8:00 AM - 6:00 PM",
        doctors: "Dr. Agarwal, Dr. Verma",
        icon: Users
    },
    {
        department: "Emergency",
        timing: "24 Hours",
        doctors: "Emergency Team",
        icon: Shield
    }
];

const NabahHospitalInfo = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-[#164972] via-[#1e5a7f] to-[#2a6b8c] text-white">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <Building2 size={80} className="text-white opacity-90" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
                            Nabah Hospital
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Advanced Healthcare Services with Compassionate Care
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} />
                                <span>MurÄdnagar, Uttar Pradesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={20} />
                                <span>+91-XXXX-XXXXXX</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={20} />
                                <span>24/7 Emergency Services</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hospital Statistics */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Hospital Overview
                    </h2>
                    <div className="h-1 w-64 bg-[#164972] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Real-time information about our facilities, staff availability, and services to help you plan your visit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hospitalStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`p-3 rounded-xl ${stat.color}`}>
                                        <IconComponent size={32} className={stat.iconColor} />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-[#164972]">
                                            {stat.value}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-[#164972] mb-3">
                                    {stat.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Doctor Timings Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Doctor Availability & Timings
                        </h2>
                        <div className="h-1 w-64 bg-[#164972] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Our qualified doctors are available across different departments to provide specialized care
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {doctorTimings.map((dept, index) => {
                            const DeptIcon = dept.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-[#164972] rounded-lg">
                                            <DeptIcon size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#164972]">
                                            {dept.department}
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-gray-500" />
                                            <span className="text-sm font-medium text-gray-700">
                                                {dept.timing}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Users size={16} className="text-gray-500 mt-0.5" />
                                            <span className="text-sm text-gray-600 leading-relaxed">
                                                {dept.doctors}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Contact & Emergency Section */}
            <div className="bg-[#164972] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Need Immediate Medical Attention?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Our emergency services are available 24/7 with qualified medical staff ready to assist you
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300">
                            Emergency: 108
                        </button>
                        <button className="bg-white text-[#164972] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Info Banner */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <Activity size={20} />
                            <span>Updated: {new Date().toLocaleTimeString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart size={20} />
                            <span>ICU Beds Available: 8</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <UserCheck size={20} />
                            <span>Doctors on Duty: 38</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NabahHospitalInfo;