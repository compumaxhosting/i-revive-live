import BottomNav from '@/app/components/BottomNav'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import LevelTwo from '@/app/components/LevelTwo'
import Topbar from '@/app/components/Topbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <LevelTwo />
      <Footer />
      <BottomNav />
    </div>
  )
}

export default page
