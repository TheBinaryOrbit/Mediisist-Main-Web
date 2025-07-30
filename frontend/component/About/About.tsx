import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <section className="py-24 relative bg-[#164972]" id='about'>
            <div className="mb-14 text-center">
                <span
                    className="py-1 px-4 bg-[#199dd1] rounded-full text-xs  text-white text-center font-bold">About Us</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-2 font-serif tracking-wider text-white transition-all duration-1000 mb-2">
                    Revolutionary Features
                </h2>
                <p className="text-lg font-normal text-gray-300 max-w-md md:max-w-2xl mx-auto">
                    Mediisist brings together real-time ambulance booking, doctor consultations, and smart rural health pods — all through a single tech-enabled platform
                </p>
            </div>
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto ">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div
                        className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img className=" rounded-xl object-cover" src="https://st2.depositphotos.com/1046535/7695/i/950/depositphotos_76950531-stock-photo-emergency-doctor-in-front-of.jpg" alt="about Us image" />
                        </div>
                        <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://buscdn.cardekho.com/in/force/traveller-ambulance/force-traveller-ambulance-50802.jpg?impolicy=resize&imwidth=480"
                            alt="about Us image" />
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left font-bold py-2 font-serif tracking-wider text-white transition-all duration-1000 mb-2">
                                    Ambulance Access Made Smarter
                                </h2>
                                <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                    We are building a tech-enabled, reliable ambulance network
                                    that connects patients with verified drivers in real-time.
                                    No more panic calls — just instant booking via app or call.
                                    Transparent pricing, GPS tracking, and 24/7 emergency support.
                                    From villages to cities, we bring ambulances to your doorstep.
                                    Fast. Trusted. On-demand.
                                </p>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h3 className="text-white text-4xl font-bold font-manrope leading-normal">3+</h3>
                                    <h6 className="text-white text-base font-normal leading-relaxed">Months of Experience</h6>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-white text-4xl font-bold font-manrope leading-normal">125+</h4>
                                    <h6 className="text-white text-base font-normal leading-relaxed">Successful Delivery</h6>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-white text-4xl font-bold font-manrope leading-normal">52+</h4>
                                    <h6 className="text-white text-base font-normal leading-relaxed">Happy Clients</h6>
                                </div>
                            </div>
                        </div>
                        {/* <button
                            // className="sm:w-fit w-full px-3.5 py-2 bg-green-600 hover:bg-green-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                            // <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                        </button> */}
                    </div>
                </div>
            </div>

        </section>

    )
}

export default About