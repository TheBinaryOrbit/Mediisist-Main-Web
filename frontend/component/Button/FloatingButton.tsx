import { PhoneCall } from 'lucide-react';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-10 right-6 z-50">
      <a href="tel:8858496391" aria-label="Call 24x7 Support">
        <button
          className="flex items-center gap-2 bg-red-600 text-white px-5 py-5 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 animate-bounce cursor-pointer"
        >
          <PhoneCall className="w-5 h-5" />
        </button>
      </a>
    </div>
  );
}
