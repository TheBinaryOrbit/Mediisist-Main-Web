"use client"
import Image from "next/image";
import logo from '@/assets/logonav.png'
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (dropdown: any) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className="w-full min-h-[60px] py-5 bg-white shadow-sm z-50 sticky top-0 px-5">
            <div className="max-w-7xl mx-auto flex items-center lg:mx-auto  sm:mx-5 gap-4 lg:gap-20 relative z-50 justify-between ">
                {/* Logo */}
                <Link href="/">
                    <div className="flex-shrink-0">
                        <Image src={logo.src} width={150} height={80} alt="logo" className="w-auto h-8 sm:h-10 lg:h-12" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex justify-center">
                    <ul className="flex gap-8 text-black ">
                        <Link href="/#about">
                            <li className="capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300 font-heading font-bold">About Us</li>
                        </Link>
                        <li className="group relative">
                            <Link href={''} className="flex items-center gap-1  capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300 font-body font-bold">
                                Services
                                <ChevronDown className="transition-transform duration-300 translate-y-0.5 group-hover:rotate-180 font-bold" size={14} />
                            </Link>
                            <ul className="absolute top-[100%] mt-3 bg-slate-50 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible p-3  capitalize cursor-pointer rounded-xl space-y-2 z-50 transition-all duration-300 shadow-2xl">
                                <li className="hover:bg-slate-200 rounded-lg p-2 px-3  cursor-pointer duration-200 ">
                                    <Link href={'/info'}>
                                        <h1 className="font-semibold font-heading">Hospital Info</h1>
                                        <p className="text-sm font-extralight font-body">Nabha Hospital Info</p>
                                    </Link>
                                </li>
                                <li className="hover:bg-slate-200 rounded-lg p-2 px-3  cursor-pointer duration-200 ">
                                    <Link href={'/ambulanceservices'}>
                                        <h1 className="font-semibold font-heading">Ambulance Services</h1>
                                        <p className="text-sm font-extralight font-body">Emergency medical care and support</p>
                                    </Link>
                                </li>
                                <li className="hover:bg-slate-200 rounded-lg p-2 px-3 cursor-pointer duration-200 ">
                                    <Link href={'/diagnoseservices'}>
                                        <h1 className="font-semibold font-heading">Diagnose Services</h1>
                                        <p className="text-sm font-extralight font-body">Critical care medical services</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <Link href="/contact">
                            <li className="font-body font-bold capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300">Contact</li>
                        </Link>
                        <li className="group relative">
                            <p className="flex items-center gap-1  capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300 font-body font-bold">
                                Community
                                <ChevronDown className="transition-transform duration-300 translate-y-0.5 group-hover:rotate-180 font-bold" size={14} />
                            </p>
                            <ul className="absolute top-[100%] right-[0%] mt-3 bg-slate-50 w-fit opacity-0 invisible group-hover:opacity-100 group-hover:visible p-3  capitalize cursor-pointer rounded-xl space-y-2 z-50 transition-all duration-300 shadow-2xl">
                                <li className="hover:bg-slate-200 rounded-lg p-3 cursor-pointer duration-200 flex items-center gap-3 ">
                                    <div className="bg-slate-300 items-center justify-center flex h-10 w-10 rounded-lg flex-shrink-0">
                                        <FaInstagram className="" />
                                    </div>
                                    <div>
                                        <a href="https://www.instagram.com/mediisist/" target="blank">
                                            <h1 className="font-medium">Instagram</h1>
                                            <p className="text-sm text-nowrap" >Follow Us on Instagram</p>
                                        </a>
                                    </div>
                                </li>
                                <li className="hover:bg-slate-200 rounded-lg p-3 cursor-pointer duration-200 flex items-center gap-3 ">
                                    <div className="bg-slate-300 items-center justify-center flex h-10 w-10 rounded-lg flex-shrink-0">
                                        <FaXTwitter className="" />
                                    </div>
                                    <div>
                                        <h1 className="font-medium">Twitter</h1>
                                        <p className="text-sm text-nowrap">Follow Us on Twitter</p>
                                    </div>
                                </li>
                                <li className="hover:bg-slate-200 rounded-lg p-3 cursor-pointer duration-200 flex items-center gap-3 ">
                                    <div className="bg-slate-300 items-center justify-center flex h-10 w-10 rounded-lg flex-shrink-0">
                                        <FaYoutube className="" />
                                    </div>
                                    <div>
                                        <h1 className="font-medium">Youtube</h1>
                                        <p className="text-sm text-nowrap">Follow Us on Youtube</p>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        
                    </ul>

                </nav>

                

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center">
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <LuX size={24} color="#199dd1" /> : <LuMenu size={24} color="#199dd1" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden fixed  left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 '
                } z-40`}>
                <nav className="px-4 py-6 max-h-[calc(100vh-8vh)] overflow-y-auto">
                    <ul className="space-y-4">
                        {/* About Us */}
                        <li>
                            <Link href="/#about" className="block py-3 px-4 font-medium text-gray-800 hover:text-[#199dd1] hover:bg-gray-50 rounded-lg transition-all duration-200">
                                About Us
                            </Link>
                        </li>

                        {/* Services Dropdown */}
                        <li>
                            <button
                                onClick={() => toggleDropdown('services')}
                                className="flex items-center justify-between w-full text-left py-3 px-4 font-medium text-gray-800 hover:text-[#199dd1] hover:bg-gray-50 rounded-lg transition-all duration-200 font-roboto"
                            >
                                Services
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 320 512"
                                    className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                                    height="16"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                                    <Link href={'/ambulanceservices'}>
                                        <li className="py-2 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200">
                                            <h1 className="font-medium">Ambulance Services</h1>
                                            <p className="text-sm opacity-70">Emergency medical care and support</p>
                                        </li>
                                    </Link>
                                    <Link href={'/diagnoseservices'}>
                                        <li className="py-2 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200">
                                            <h1 className="font-medium">Diagnose Services</h1>
                                            <p className="text-sm opacity-70">Critical care medical services</p>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </li>

                        {/* Contact */}
                        <li>
                            <Link href="/contact" className="block py-3 px-4 font-medium text-gray-800 hover:text-[#199dd1] hover:bg-gray-50 rounded-lg transition-all duration-200">
                                Contact
                            </Link>
                        </li>

                        {/* Community Dropdown */}
                        <li>
                            <button
                                onClick={() => toggleDropdown('community')}
                                className="flex items-center justify-between w-full text-left py-3 px-4 font-medium text-gray-800 hover:text-[#199dd1] hover:bg-gray-50 rounded-lg transition-all duration-200"
                            >
                                Community
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 320 512"
                                    className={`transition-transform duration-300 ${activeDropdown === 'community' ? 'rotate-180' : ''}`}
                                    height="16"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'community' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                                    <li className="py-3 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3">
                                        <div className="bg-slate-300 items-center justify-center flex h-8 w-8 rounded-lg flex-shrink-0">
                                            <FaInstagram className="text-gray-600 text-sm" />
                                        </div>
                                        <div>
                                            <a href="https://www.instagram.com/mediisist/" target="blank">
                                                <h1 className="font-medium">Instagram</h1>
                                                <p className="text-xs opacity-70">Follow Us on Instagram</p>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="py-3 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3">
                                        <div className="bg-slate-300 items-center justify-center flex h-8 w-8 rounded-lg flex-shrink-0">
                                            <FaXTwitter className="text-gray-600 text-sm" />
                                        </div>
                                        <div>
                                            <h1 className="font-medium">Twitter</h1>
                                            <p className="text-xs opacity-70">Follow Us on Twitter</p>
                                        </div>
                                    </li>
                                    <li className="py-3 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3">
                                        <div className="bg-slate-300 items-center justify-center flex h-8 w-8 rounded-lg flex-shrink-0">
                                            <FaYoutube className="text-gray-600 text-sm" />
                                        </div>
                                        <div>
                                            <h1 className="font-medium">Youtube</h1>
                                            <p className="text-xs opacity-70">Follow Us on Youtube</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 bg-opacity-25 z-30 top-[8vh]"
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </header>
    );
};

export default Header;