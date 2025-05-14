import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
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
      <BottomNav />
    </>
  )
}

export default page
