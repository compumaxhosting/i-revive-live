import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import StressAndHijama from "@/app/components/posts/StressAndHijama"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <StressAndHijama/>
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default page
