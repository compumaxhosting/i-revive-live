import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import PhoneCall from "@/app/components/posts/PhoneCall"
import TheUltimateGuidance from "@/app/components/posts/TheUltimateGuidance"
import Topbar from "@/app/components/Topbar"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <TheUltimateGuidance/>
      <Footer/>
      <PhoneCall/>
    </>
  )
}

export default page
