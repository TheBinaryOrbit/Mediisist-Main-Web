'use client';

import React, { useState } from 'react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const FAQAccordion: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<string>('basic-heading-one-with-arrow');

    const faqData: FAQItem[] = [
        {
            id: 'faq-heading-one',
            question: 'How can I book an appointment with a doctor?',
            answer:
                'To book an appointment, simply log in to your Mediisist account, go to the "Appointments" section, select your preferred doctor and time slot, and confirm your booking.'
        },
        {
            id: 'faq-heading-two',
            question: 'Can I access my medical records through Mediisist?',
            answer:
                'Yes, Mediisist allows you to view and download your medical records securely. Navigate to the "Health Records" tab in your dashboard to access your files.'
        },
        {
            id: 'faq-heading-three',
            question: 'What should I do in case of a medical emergency?',
            answer:
                'In case of an emergency, call your local emergency services immediately. Mediisist is not intended for emergency medical care, but you can use it to find nearby hospitals or consult doctors online for non-emergency conditions.'
        },
        {
            id: 'faq-heading-four',
            question: 'How do I cancel or reschedule an appointment?',
            answer:
                'Go to your "Appointments" section, select the appointment you want to change, and click on "Cancel" or "Reschedule". Make sure to do this at least 24 hours in advance to avoid cancellation charges.'
        },
        {
            id: 'faq-heading-five',
            question: 'Is my health information safe with Mediisist?',
            answer:
                'Absolutely. Mediisist uses end-to-end encryption and follows HIPAA-compliant practices to ensure your personal and health information remains secure and confidential.'
        }
    ];


    const toggleAccordion = (accordionId: string) => {
        setActiveAccordion(activeAccordion === accordionId ? '' : accordionId);
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex justify-center items-center h-fit">
                        <p className="flex justify-start items-center border-[1px] border-slate-300 px-3 rounded-lg text-xs  gap-1 mb-4 py-1 text-slate-700 font-semibold">
                            <span className="text-xs -translate-y-[1px]  text-[#164972] font-semibold">FAQ's</span>
                        </p>
                    </div>
                    <h2 className={`text-2xl text-nowrap sm:text-3xl lg:text-4xl xl:text-4xl text-center font-bold py-2 font-serif tracking-wider text-[#164972] transition-all duration-1000`}>
                        Frequently Asked Questions
                    </h2>
                    <div className='h-1 w-48 bg-[#164972] mx-auto rounded-full'></div>
                </div>

                <div className="accordion-group">
                    {faqData.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`accordion py-8 px-6 transition-all duration-500 rounded-2xl   ${index < faqData.length - 1 ? 'border-b border-solid border-gray-200' : ''
                                } ${activeAccordion === faq.id ? 'bg-blue-50' : ''}`}
                            id={faq.id}
                        >
                            <button
                                className={`accordion-toggle group cursor-pointer inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-blue-600 ${activeAccordion === faq.id ? 'font-medium text-blue-600' : ''
                                    }`}
                                onClick={() => toggleAccordion(faq.id)}
                                aria-controls={`basic-collapse-${faq.id}`}
                                aria-expanded={activeAccordion === faq.id}
                                style={{
                                    color: activeAccordion === faq.id ? '#164972' : undefined,
                                    fontWeight: activeAccordion === faq.id ? 500 : undefined
                                }}
                            >
                                <h5 className='font-bold text-xl text-[#164972]'>{faq.question}</h5>
                                <svg
                                    className={`text-gray-500 transition duration-500 group-hover:text-blue-600 ${activeAccordion === faq.id ? 'rotate-180' : ''
                                        }`}
                                    style={{ color: activeAccordion === faq.id ? '#164972' : undefined }}
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div
                                id={`basic-collapse-${faq.id}`}
                                className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === faq.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                    }`}
                                aria-labelledby={faq.id}
                            >
                                <p className="text-base text-slate-700 font-medium leading-6">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;