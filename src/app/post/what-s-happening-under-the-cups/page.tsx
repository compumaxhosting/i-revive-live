import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import WhatsHappeningUnderCups from "@/app/components/posts/WhatsHappeningUnderCups"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <WhatsHappeningUnderCups/>
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default page
