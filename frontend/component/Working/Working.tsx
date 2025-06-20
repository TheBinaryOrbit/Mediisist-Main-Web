const Working = () => {
    return (
        <section className="relative pt-5">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                    <div className="w-full flex-col justify-start items-center gap-3 flex">
                        <h2 className="w-full text-center text-4xl font-bold font-manrope leading-normal text-[#164972]">How It Works</h2>
                        <p className="max-w-2xl text-center text-gray-600 text-base font-normal leading-relaxed">Verified drivers, AI-powered prescriptions, GPS tracking, and multilingual support redefine how healthcare reaches every corner of India.</p>
                    </div>
                    <div className="w-full justify-start items-start gap-8 grid md:grid-cols-3 grid-cols-1">
                        <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex   px-4 py-3 rounded-3xl">
                            <div className="w-full flex justify-between relative ">
                                <h4 className="text-[#164972] text-xl font-semibold leading-8">Request an Ambulance</h4>
                                <h3 className="text-[#199dd1] text-4xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">1</h3>
                            </div>
                            <p className="text-gray-500 text-base font-normal leading-relaxed text-justify">Book an ambulance instantly through our mobile app, website, or even a simple phone call. Just share your location and emergency type.</p>
                        </div>
                        <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex   px-4 py-3 rounded-3xl">
                            <div className="w-full flex justify-between relative ">
                                <h4 className="text-[#164972] text-xl font-semibold leading-8">Get Instant Confirmation</h4>
                                <h3 className="text-[#199dd1] text-4xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">2</h3>
                            </div>
                            <p className="text-gray-500 text-base font-normal leading-relaxed text-justify">Our system finds the nearest verified ambulance with real-time tracking and sends you all the driver and ETA details instantly.</p>
                        </div>
                        <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex   px-4 py-3 rounded-3xl">
                            <div className="w-full flex justify-between relative ">
                                <h4 className="text-[#164972] text-xl font-semibold leading-8">Reach Hospital Safely</h4>
                                <h3 className="text-[#199dd1] text-4xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">3</h3>
                            </div>
                            <p className="text-gray-500 text-base font-normal leading-relaxed text-justify">Sit back. Our trained drivers and medical support ensure you reach the hospital safely, quickly, and at transparent pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Working

