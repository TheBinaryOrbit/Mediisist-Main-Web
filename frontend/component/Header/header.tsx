"use client"
import Image from "next/image";
import logo from '@/assets/logonav.png'
import { FaInstagram, FaYoutube, FaGithub, FaXTwitter } from "react-icons/fa6";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";

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
        <header className="w-full min-h-[60px] py-3 bg-white shadow-sm z-50 sticky top-0 z-50">
            <div className="max-w-7xl flex items-center lg:mx-auto mx-4 sm:mx-5 gap-4 lg:gap-20 relative z-50 justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image src={logo.src} width={120} height={60} alt="logo" className="w-auto h-8 sm:h-10 lg:h-12" />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex gap-8 text-black">
                        <li className="group relative">
                            <Link href={'/#services'} className="flex items-center gap-1 font-medium capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300">
                                Services
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 320 512"
                                    className="translate-y-[2px] group-hover:rotate-180 duration-300"
                                    height="12"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                                </svg>
                            </Link>
                            <ul className="absolute top-[100%] mt-3 bg-[#164972] w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible p-3 font-medium capitalize cursor-pointer rounded-xl space-y-2 shadow-xl z-50 transition-all duration-300">
                                <li className="hover:bg-[#199dd1] rounded-lg p-3 cursor-pointer duration-200 text-white">
                                    <Link href={'/#services'}>
                                        <h1 className="text-white">Basic Life Support</h1>
                                        <p className="text-sm text-gray-300">Emergency medical care and support</p>
                                    </Link>
                                </li>
                                <li className="hover:bg-[#199dd1] rounded-lg p-3 cursor-pointer duration-200 text-white">
                                    <Link href={'/#services'}>
                                        <h1 className="text-white">Advanced Life Support</h1>
                                        <p className="text-sm text-gray-300">Critical care medical services</p>
                                    </Link>
                                </li>
                                <li className="hover:bg-[#199dd1] rounded-lg p-3 cursor-pointer duration-200 text-white">
                                    <Link href={'/#services'}>
                                        <h1 className="text-white">Patient Transport Vehicle</h1>
                                        <p className="text-sm text-gray-300">Safe medical transportation</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <Link href="/#about">
                            <li className="font-medium capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300">About</li>
                        </Link>
                        <Link href="/#contactus">
                            <li className="font-medium capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300">Contact</li>
                        </Link>
                        <li className="group relative">
                            <p className="flex items-center gap-1 font-medium capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300">
                                Community
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 320 512"
                                    className="translate-y-[2px] group-hover:rotate-180 duration-300"
                                    height="12"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                                </svg>
                            </p>
                            <ul className="absolute top-[100%] mt-3 bg-[#164972] w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible p-3 font-medium capitalize cursor-pointer rounded-xl space-y-2 shadow-xl z-50 transition-all duration-300">
                                <li className="hover:bg-[#199dd1] rounded-lg p-3 cursor-pointer duration-200 flex items-center gap-3 text-white">
                                    <div className="bg-[#446D8E] items-center justify-center flex h-10 w-10 rounded-lg flex-shrink-0">
                                        <FaInstagram className="text-white" />
                                    </div>
                                    <div>
                                        <a href="https://www.instagram.com/mediisist/" target="blank">
                                            <h1 className="text-white">Instagram</h1>
                                            <p className="text-sm text-gray-300">Follow Us on Instagram</p>
                                        </a>
                                    </div>
                                </li>
                                <li className="hover:bg-[#199dd1] rounded-lg p-3 cursor-pointer duration-200 flex items-center gap-3 text-white">
                                    <div className="bg-[#446D8E] items-center justify-center flex h-10 w-10 rounded-lg flex-shrink-0">
                                        <FaXTwitter className="text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-white">Twitter</h1>
                                        <p className="text-sm text-gray-300">Follow Us on Twitter</p>
                                    </div>
                                </li>
                                <li className="hover:bg-[#199dd1] rounded-lg p-3 cursor-pointer duration-200 flex items-center gap-3 text-white">
                                    <div className="bg-[#446D8E] items-center justify-center flex h-10 w-10 rounded-lg flex-shrink-0">
                                        <FaYoutube className="text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-white">Youtube</h1>
                                        <p className="text-sm text-gray-300">Follow Us on Youtube</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="font-medium capitalize cursor-pointer hover:text-[#164972] transition-colors duration-300">Download</li>
                    </ul>
                </nav>

                {/* Desktop CTA Button */}
                <nav className="hidden lg:flex">
                    <button className="bg-[#164972] hover:bg-[#164972] text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105 cursor-pointer">
                        Book an ambulance
                    </button>
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
            <div className={`lg:hidden fixed  left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                } z-40`}>
                <nav className="px-4 py-6 max-h-[calc(100vh-8vh)] overflow-y-auto">
                    <ul className="space-y-4">
                        {/* Services Dropdown */}
                        <li>
                            <button
                                onClick={() => toggleDropdown('services')}
                                className="flex items-center justify-between w-full text-left py-3 px-4 font-medium text-gray-800 hover:text-[#199dd1] hover:bg-gray-50 rounded-lg transition-all duration-200"
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
                                    <li className="py-2 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200">
                                        <h1 className="font-medium">Basic Life Support</h1>
                                        <p className="text-sm opacity-70">Emergency medical care and support</p>
                                    </li>
                                    <li className="py-2 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200">
                                        <h1 className="font-medium">Advanced Life Support</h1>
                                        <p className="text-sm opacity-70">Critical care medical services</p>
                                    </li>
                                    <li className="py-2 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200">
                                        <h1 className="font-medium">Patient Transport Vehicle</h1>
                                        <p className="text-sm opacity-70">Safe medical transportation</p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Regular Menu Items */}
                        <li>
                            <Link href="/#about" className="block py-3 px-4 font-medium text-gray-800 hover:text-[#199dd1] hover:bg-gray-50 rounded-lg transition-all duration-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contactus"  className="block py-3 px-4 font-medium text-gray-800 hover:text-[#199dd1] hover:bg-gray-50 rounded-lg transition-all duration-200">
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
                                        <div className="bg-[#019050] items-center justify-center flex h-8 w-8 rounded-lg flex-shrink-0">
                                            <FaInstagram className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <a href="https://www.instagram.com/mediisist/">
                                                <h1 className="font-medium">Instagram</h1>
                                                <p className="text-xs opacity-70">Follow Us on Instagram</p>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="py-3 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3">
                                        <div className="bg-[#019050] items-center justify-center flex h-8 w-8 rounded-lg flex-shrink-0">
                                            <FaXTwitter className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <h1 className="font-medium">Twitter</h1>
                                            <p className="text-xs opacity-70">Follow Us on Twitter</p>
                                        </div>
                                    </li>
                                    <li className="py-3 px-3 hover:bg-[#199dd1] hover:text-white rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3">
                                        <div className="bg-[#019050] items-center justify-center flex h-8 w-8 rounded-lg flex-shrink-0">
                                            <FaYoutube className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <h1 className="font-medium">Youtube</h1>
                                            <p className="text-xs opacity-70">Follow Us on Youtube</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#" className="block py-3 px-4 font-medium text-gray-800 hover:text-[#199dd1] hover:bg-gray-50 rounded-lg transition-all duration-200">
                                Download
                            </a>
                        </li>

                        {/* Mobile CTA Button */}
                        <li className="pt-4 border-t border-gray-200">
                            <button className="w-full bg-[#199dd1] hover:bg-[#164972] text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium tracking-wide">
                                Book an ambulance
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-30 top-[8vh]"
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </header>
    );
};

export default Header;