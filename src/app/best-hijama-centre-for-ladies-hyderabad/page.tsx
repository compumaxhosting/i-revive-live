import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import LadiesHijama from '../components/LadiesHijama';
import Topbar from '../components/Topbar';
import PhoneCall from '../components/posts/PhoneCall';
import BackToTop from '../components/BackToTop';

const page = () => {
  return (
    <>
    <Topbar/>
     <Header/>
     <LadiesHijama/>
     <Footer/> 
     <BackToTop/>
     <PhoneCall/>
    </>
  )
}

export default page
