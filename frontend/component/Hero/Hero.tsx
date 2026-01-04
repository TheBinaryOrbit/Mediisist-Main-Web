"use client"
import { useState, useEffect } from "react";
import { Phone, Heart, Shield, Clock, User, AlertCircle, ChevronRight } from "lucide-react";
import ambulance from '@/assets/ambulance.png'
import { toast } from "react-toastify";
import { axiosClient } from "@/lib/axiosClient";
import Link from "next/link";
const Hero = () => {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sessionId , setSessionId] = useState<string | null>(null);

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
        setSessionId(response.data.ride.sessionKey);
        setIsFormSubmitted(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Please Try Again");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="h-full py-12 px-4 overflow-hidden" id="form">

      <div className="max-w-7xl mx-auto z-10 " >
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6 ">
              <div className="lg:inline-block hidden">
                <span className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#199dd1' }}>
                  🚨 Emergency Services Available 24/7
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:block hidden font-poppins">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" >
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
          <div className="order-1 lg:order-2">
            <div className="lg:hidden flex flex-col items-center justify-center mb-8">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#199dd1' }}>
                  🚨 Emergency Services Available 24/7
                </span>
              </div>

              <h1 className="text-5xl font-bold text-gray-900 leading-tight text-center">
                Fast & Reliable
                <span className="bg-clip-text block text-[#164972]">
                  {/* Ambulance Service */}
                  Appointment Services
                </span>
              </h1>
            </div>
            <div className=" w-full lg:w-full flex justify-end items-end px-5 relative">
              <img src={ambulance.src} alt="" className="absolute top-[50%] left-0 translate-y-[-20%] md:flex hidden translate-x-[-10%] z-0 scale-90" />
              <div className="bg-slate-100 rounded-3xl shadow-xl p-5 md:p-10 max-w-lg lg:ml-0 z-40 translate-x-[0%] md:translate-x-[15%]">
                {isFormSubmitted  ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(1, 144, 80, 0.1)' }}>
                      <svg className="w-10 h-10" style={{ color: '#019050' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Help is on the way!</h3>
                    <p className="text-gray-600 mt-2 mb-6">Your emergency request has been received. Our team will contact you immediately.</p>
                    {/* <Link href={`/getlocation/${sessionId}`} className="text-blue-600 hover:underline font-bold">
                      Grant Location
                    </Link> */}
                  </div>
                ) : (
                  <>
                    <div className="w-full text-white rounded-xl p-3 sm:p-4 mb-8 flex items-center bg-[#164972]" >
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
                            <span className="mr-2 text-xs sm:text-lg">BOOK APPOINTMENT NOW</span>
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
      </div>
    </section>
  );
};

export default Hero;