"use client";
import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contact from "@/assets/contact.jpg";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsLoading(true);
    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      
      setStatus("✅ Message sent successfully!");
      form.current.reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus("");
      }, 5000);
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col lg:flex-row gap-10 items-center justify-between max-w-7xl mx-auto"
      id="contactus"
    >
      {/* Left: Form */}
      <div className="w-full" data-aos="fade-right">
        <p className="text-gray-600 mb-6 md:text-left text-center font-bold text-2xl">
          Send us a message
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
          aria-labelledby="contact-form"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              disabled={isLoading}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#164972] focus:border-[#164972] disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                disabled={isLoading}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#164972] focus:border-[#164972] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                disabled={isLoading}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#164972] focus:border-[#164972] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              required
              disabled={isLoading}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#164972] focus:border-[#164972] disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              disabled={isLoading}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm h-32 focus:ring-2 focus:ring-[#164972] focus:border-[#164972] disabled:opacity-50 disabled:cursor-not-allowed resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white rounded-xl font-bold font-lora transition-all duration-300 flex items-center justify-center gap-2 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#164972] hover:bg-[#123a5a] hover:shadow-2xl hover:scale-[1.01]'
            }`}
          >
            {isLoading && (
              <svg 
                className="animate-spin h-5 w-5 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                ></circle>
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {isLoading ? 'Sending...' : 'Submit'}
          </button>

          {/* Status */}
          {status && (
            <div className={`text-sm text-center mt-2 p-3 rounded-lg ${
              status.includes('✅') 
                ? 'text-green-700 bg-green-50 border border-green-200' 
                : status.includes('❌')
                ? 'text-red-700 bg-red-50 border border-red-200'
                : 'text-blue-700 bg-blue-50 border border-blue-200'
            }`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;