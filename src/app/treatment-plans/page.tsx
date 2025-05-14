import React from "react";
import Header from "../components/Header";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
import Breadcrumb from "../components/BreadCrumb";
import BackToTop from "../components/BackToTop";
import Topbar from "../components/Topbar";
import PhoneCall from "../components/posts/PhoneCall";

const page = () => {
  return (
    <>
    <Topbar />
      <Header/>
      <Breadcrumb
        title="Treatment Plans"
        subtitle="Explore Our Cupping Therapy Treatments"
      />
      <WhatWeDo showMoreButton={false}/>
      <Footer/>
         <BackToTop />
         <PhoneCall/>
    </>
  )
}

export default page
