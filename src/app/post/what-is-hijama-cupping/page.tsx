import BackToTop from "@/app/components/BackToTop"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import PhoneCall from "@/app/components/posts/PhoneCall"
import WhatIsHijamaCupping from "@/app/components/posts/WhatIsHijamaCupping"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <WhatIsHijamaCupping/>
      <Footer/>
      <BackToTop/>
      <PhoneCall/>
    </>
  )
}

export default page
