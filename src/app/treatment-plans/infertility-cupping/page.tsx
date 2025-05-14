"use client";

import BottomNav from "@/app/components/BottomNav";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import Infertility from "@/app/components/plans/Infertility";

export default function InfertilityPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <Infertility />
      <Footer />
      <BottomNav />
    </div>
  );
}
