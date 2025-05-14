import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Breadcrumb from "../components/BreadCrumb";
import Topbar from "../components/Topbar";
import BackToTop from "../components/BackToTop";
import PhoneCall from "../components/posts/PhoneCall";

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
         <PhoneCall/>
    </>
  )
}

export default page
