"use client";

import BottomNav from "@/app/components/BottomNav";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import SunnahBasic from "@/app/components/plans/SunnahBasic";

export default function SunnahBasicPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <SunnahBasic />
      <Footer />
      <BottomNav />
    </div>
  );
}
