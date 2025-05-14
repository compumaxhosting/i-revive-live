import React from "react";
import { Phone } from "lucide-react"; // You can replace this with any icon library you use
import Link from "next/link";

const PhoneCall: React.FC = () => {
  return (
    <Link
      href="tel:+918009944335" // Replace with your actual phone number
      className="fixed bottom-14 left-4 z-50 bg-primary hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      aria-label="Call us"
    >
      <Phone size={23} />
    </Link>
  );
};

export default PhoneCall;
