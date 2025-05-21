import BackToTop from '@/app/components/BackToTop'
import Breadcrumb from '@/app/components/BreadCrumb'
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
      <Breadcrumb title="Course 3" />
      <LevelThree />
      <Footer />
      <BackToTop />
      <PhoneCall />
    </div>
  );
}

export default page
