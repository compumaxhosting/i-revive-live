"use client";

import BackToTop from "@/app/components/BackToTop";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import VitalOrgans from "@/app/components/plans/VitalOrgans";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function VitalOrgansPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <VitalOrgans />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}
