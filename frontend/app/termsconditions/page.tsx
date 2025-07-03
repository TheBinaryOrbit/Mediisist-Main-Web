import { ArrowLeft, FileText, AlertTriangle, Clock, Phone, Shield, Users, CreditCard, Scale } from "lucide-react";
import Link from "next/link";

const TermsConditions = () => {
const sections = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using mediisist services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
      "These terms constitute a legally binding agreement between you and mediisist.",
      "If you do not agree to these terms, you must not use our services.",
      "We reserve the right to modify these terms at any time with prior notice. Continued use after changes constitutes acceptance of the updated terms."
    ]
  },
  {
    icon: Shield,
    title: "2. Service Description",
    content: [
      "mediisist provides emergency medical assistance and healthcare coordination services.",
      "Our services include, but are not limited to, emergency response, medical consultation, and coordination with healthcare facilities.",
      "All services are subject to availability, location, and medical necessity.",
      "We collaborate with certified healthcare providers and medical facilities to ensure quality service."
    ]
  },
  {
    icon: AlertTriangle,
    title: "3. Emergency Services & Limitations",
    content: [
      "mediisist services are designed for genuine medical emergencies and urgent healthcare needs.",
      "Our platform does not replace official emergency services such as dialing 108.",
      "Response times may be affected by traffic, weather, location, and other factors beyond our control.",
      "Availability may be limited in remote locations or during extreme conditions."
    ]
  },
  {
    icon: Users,
    title: "4. User Responsibilities",
    content: [
      "Users must provide accurate and complete information regarding their medical condition and location.",
      "Users are responsible for ensuring they have the legal capacity to consent to medical treatment.",
      "Misuse or abuse of the platform may result in suspension and legal consequences.",
      "Users must follow instructions from mediisist personnel and affiliated healthcare providers."
    ]
  },
  {
    icon: CreditCard,
    title: "5. Payment & Billing",
    content: [
      "Service fees will be communicated before delivery where possible.",
      "Payment is expected upon service completion unless prior arrangements have been made.",
      "Accepted payment methods include cash, digital payments, and valid insurance claims.",
      "Billing disputes must be raised within 30 days of receiving the service."
    ]
  },
  {
    icon: Phone,
    title: "6. Communication & Privacy",
    content: [
      "By using mediisist, you consent to receive service-related communications via SMS, WhatsApp, and phone calls.",
      "You may be required to share your location for emergency coordination purposes.",
      "Calls may be recorded for quality assurance, training, and legal compliance.",
      "We protect your personal health information in accordance with applicable privacy laws."
    ]
  },
  {
    icon: Scale,
    title: "7. Limitation of Liability",
    content: [
      "mediisist is only liable for the direct costs of services rendered.",
      "We are not responsible for delays caused by external factors beyond our control.",
      "Our maximum liability is limited to the amount paid for the specific service in question.",
      "We maintain professional indemnity insurance to support our service responsibilities."
    ]
  },
  {
    icon: Clock,
    title: "8. Termination & Modifications",
    content: [
      "Either party may terminate the agreement with appropriate prior notice.",
      "mediisist may suspend services in case of user non-compliance.",
      "Changes to these Terms will be communicated at least 30 days in advance.",
      "Continued use after changes implies acceptance of the updated terms."
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
            className="inline-flex items-center text-[#0066cc] hover:text-[#0052a3] mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <div className="bg-[#0066cc] p-3 rounded-xl mr-4">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#1a365d]">Terms & Conditions</h1>
              <p className="text-[#0066cc] font-semibold">MediAssist Healthcare Services</p>
            </div>
          </div>
          <p className="text-gray-600">Effective Date: July 2025 | Last Updated: July 3, 2025</p>
        </div>
      </div>


      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Agreement Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            These Terms and Conditions ("Terms") govern your access to and use of Mediisist healthcare services, 
            including our mobile application, website, and all related services (collectively, the "Services").
          </p>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our Services, you enter into a legally binding agreement with Mediisist. 
            Please read these Terms carefully and contact us if you have any questions before using our Services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#0066cc] p-3 rounded-xl mr-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a365d]">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#0066cc] rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Governing Law */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mt-8">
          <div className="flex items-start">
            <Scale className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Governing Law & Jurisdiction</h3>
              <p className="text-blue-700 leading-relaxed">
                These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of our Services 
                will be subject to the exclusive jurisdiction of the courts in Bihar, India. We strive to resolve all disputes 
                through good faith negotiations before resorting to legal proceedings.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Notice
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 mt-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Emergency Disclaimer</h3>
              <p className="text-red-700 leading-relaxed">
                <strong>IMPORTANT:</strong> In case of life-threatening emergencies, call 108 (India Emergency Services) immediately. 
                Mediisist services are complementary to, not a replacement for, official emergency response systems. 
                These Terms do not limit your rights to emergency medical care or immediate emergency response when required.
              </p>
            </div>
          </div>
        </div> */}

        {/* Contact Information */}
        <div className="bg-[#1a365d] text-white rounded-xl p-8 mt-8">
          <div className="flex items-start mb-6">
            <Phone className="h-6 w-6 text-white mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-gray-300">
                For questions about these Terms and Conditions, service inquiries, or legal matters:
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
                <AlertTriangle className="h-5 w-5 mr-3 text-blue-300 mt-0.5" />
                <div>
                  <span className="font-semibold block">Legal Department:</span>
                  <span className="text-sm text-gray-300">Mediisist Healthcare Services</span>
                  <span className="text-sm text-gray-300 block">Bihar, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-300">
              Response Time: We aim to respond to all legal and service inquiries within 2-3 business days.
              For urgent matters, please call our main service line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;