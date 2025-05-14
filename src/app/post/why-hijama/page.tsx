import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
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
      <BottomNav/>
    </>
  )
}

export default page
