"use client";

import BackToTop from "@/app/components/BackToTop";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import Infertility from "@/app/components/plans/Infertility";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function InfertilityPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <Infertility />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}
