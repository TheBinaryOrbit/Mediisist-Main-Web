import img from '@/assets/logonav.png';
import Image from 'next/image';
import { FaGooglePlay, FaAppStoreIos, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import footerlogo from '@/assets/footerlogo.png'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full bg-[#164972] rounded-t-3xl h-fit p-5">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left'>
                    {/* <Image src={img} alt="img" className='w-32' /> */}
                    {/* <h1 className="text-2xl md:text-3xl text-white font-semibold capitalize mt-4 md:mt-0">Job well-done.</h1> */}
                </div>
                
                <div className='text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-10 gap-y-8 space-y-6'>
                    <div className=' col-span-2 flex items-center justify-center sm:items-start sm:justify-between'>
                        <img src={footerlogo.src} alt="footer logo"  className=' w-64' />
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <Link href={'/#bls'} className="hover:text-gray-300 cursor-pointer">Basic Life Support</Link>
                            <Link href={'/#als'} className="hover:text-gray-300 cursor-pointer">Advanced Life Support</Link>
                            <Link href={'/#pt'} className="hover:text-gray-300 cursor-pointer">Patient Transport Vehicle</Link>
                            <Link href={''} className="hover:text-gray-300 cursor-pointer">Our Diagnosis app</Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <Link href={'/#about'} className="hover:text-gray-300 cursor-pointer">About Us</Link>
                            <Link href={'/#contactus'} className="hover:text-gray-300 cursor-pointer">Contact Us</Link>
                            <Link href={'/privecypolicy'} className="hover:text-gray-300 cursor-pointer">Privacy Policy</Link>
                            <Link href={'/termsconditions'} className="hover:text-gray-300 cursor-pointer">Terms and conditions</Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">For Call Support</li>
                            <li className="hover:text-gray-300 cursor-pointer">For Ambulance Drivers</li>
                            <li className="hover:text-gray-300 cursor-pointer">For Diagnosis Center</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">+91 1800 4040 44</li>
                            <li className="hover:text-gray-300 cursor-pointer">support@mediisist.in</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Mobile App</h3>
                        <div className="flex items-center gap-4">
                            <FaGooglePlay size={24} className='cursor-pointer' />
                            <FaAppStoreIos size={24} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='border-t-2 max-w-7xl mx-auto border-gray-200 py-5 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-white text-sm'>©2025 Mediisist Pvt Ltd.</p>
                <ul className='text-white flex gap-3 text-xl mt-4 md:mt-0'>
                    <li className='cursor-pointer'><FaFacebook /></li>
                    <li className='cursor-pointer'><FaSquareXTwitter /></li>
                    <li className='cursor-pointer'><FaLinkedin /></li>
                    <a href="https://www.instagram.com/mediisist/" target='blank'>
                        <li className='cursor-pointer'><FaInstagram /></li>
                    </a>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
