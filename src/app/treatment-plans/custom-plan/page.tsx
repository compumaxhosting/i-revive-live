"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import CustomPlan from "@/app/components/plans/CustomPlan";
import PhoneCall from "@/app/components/posts/PhoneCall";

export default function CustomPlanPage() {
  return (
    <div>
      <Topbar />
      <Header />
      <CustomPlan />
      <Footer />
      <PhoneCall />
    </div>
  );
}
