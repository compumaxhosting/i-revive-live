import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import HeavyMetals from "@/app/components/posts/HeavyMetals"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <HeavyMetals/>
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default page
