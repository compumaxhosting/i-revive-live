import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestHijamaCentreForLadiesHyderabad from '../components/BestHijamaCentreForLadiesHyderabad';
import Topbar from '../components/Topbar';
import BackToTop from '../components/BackToTop';
import PhoneCall from '../components/posts/PhoneCall';

const page = () => {
  return (
    <>
    <Topbar/>
     <Header/>
    <BestHijamaCentreForLadiesHyderabad />
     <Footer/> 
     <BackToTop/>
     <PhoneCall/>
    </>
  )
}

export default page
