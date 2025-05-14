import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Breadcrumb from "../components/BreadCrumb";
import Topbar from "../components/Topbar";
import BackToTop from "../components/BackToTop";
import BottomNav from "../components/BottomNav";

const page = () => {
  return (
    <>
    <Topbar />
      <Header/>
      <Breadcrumb
        title="Testimonials"
        subtitle="Healing Journeys Shared by Our Clients"
      />
      <Testimonial />   
      <Footer/>
         <BackToTop />
         <BottomNav />
    </>
  )
}

export default page
