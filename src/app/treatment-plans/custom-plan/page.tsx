"use client";

import BottomNav from "@/app/components/BottomNav";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import CustomPlan from "@/app/components/plans/CustomPlan";

export default function CustomPlanPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <CustomPlan />
      <Footer />
      <BottomNav  />
    </div>
  );
}
