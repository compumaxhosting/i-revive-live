import React from "react";
import Header from "../components/Header";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Breadcrumb from "../components/BreadCrumb";
import Topbar from "../components/Topbar";
import BackToTop from "../components/BackToTop";
import PhoneCall from "../components/posts/PhoneCall";

const page = () => {
  return (
    <>
    <Topbar/>
     <Header/>
     <Breadcrumb title="FAQs" subtitle="Frequently Asked Questions" />
     <Faq/>
     <Footer/> 
         <BackToTop />
         <PhoneCall />
    </>
  )
}

export default page
