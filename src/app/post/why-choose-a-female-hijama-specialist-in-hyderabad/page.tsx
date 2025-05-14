import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import WhyChooseFemaleHijamaTherapist from "@/app/components/posts/WhyChooseFemaleHijamaTherapist"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <WhyChooseFemaleHijamaTherapist/>
      <Footer/>
      <BottomNav  />
    </>
  )
}

export default page
