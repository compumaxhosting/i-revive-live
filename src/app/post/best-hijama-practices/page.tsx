import BottomNav from "@/app/components/BottomNav";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import BestHijamaPractice from "@/app/components/posts/BestHijamaPractice";
import Topbar from "@/app/components/Topbar";
import React from "react";

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <BestHijamaPractice/>
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default page
