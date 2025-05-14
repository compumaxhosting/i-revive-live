// components/BottomNav.tsx

import { Phone, Mail, MapPin } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#A4C752] text-white z-40 shadow-lg md:hidden">
      <div className="flex justify-around items-center py-2">
        <a href="tel:8009944335" className="flex flex-col items-center text-sm">
          <Phone size={20} />
          <span>Call</span>
        </a>
        <a href="mailto:info@irevive.com" className="flex flex-col items-center text-sm">
          <Mail size={20} />
          <span>Email</span>
        </a>
        <a
          href="https://www.google.com/maps/dir//6th+floor,+Mawin,+i-Revive+Cupping+Clinic+(Hijama),+Zamzam+plaza,+opposite+prince+hotel,+Royal+Colony,+Mehdipatnam,+Hyderabad,+Telangana+500028/@17.3945427,78.4399945,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb976d96d34fb7:0x394d9183d27de3a4!2m2!1d78.4425694!2d17.3945376?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-sm"
        >
          <MapPin size={20} />
          <span>Location</span>
        </a>
      </div>
    </div>
  );
}
