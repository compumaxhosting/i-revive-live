import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import EffectsOfHijama from "@/app/components/posts/EffectsOfHijama"
import Topbar from "@/app/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <EffectsOfHijama/>
      <Footer/>
    </>
  )
}

export default page
