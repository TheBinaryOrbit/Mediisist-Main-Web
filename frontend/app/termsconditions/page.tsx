
import { ArrowLeft, FileText, AlertTriangle, Clock, Phone } from "lucide-react";
import Link from "next/link";

const TermsConditions = () => {
  const sections = [
    {
      icon: FileText,
      title: "Service Agreement",
      content: [
        "By using RapidCare Emergency Services, you agree to these terms and conditions",
        "Our services are available 24/7 for emergency medical situations",
        "We strive to provide prompt response but cannot guarantee specific arrival times",
        "Services are subject to availability and weather conditions"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Use Only",
      content: [
        "Our services are designed for genuine medical emergencies only",
        "Misuse of emergency services may result in charges and legal action",
        "For non-emergency medical needs, please contact your regular healthcare provider",
        "We reserve the right to refuse service for non-emergency situations"
      ]
    },
    {
      icon: Clock,
      title: "Response Times",
      content: [
        "We aim to reach emergency locations as quickly as possible",
        "Response times may vary based on traffic, weather, and location",
        "Priority is given based on the severity of the medical emergency",
        "We cannot guarantee specific arrival times due to external factors"
      ]
    },
    {
      icon: Phone,
      title: "Communication",
      content: [
        "You consent to receive SMS and WhatsApp messages for service coordination",
        "Location sharing may be required for emergency response",
        "We may record emergency calls for quality assurance and training",
        "Communication is essential for effective emergency response"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link 
            href={'/'}
            className="inline-flex items-center text-[#1a8d5c] hover:text-[#168a5a] mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-[#134669]">Terms & Conditions</h1>
          <p className="text-gray-600 mt-2">Last updated: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            These Terms and Conditions govern your use of RapidCare Emergency Services. 
            By accessing or using our services, you agree to be bound by these terms. 
            Please read them carefully before using our emergency medical services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#134669] p-3 rounded-xl mr-4">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#134669]">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#134669] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 mt-12">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-1 mr-4" />
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Important Notice</h3>
              <p className="text-red-700">
                In case of life-threatening emergencies, call 108 immediately. 
                These terms do not limit your rights to emergency medical care or 
                replace the need for immediate emergency response when required.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#134669] text-white rounded-xl p-8 mt-8">
          <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <div className="space-y-2">
            <p>Email: legal@rapidcare.com</p>
            <p>Phone: +91 6200456789</p>
            <p>Address: Patna, Bihar, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
