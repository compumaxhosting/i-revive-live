"use client";

import BackToTop from "@/app/components/BackToTop";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import SunnahBasic from "@/app/components/plans/SunnahBasic";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function SunnahBasicPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <SunnahBasic />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}
