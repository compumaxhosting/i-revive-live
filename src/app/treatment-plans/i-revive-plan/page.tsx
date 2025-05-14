"use client";

import BackToTop from "@/app/components/BackToTop";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import IRevivePlan from "@/app/components/plans/irevivePlan";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function irevivePlanPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <IRevivePlan />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}
