import BackToTop from "@/app/components/BackToTop"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import EffectsOfHijama from "@/app/components/posts/EffectsOfHijama"
import PhoneCall from "@/app/components/posts/PhoneCall"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <EffectsOfHijama/>
      <Footer/>
      <BackToTop/>
      <PhoneCall/>
    </>
  )
}

export default page
