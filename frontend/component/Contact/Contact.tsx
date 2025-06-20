import React from "react";
import logo from '@/assets/logonav.png'
import contact from '@/assets/contact.jpg'
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-between py-10 px-5 md:px-0 max-w-7xl mx-auto" id="contactus">
      {/* Left Section: Form */}
      <div className="w-full lg:w-1/2" data-aos="fade-right">
        <h3 className=" text-3xl sm:text-4xl font-bold mb-2 font-lora tracking-wider md:text-left text-center">
          REACH OUT TO US
        </h3>
        <p className="text-gray-600 mb-6 md:text-left font-lora text-center">
          Get in touch with our team to clarify your queries
        </p>
        <form className="space-y-4" aria-labelledby="contact-form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium font-lora  text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium font-lora  text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium font-lora  text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium font-lora  text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="city"
              name="city"
              required
              className="mt-1 h-32 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-logocolor text-white rounded-xl bg-[#164972] hover:bg-[#164972] hover:shadow-2xl hover:scale-[1.01] duration-300  focus:ring-opacity-50 font-bold font-lora cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section: Illustration */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-end items-end"  data-aos="fade-left">
        <Image
          width={500}
          height={500}
          src={contact.src}
          alt="Illustration"
          className=" scale-90"
        />
      </div>
    </div>
  );
};

export default Contact;
