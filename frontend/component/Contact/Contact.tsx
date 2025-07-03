"use client";
import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contact from "@/assets/contact.jpg";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!form.current) return;

    emailjs
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      form.current!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className="flex flex-col lg:flex-row gap-10 items-center justify-between py-10 px-5 md:px-0 max-w-7xl mx-auto"
      id="contactus"
    >
      {/* Left: Form */}
      <div className="w-full lg:w-1/2" data-aos="fade-right">
        <h3 className="text-3xl sm:text-4xl font-bold mb-2 font-lora tracking-wider md:text-left text-center">
          REACH OUT TO US
        </h3>
        <p className="text-gray-600 mb-6 md:text-left font-lora text-center">
          Get in touch with our team to clarify your queries
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm h-32"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#164972] text-white rounded-xl hover:shadow-2xl hover:scale-[1.01] duration-300 font-bold font-lora"
          >
            Submit
          </button>

          {/* Status */}
          {status && (
            <p className="text-sm text-center mt-2 text-green-600">{status}</p>
          )}
        </form>
      </div>

      {/* Right: Image */}
      <div
        className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-end items-end"
        data-aos="fade-left"
      >
        <Image
          width={500}
          height={500}
          src={contact.src}
          alt="Illustration"
          className="scale-90"
        />
      </div>
    </div>
  );
};

export default Contact;
