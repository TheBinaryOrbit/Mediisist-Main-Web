"use client"
import { useState, useEffect } from "react";
import { Phone, Heart, Shield, Clock, User, AlertCircle, ChevronRight } from "lucide-react";
import ambulance from '@/assets/ambulance.png'
import { toast } from "react-toastify";
import { axiosClient } from "@/lib/axiosClient";

const Hero = () => {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const rect = document.documentElement.getBoundingClientRect();
      const x = (e.clientX - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 100, y: y * 100 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async () => {
    if (!name || !contactNo) {
      toast.error("Please fill in both name and contact number.");
      return;
    }
  
    if (contactNo.length != 10) {
      toast.error("Please Enter A Valid Number");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axiosClient.post('/ride/addride', {
        name: name,
        phoneNumber: contactNo
      })

      if (response.status == 201 || response.status == 200) {
        toast.success("Submited Sucessfully");
        setIsFormSubmitted(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Please Try Again");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsFormSubmitted(false);
    setName("");
    setContactNo("");
  };

  return (
    <section className="min-h-screen py-12 px-4 overflow-hidden">
      {/* Floating Medical Elements - Rich Background */}

      {/* Large prominent elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      >
        <Heart className="w-8 h-8 text-white/30" />
      </div>

      <div
        className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 pointer-events-none"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
        }}
      >
        <svg className="w-6 h-6 text-white/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
          <path d="M8 2V6H4V8H8V12H10V8H14V6H10V2H8Z" />
        </svg>
      </div>

      {/* Medium elements */}
      <div
        className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full flex items-center justify-center opacity-10 transition-transform duration-500 pointer-events-none"
        style={{
          backgroundColor: '#199dd1',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.4}px)`
        }}
      >
        <Shield className="w-5 h-5 text-white" />
      </div>

      <div
        className="absolute bottom-1/4 left-1/4 w-14 h-14 rounded-full flex items-center justify-center opacity-10 transition-transform duration-700 pointer-events-none"
        style={{
          backgroundColor: '#019050',
          transform: `translate(${-mousePosition.x * 0.4}px, ${mousePosition.y * 0.2}px)`
        }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>

      <div
        className="absolute top-2/3 left-1/3 w-10 h-10 rounded-full flex items-center justify-center opacity-12 transition-transform duration-400 pointer-events-none"
        style={{
          backgroundColor: '#164972',
          transform: `translate(${mousePosition.x * 0.6}px, ${-mousePosition.y * 0.3}px)`
        }}
      >
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8L15 12H18C18 15.31 15.31 18 12 18C11 18 10.03 17.75 9.2 17.3L7.74 18.76C8.97 19.54 10.43 20 12 20C16.42 20 20 16.42 20 12H23L19 8M6 12C6 8.69 8.69 6 12 6C13 6 13.97 6.25 14.8 6.7L16.26 5.24C15.03 4.46 13.57 4 12 4C7.58 4 4 7.58 4 12H1L5 16L9 12H6Z" />
        </svg>
      </div>

      {/* Small scattered elements */}
      <div
        className="absolute top-16 right-1/3 w-8 h-8 rounded-full flex items-center justify-center opacity-8 transition-transform duration-600 pointer-events-none"
        style={{
          backgroundColor: '#199dd1',
          transform: `translate(${-mousePosition.x * 0.2}px, ${mousePosition.y * 0.5}px)`
        }}
      >
        <Clock className="w-3 h-3 text-white" />
      </div>

      <div
        className="absolute top-1/2 left-10 w-6 h-6 rounded-full flex items-center justify-center opacity-6 transition-transform duration-800 pointer-events-none"
        style={{
          backgroundColor: '#019050',
          transform: `translate(${mousePosition.x * 0.3}px, ${-mousePosition.y * 0.4}px)`
        }}
      >
        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H13V17H11V13H7V11H11V7H13V11H17V13Z" />
        </svg>
      </div>

      <div
        className="absolute bottom-1/3 right-1/6 w-9 h-9 rounded-full flex items-center justify-center opacity-7 transition-transform duration-450 pointer-events-none"
        style={{
          backgroundColor: '#164972',
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.6}px)`
        }}
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>

      <div
        className="absolute top-1/4 left-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-5 transition-transform duration-350 pointer-events-none"
        style={{
          backgroundColor: '#199dd1',
          transform: `translate(${-mousePosition.x * 0.5}px, ${mousePosition.y * 0.2}px)`
        }}
      >
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,18.5C15.5,18.5 18.5,15.5 18.5,12C18.5,10.5 18,9 17,8L15.5,9.5C16,10.5 16,11.5 15.5,12.5C15,13.5 14.5,14 13.5,14.5C12.5,15 11.5,15 10.5,14.5L9,16C10,17 11,17.5 12,17.5V18.5M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7C9.24,7 7,9.24 7,12S9.24,17 12,17S17,14.76 17,12S14.76,7 12,7Z" />
        </svg>
      </div>

      <div
        className="absolute top-3/4 left-1/5 w-5 h-5 rounded-full flex items-center justify-center opacity-6 transition-transform duration-520 pointer-events-none"
        style={{
          backgroundColor: '#019050',
          transform: `translate(${mousePosition.x * 0.7}px, ${-mousePosition.y * 0.5}px)`
        }}
      >
        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,6.5V9H21M3,9H9V6.5L3,7V9Z" />
        </svg>
      </div>

      <div
        className="absolute top-1/6 right-1/5 w-11 h-11 rounded-full flex items-center justify-center opacity-8 transition-transform duration-380 pointer-events-none"
        style={{
          backgroundColor: '#164972',
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.6}px)`
        }}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <div
        className="absolute bottom-1/5 left-2/3 w-6 h-6 rounded-full flex items-center justify-center opacity-5 transition-transform duration-680 pointer-events-none"
        style={{
          backgroundColor: '#199dd1',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.8}px)`
        }}
      >
        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
        </svg>
      </div>

      <div
        className="absolute top-1/2 right-1/8 w-8 h-8 rounded-full flex items-center justify-center opacity-7 transition-transform duration-420 pointer-events-none"
        style={{
          backgroundColor: '#019050',
          transform: `translate(${-mousePosition.x * 0.6}px, ${mousePosition.y * 0.3}px)`
        }}
      >
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <div
        className="absolute top-1/8 left-1/6 w-4 h-4 rounded-full flex items-center justify-center opacity-4 transition-transform duration-750 pointer-events-none"
        style={{
          backgroundColor: '#164972',
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.1}px)`
        }}
      >
        <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" />
        </svg>
      </div>

      <div
        className="absolute bottom-1/6 right-1/3 w-7 h-7 rounded-full flex items-center justify-center opacity-6 transition-transform duration-320 pointer-events-none"
        style={{
          backgroundColor: '#199dd1',
          transform: `translate(${mousePosition.x * 0.4}px, ${-mousePosition.y * 0.7}px)`
        }}
      >
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21A7,7 0 0,1 14,26H10A7,7 0 0,1 3,19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#199dd1' }}>
                  🚨 Emergency Services Available 24/7
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fast & Reliable
                <span className="bg-clip-text block text-[#164972]">
                  Ambulance Service
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Professional emergency medical transport with trained paramedics.
                <span className="font-semibold" style={{ color: '#199dd1' }}> Quick response</span> when every second counts.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(1, 144, 80, 0.1)' }} // Green bg with transparency
                >
                  <Shield className="w-6 h-6 text-[#00613A]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Certified Team</h3>
                <p className="text-sm text-gray-600">Licensed paramedics</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(25, 157, 209, 0.1)' }} // Blue bg with transparency
                >
                  <Clock className="w-6 h-6 text-[#106B90]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                <p className="text-sm text-gray-600">Average 8 min arrival</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(22, 73, 114, 0.1)' }} // Navy bg with transparency
                >
                  <Heart className="w-6 h-6 text-[#0B2B47]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Advanced Care</h3>
                <p className="text-sm text-gray-600">Life support equipment</p>
              </div>
            </div>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Lives Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-full flex justify-end items-end px-2 md:px-5 relative ">
            <img src={ambulance.src} alt="" className="absolute top-[50%] left-0 translate-y-[-20%] md:flex hidden translate-x-[-10%] z-0 scale-90" />
            <div className="bg-white rounded-3xl shadow-xl p-5 md:p-10 max-w-lg lg:ml-0 z-40 translate-x-[0%] md:translate-x-[15%]">
              {isFormSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(1, 144, 80, 0.1)' }}>
                    <svg className="w-10 h-10" style={{ color: '#019050' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Help is on the way!</h3>
                  <p className="text-gray-600 mt-2 mb-6">Your emergency request has been received. Our team will contact you immediately.</p>
                  <button
                    onClick={resetForm}
                    className="font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: '#199dd1' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-full text-white rounded-xl p-3 sm:p-4 mb-8 flex items-center bg-[#164972]">
                    <AlertCircle className="mr-3" size={24} />
                    <div>
                      <h3 className="font-bold text-[15px] md:text-lg">Emergency Service 24/7</h3>
                      <p className="text-white/80 text-xs sm:text-sm">Get a callback in 5 seconds</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="relative">
                      <User className="absolute left-3 top-3" style={{ color: '#199dd1' }} size={20} />
                      <input
                        type="text"
                        placeholder="Your Name*"
                        className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        style={{ '--tw-ring-color': '#199dd1' } as React.CSSProperties}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-3" style={{ color: '#199dd1' }} size={20} />
                      <input
                        type="tel"
                        placeholder="Contact Number*"
                        className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        style={{ '--tw-ring-color': '#199dd1' } as React.CSSProperties}
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer bg-[#164972]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          <span className="text-xs sm:text-lg">BOOKING...</span>
                        </>
                      ) : (
                        <>
                          <span className="mr-2 text-xs sm:text-lg">BOOK AMBULANCE NOW</span>
                          <ChevronRight size={20} />
                        </>
                      )}
                    </button>

                    <p className="text-gray-500 text-center text-sm mt-4">
                      Our emergency team will contact you immediately
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;