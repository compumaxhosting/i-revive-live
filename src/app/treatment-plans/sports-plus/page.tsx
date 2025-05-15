"use client";

import BackToTop from "@/app/components/BackToTop";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import SportsPlus from "@/app/components/plans/SportsPlus";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function SportsPlusPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <SportsPlus />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}
