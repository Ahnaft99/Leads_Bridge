import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Market from '../Components/Market'
import OurStory from '../Components/OurStory'
import Fintrix from '../Components/Fintrix'
import Service from '../Components/Service'
import { Approach } from '../Components/Approach'
import Business from '../Components/Business'
import HelpAmazon from '../Components/HelpAmazon'
import { Contact } from '../Components/Contact'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Market/>
    <OurStory/>
    <Fintrix/>
    <Service/>
    <Approach/>
    <Business/>
    <HelpAmazon/>
    <Contact/>
   
    </>
  )
}

export default Home