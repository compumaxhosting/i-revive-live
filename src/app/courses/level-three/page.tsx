import BackToTop from '@/app/components/BackToTop'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import LevelThree from '@/app/components/LevelThree'
import PhoneCall from '@/app/components/posts/PhoneCall'
import Topbar from '@/app/components/Topbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <LevelThree />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  )
}

export default page
