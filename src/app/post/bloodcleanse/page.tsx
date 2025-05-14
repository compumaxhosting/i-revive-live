
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import PhoneCall from "@/app/components/posts/PhoneCall"
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
      <PhoneCall/>
    </>
  )
}

export default page
