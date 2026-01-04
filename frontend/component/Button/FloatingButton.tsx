import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import call from '@/assets/call.png';
export default function FloatingButton() {
  return (
    <div className="fixed bottom-10 right-6 z-50">
      <a href="tel:8858496391" aria-label="Call 24x7 Support">

        <div className="bg-white p-2.5   rounded-full shadow-2xl border-2 border-[#164972] hover:shadow-xl transition-shadow duration-300 animate-bounce">
          <Image src={call} alt="Call Icon" width={40} height={40} className="rounded-full" />
        </div>
        
      </a>
    </div>
  );
}
