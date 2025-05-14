import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurBlog from "../components/OurBlog";
import Topbar from "../components/Topbar";
import Breadcrumb from "../components/BreadCrumb";
import BackToTop from "../components/BackToTop";
import PhoneCall from "../components/posts/PhoneCall";

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb
        title="Our Blogs" />
      <OurBlog />
      <Footer />
         <BackToTop />
         <PhoneCall />

    </>
  );
};

export default page;
