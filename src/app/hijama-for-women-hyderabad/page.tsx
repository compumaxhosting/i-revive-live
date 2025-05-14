import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestHijamaCentreForLadiesHyderabad from '../components/BestHijamaCentreForLadiesHyderabad';
import Topbar from '../components/Topbar';
import BackToTop from '../components/BackToTop';

const page = () => {
  return (
    <>
    <Topbar/>
     <Header/>
    <BestHijamaCentreForLadiesHyderabad />
     <Footer/> 
     <BackToTop/>
    </>
  )
}

export default page
