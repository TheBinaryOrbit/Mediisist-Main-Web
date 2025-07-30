import { ArrowLeft, Shield, Eye, Lock, Users, Phone, FileText, AlertTriangle, Database, UserCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import backgroundimage from "@/assets/backgroundimage.png";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content: [
        "Personal Information: Name, phone number, email address, and physical address when requesting emergency services or creating an account.",
        "Location Data: GPS coordinates, address details, and location history shared during emergency requests for accurate service dispatch.",
        "Medical Information: Health details, medical conditions, allergies, medications, and emergency contact information provided during service requests.",
        "Usage Data: Information about how you interact with our website, mobile application, and services including IP address, device information, and browsing patterns.",
        "Communication Records: Call recordings, chat logs, and message history for quality assurance and service improvement purposes."
      ]
    },
    {
      icon: Shield,
      title: "2. How We Use Your Information",
      content: [
        "Emergency Service Delivery: Provide immediate medical assistance, ambulance dispatch, and coordinate with healthcare facilities.",
        "Communication: Contact you regarding emergency request status, service updates, and important notifications via SMS, calls, or WhatsApp.",
        "Service Improvement: Analyze usage patterns to enhance response times, service quality, and user experience.",
        "Legal Compliance: Meet regulatory requirements, maintain records as required by healthcare authorities, and cooperate with law enforcement when necessary.",
        "Account Management: Create and maintain user accounts, process payments, and provide customer support."
      ]
    },
    {
      icon: Lock,
      title: "3. Information Security & Protection",
      content: [
        "We employ industry-standard encryption protocols (AES-256) to protect your data during transmission and storage.",
        "Access to personal information is restricted to authorized personnel only, with multi-factor authentication and regular access reviews.",
        "Regular security audits, penetration testing, and system updates to maintain the highest security standards.",
        "Secure data centers with physical security measures, backup systems, and disaster recovery protocols.",
        "HIPAA-compliant data handling practices for all medical information and health-related data."
      ]
    },
    {
      icon: Users,
      title: "4. Information Sharing & Disclosure",
      content: [
        "Healthcare Providers: Share relevant medical data with doctors, hospitals, and medical facilities during emergency situations.",
        "Emergency Services: Coordinate with official emergency services (108, police, fire department) when required for comprehensive care.",
        "Insurance Companies: Share necessary information for insurance claims processing and coverage verification with your consent.",
        "Legal Authorities: Disclose information when required by law, court orders, or to protect the safety of individuals.",
        "Service Partners: Share limited data with trusted partners (ambulance services, medical equipment providers) solely for service delivery."
      ]
    },
    {
      icon: UserCheck,
      title: "5. Your Rights & Choices",
      content: [
        "Access Rights: Request copies of your personal information and understand how it's being used.",
        "Correction Rights: Update or correct inaccurate personal information in your account at any time.",
        "Deletion Rights: Request deletion of your personal data, subject to legal and regulatory retention requirements.",
        "Consent Withdrawal: Withdraw consent for certain data processing activities, though this may limit service availability.",
        "Data Portability: Request your data in a structured, commonly used format for transfer to another service provider."
      ]
    },
    {
      icon: Database,
      title: "6. Data Retention & Storage",
      content: [
        "Personal data is retained only as long as necessary for service delivery and legal compliance.",
        "Medical records are maintained for 7 years as required by healthcare regulations.",
        "Communication records are stored for 2 years for quality assurance and dispute resolution.",
        "Usage data and analytics are retained for 3 years to improve service quality and user experience.",
        "Data is stored in secure, geographically distributed data centers with regular backups and disaster recovery capabilities."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-100 shadow-sm ">
        <div className="relative min-h-[66vh]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundimage}
              alt="Background"
              fill
              className="object-cover w-full h-full"
              quality={100}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
            <div className="bg-white p-3 rounded-xl mr-4">
              <Shield className="h-8 w-8 text-[#0066cc]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold  py-5 tracking-wider font-body text-white" data-aos="fade-up" >
              Privacy Policy
            </h2>
            <p className="text-md sm:text-md font-normal text-gray-100 max-w-md md:max-w-2xl mx-auto px-5 font-body mb-4" data-aos="fade-up">
                  Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information when you interact with our services.
            </p>
            <p className="text-md sm:text-md font-normal text-gray-100 max-w-md md:max-w-2xl mx-auto px-5 font-body" data-aos="fade-up">
              Effective Date: July 2025 | Last Updated: July 3, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="rounded-xl p-4 mb-8">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Privacy Commitment</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
            At Mediisist, we are committed to protecting your privacy and ensuring the security of your personal information.
            This Privacy Policy explains how we collect, use, protect, and share your information when you use our emergency
            medical services, mobile application, and website.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            We understand that your health information is sensitive and personal. This policy describes our privacy practices
            in clear, understandable language and outlines your rights regarding your personal data.
            Please contact us if you have any questions about our privacy practices.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="rounded-xl  transition-shadow">
              <div className="p-4">
                <div className="flex items-center mb-6">
                  {/* <div className="bg-[#0066cc] p-3 rounded-xl mr-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div> */}
                  <h2 className="text-2xl font-bold text-[#1a365d]">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#0066cc] rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed text-justify">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HIPAA Compliance */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 mt-8">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Healthcare Privacy Compliance</h3>
              <p className="text-green-700 leading-relaxed text-justify">
                Mediisist follows healthcare privacy best practices and maintains compliance with applicable healthcare
                privacy regulations. We implement appropriate safeguards to protect your health information and ensure
                that your medical data is handled with the highest level of security and confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 mt-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Emergency Information Sharing</h3>
              <p className="text-red-700 leading-relaxed text-justify">
                <strong>IMPORTANT:</strong> During medical emergencies, we may share your information with healthcare
                providers, emergency services, and medical facilities without prior consent when necessary to protect
                your life and health. This emergency sharing is limited to information necessary for immediate medical care.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-[#1a365d] text-white rounded-xl p-8 mt-8">
          <div className="flex items-start mb-6">
            <Phone className="h-6 w-6 text-white mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Privacy Contact Information</h3>
              <p className="text-gray-300">
                For questions about this Privacy Policy, data protection concerns, or to exercise your privacy rights:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-300" />
                <span className="font-semibold">Phone:</span>
                <span className="ml-2">+91 88584 96391</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-3 text-blue-300" />
                <span className="font-semibold">Email:</span>
                <span className="ml-2">support@mediisist.in</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <Shield className="h-5 w-5 mr-3 text-blue-300 mt-0.5" />
                <div>
                  <span className="font-semibold block">Privacy Officer:</span>
                  <span className="text-sm text-gray-300">Mediisist Healthcare Services</span>
                  <span className="text-sm text-gray-300 block">Bihar, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-300">
              Response Time: We respond to privacy inquiries within 2-3 business days. For urgent privacy concerns
              or data breach notifications, please call our main service line immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;