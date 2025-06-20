import { PhoneCall } from 'lucide-react';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-10 right-6 z-50">
      <button
        className="flex items-center gap-2 bg-[#009e92] text-white px-5 py-5 rounded-full shadow-lg hover:bg-[#007d74] transition-all duration-300 animate-bounce cursor-pointer"
        
        aria-label="Call 24x7 Support"
      >
        <PhoneCall className="w-5 h-5" />
        {/* <span className="font-semibold">24x7 Call</span> */}
      </button>
    </div>
  );
}
