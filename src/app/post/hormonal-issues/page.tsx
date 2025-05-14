import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import HarmonalIssue from "@/app/components/posts/HarmonalIssue"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <HarmonalIssue/>
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default page
