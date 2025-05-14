import BottomNav from "@/app/components/BottomNav"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import TheUltimateGuidance from "@/app/components/posts/TheUltimateGuidance"
import Topbar from "@/app/components/Topbar"

const page = () => {
  return (
    <>
    <Topbar/>
      <Header/>
      <TheUltimateGuidance/>
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default page
