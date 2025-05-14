import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import WhyBloodCleanse from "@/app/components/posts/WhyBloodCleanse"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <WhyBloodCleanse/>
      <Footer/>
      <BottomNav  />
    </>
  )
}

export default page
