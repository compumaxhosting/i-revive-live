"use client";

import BackToTop from "@/app/components/BackToTop";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import SunnahPlus from "@/app/components/plans/SunnahPlus";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function SunnahPlusPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <SunnahPlus />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}
