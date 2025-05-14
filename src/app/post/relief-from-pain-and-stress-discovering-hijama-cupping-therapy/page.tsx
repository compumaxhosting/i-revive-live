import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import ReliefFromPain from "@/app/components/posts/ReliefFromPain"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <ReliefFromPain/>
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default page
