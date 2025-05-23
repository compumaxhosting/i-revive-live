import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import PCOS from "@/app/components/posts/Pcos"
import PhoneCall from "@/app/components/posts/PhoneCall"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <PCOS/>
      <Footer/>
      <PhoneCall/>
    </>
  )
}

export default page
