import Contact from "@/component/Contactform/Contact"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import backgroundimage from '@/assets/backgroundimage.png'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Modern and spacious like about page */}
            <section className="relative h-[66vh] overflow-hidden">
                {/* Background Image with overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={backgroundimage.src}
                        alt="Contact Us Background"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0   mix-blend-multiply"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 h-full flex items-center justify-center">
                    <div className="mx-auto max-w-4xl text-center text-white">
                        <div className="mb-8 inline-flex items-center rounded-full bg-blue-100/90 px-4 py-2 text-sm font-medium text-[#164972] ring-1 ring-blue-300">
                            Get in Touch
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Contact <span className="text-blue-300">Us</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-100">
                            Have questions? Reach out to us and our team will get back to you shortly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section - Clean card design */}
            <section id="contact" className="py-12 sm:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
                        {/* Contact Form Card */}
                        <div className="relative">
                            <div className="rounded-3xl pt-0 p-4 bg-white ring-slate-200">
                                <Contact />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col justify-start ">
                            <div className="mb-8">
                                <h2 className="text-base font-semibold leading-7 text-[#164972]">
                                    Contact Information
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                    Get in Touch
                                </p>
                                <p className="mt-4 text-lg text-slate-600">
                                    We're here to answer your questions and provide guidance on admissions and programs.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Address */}
                                <div className="group flex items-start gap-6">
                                    <div className="rounded-2xl bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors">
                                        <MapPin className="h-6 w-6 text-[#164972]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Address</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Indian Institute of Technology,<br />
                                            Patna, Bihar - 801106.
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group flex items-start gap-6">
                                    <div className="rounded-2xl bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors">
                                        <Phone className="h-6 w-6 text-[#164972]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                                        <div className="space-y-1 text-slate-600">
                                            +91 88584 96391
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="group flex items-start gap-6">
                                    <div className="rounded-2xl bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors">
                                        <Mail className="h-6 w-6 text-[#164972]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                                        <div className="space-y-1 text-slate-600">
                                            <p>support@mediisist.in</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="group flex items-start gap-6">
                                    <div className="rounded-2xl bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors">
                                        <Clock className="h-6 w-6 text-[#164972]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Working Hours</h3>
                                        <div className="space-y-1 text-slate-600">
                                            <p>Monday - Sunday:<br/> 10:00 AM - 4:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section - Integrated design like about page */}
            <section className="bg-slate-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 ">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-[#164972]">
                            Visit Us
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Our Location
                        </p>
                        <p className="mt-4 text-lg text-slate-600">
                            {/* Visit our campus to experience our facilities and meet our faculty in person. */}
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
                            <iframe
                                title="College Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.065843421685!2d84.85177467554935!3d25.536183577494274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f694d904f%3A0xec61bf6ba64170a9!2sIncubation%20Centre%20%5BIIT-Patna%5D!5e0!3m2!1sen!2sin!4v1752887228336!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Modern card grid */}
            {/* <section className="bg-slate-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-[#164972]">
                            Have Questions?
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Frequently Asked Questions
                        </p>
                        <p className="mt-4 text-lg text-slate-600">
                            Find answers to common questions about admissions, programs, and campus life.
                        </p>
                    </div>

                    <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">What are the admission requirements?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Admission requirements vary by program. Generally, for B.Sc. Nursing, candidates must have completed
                                10+2 with Physics, Chemistry, and Biology with a minimum of 50% marks. For detailed requirements, please
                                visit our Admissions page.
                            </p>
                        </div>

                        <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">When do admissions open?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Admissions typically open in June each year. The application deadline is usually in mid-July, with
                                entrance examinations conducted in late July. We recommend applying early as seats are limited.
                            </p>
                        </div>

                        <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Are scholarships available?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes, we offer merit-based and need-based scholarships. Additionally, students can apply for various
                                government scholarship schemes. For more information, please visit our Fee Structure page.
                            </p>
                        </div>

                        <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Is hostel accommodation available?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes, we provide separate hostel facilities for male and female students. Hostel accommodation is
                                optional and allocated on a first-come, first-served basis. The hostel fee is separate from the tuition
                                fee.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}