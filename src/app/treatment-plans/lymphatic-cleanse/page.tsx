"use client";

import BackToTop from "@/app/components/BackToTop";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import Lymphatic from "@/app/components/plans/Lymphatic";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function LymphaticPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <Lymphatic />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}
