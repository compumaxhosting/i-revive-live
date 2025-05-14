"use client";

import BackToTop from "@/app/components/BackToTop";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import HeadCupping from "@/app/components/plans/HeadCupping";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function HeadCuppingPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <HeadCupping />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}
