import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import LadiesHijama from '../components/LadiesHijama';
import Topbar from '../components/Topbar';
import BottomNav from '../components/BottomNav';

const page = () => {
  return (
    <>
    <Topbar/>
     <Header/>
     <LadiesHijama/>
     <Footer/> 
     <BottomNav/>
    </>
  )
}

export default page
