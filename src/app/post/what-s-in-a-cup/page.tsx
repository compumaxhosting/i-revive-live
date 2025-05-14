import BackToTop from "@/app/components/BackToTop"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import HeavyMetals from "@/app/components/posts/HeavyMetals"
import PhoneCall from "@/app/components/posts/PhoneCall"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <HeavyMetals/>
      <Footer/>
      <BackToTop/>
      <PhoneCall/>
    </>
  )
}

export default page
