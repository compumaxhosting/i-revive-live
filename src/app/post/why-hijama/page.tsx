import BackToTop from "@/app/components/BackToTop"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import PhoneCall from "@/app/components/posts/PhoneCall"
import WhyHijama from "@/app/components/posts/WhyHijama"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <WhyHijama/>
      <Footer/>
      <BackToTop/>
      <PhoneCall/>
    </>
  )
}

export default page
