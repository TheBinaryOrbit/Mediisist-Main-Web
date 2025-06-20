
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react";
import Link from "next/link";
const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information: Name, phone number, address when requesting emergency services",
        "Location data: GPS coordinates shared during emergency requests",
        "Medical information: Relevant health details provided during emergency calls",
        "Usage data: How you interact with our website and services"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "Provide emergency medical services and ambulance dispatch",
        "Contact you regarding your emergency request status",
        "Improve our response times and service quality",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      icon: Lock,
      title: "Information Security",
      content: [
        "We use industry-standard encryption to protect your data",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates to our systems",
        "Secure data transmission protocols for all communications"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We share information with medical professionals during emergencies",
        "Hospital and healthcare facilities receive relevant medical data",
        "Law enforcement agencies when required by law",
        "We never sell your personal information to third parties"
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
          <h1 className="text-4xl font-bold text-[#134669]">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            At RapidCare Emergency Services, we are committed to protecting your privacy and ensuring 
            the security of your personal information. This Privacy Policy explains how we collect, 
            use, and safeguard your information when you use our emergency medical services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#1a8d5c] p-3 rounded-xl mr-4">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#134669]">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#1a8d5c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-[#1a8d5c] text-white rounded-xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">Questions About This Policy?</h3>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or how we handle your information, 
            please contact us:
          </p>
          <div className="space-y-2">
            <p>Email: privacy@rapidcare.com</p>
            <p>Phone: +91 6200456789</p>
            <p>Address: Patna, Bihar, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
